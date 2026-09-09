"use client";
import React, { useEffect, useState, useMemo } from "react";
import {
  Users,
  Search,
  Filter,
  Download,
  Mail,
  UserPlus,
  RefreshCw,
  Phone,
  Building2,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  Send,
  Trash2,
  Edit2,
  Check,
  AlertCircle,
  Copy,
  ExternalLink,
} from "lucide-react";

interface UserContact {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  company: string | null;
  source: string;
  status: string;
  notes: string | null;
  tags: string[];
  lastEmailedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Stats {
  total: number;
  subscribed: number;
  enterprise: number;
  withPhone: number;
}

export default function UserbasePage() {
  const [contacts, setContacts] = useState<UserContact[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, subscribed: 0, enterprise: 0, withPhone: 0 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<UserContact | null>(null);

  // Form states
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "DIRECT",
    status: "SUBSCRIBED",
    notes: "",
  });

  // Bulk email state
  const [emailForm, setEmailForm] = useState({
    target: "ALL",
    subject: "Exciting Update from Cogify: What's New & Launch Announcements",
    messageHtml: `<h3>Hello from Cogify,</h3>
<p>We are thrilled to share our latest product updates and enhancements designed to give you enterprise-grade, offline data sovereignty.</p>
<p>Check out the latest features and download the update at <a href="https://cogify.me">cogify.me</a>.</p>
<p>Best regards,<br><strong>Shubham Sharma & The Cogify Team</strong></p>`,
  });
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);
  const [isBackfilling, setIsBackfilling] = useState(false);

  const fetchContacts = async (backfill = false) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (sourceFilter !== "ALL") params.set("source", sourceFilter);
      if (statusFilter !== "ALL") params.set("status", statusFilter);
      if (backfill) params.set("backfill", "true");
      params.set("limit", "200");

      const res = await fetch(`/api/admin/userbase?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to load userbase");
      const data = await res.json();
      setContacts(data.contacts || []);
      if (data.stats) setStats(data.stats);
    } catch (err: any) {
      console.error("Error fetching userbase:", err);
    } finally {
      setLoading(false);
      setIsBackfilling(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [search, sourceFilter, statusFilter]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(contacts.map((c) => c.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  // Add Contact Submit
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/userbase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add contact");
      setIsAddOpen(false);
      setContactForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        source: "DIRECT",
        status: "SUBSCRIBED",
        notes: "",
      });
      fetchContacts();
    } catch (err: any) {
      alert(err.message);
    }
  };

  // Edit Contact Submit
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedContact) return;
    try {
      const res = await fetch("/api/admin/userbase", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedContact.id, ...contactForm }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update contact");
      setIsEditOpen(false);
      setSelectedContact(null);
      fetchContacts();
    } catch (err: any) {
      alert(err.message);
    }
  };

  // Delete Contact
  const handleDelete = async (id: string, email: string) => {
    if (!confirm(`Are you sure you want to remove ${email} from your userbase?`)) return;
    try {
      const res = await fetch(`/api/admin/userbase?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete contact");
      fetchContacts();
    } catch (err: any) {
      alert(err.message);
    }
  };

  // Send Bulk Email Submit
  const handleSendBulkEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirm(`Are you ready to dispatch this email to the selected recipients via Resend?`)) return;
    try {
      setSendingEmail(true);
      setEmailStatus(null);
      const res = await fetch("/api/admin/userbase/bulk-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          target: emailForm.target,
          contactIds: emailForm.target === "SELECTED" ? selectedIds : [],
          subject: emailForm.subject,
          messageHtml: emailForm.messageHtml,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to dispatch bulk email");
      setEmailStatus(`Successfully dispatched to ${data.sentCount} recipients (${data.failedCount} failed).`);
      setTimeout(() => {
        setIsEmailOpen(false);
        setEmailStatus(null);
        fetchContacts();
      }, 2500);
    } catch (err: any) {
      setEmailStatus(`Error: ${err.message}`);
    } finally {
      setSendingEmail(false);
    }
  };

  // Export to Excel / CSV with UTF-8 BOM
  const exportToExcel = () => {
    const headers = ["Name", "Email", "Mobile Number", "Company", "Source", "Status", "Date Added", "Last Emailed", "Notes"];
    const rows = contacts.map((c) => [
      `"${(c.name || "").replace(/"/g, '""')}"`,
      `"${c.email.replace(/"/g, '""')}"`,
      `"${(c.phone || "").replace(/"/g, '""')}"`,
      `"${(c.company || "").replace(/"/g, '""')}"`,
      `"${c.source}"`,
      `"${c.status}"`,
      `"${new Date(c.createdAt).toLocaleDateString()}"`,
      `"${c.lastEmailedAt ? new Date(c.lastEmailedAt).toLocaleDateString() : "Never"}"`,
      `"${(c.notes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `cogify_userbase_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20">
              Super Admin Exclusive
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-1">
            Userbase & Audience Directory
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
            Manage your verified customer emails, mobile contacts, enterprise leads, and dispatch launch updates.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setIsBackfilling(true);
              fetchContacts(true);
            }}
            disabled={isBackfilling}
            title="Import submitters from existing tickets into Userbase"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 transition"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isBackfilling ? "animate-spin" : ""}`} />
            Sync from Tickets
          </button>

          <button
            onClick={exportToExcel}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 transition shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Export to Excel (.csv)
          </button>

          <button
            onClick={() => {
              setEmailForm((prev) => ({
                ...prev,
                target: selectedIds.length > 0 ? "SELECTED" : "ALL",
              }));
              setIsEmailOpen(true);
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition shadow-sm shadow-indigo-500/20"
          >
            <Mail className="w-3.5 h-3.5" />
            Send Bulk Email {selectedIds.length > 0 ? `(${selectedIds.length})` : ""}
          </button>

          <button
            onClick={() => {
              setContactForm({
                name: "",
                email: "",
                phone: "",
                company: "",
                source: "DIRECT",
                status: "SUBSCRIBED",
                notes: "",
              });
              setIsAddOpen(true);
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition shadow-sm"
          >
            <UserPlus className="w-3.5 h-3.5" />
            Add Contact
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-zinc-900/60 p-4 rounded-xl border border-zinc-200 dark:border-white/10 shadow-sm">
          <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
            <span>Total Contacts</span>
            <Users className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">{stats.total}</div>
        </div>

        <div className="bg-white dark:bg-zinc-900/60 p-4 rounded-xl border border-zinc-200 dark:border-white/10 shadow-sm">
          <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
            <span>Subscribed</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
            {stats.subscribed}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900/60 p-4 rounded-xl border border-zinc-200 dark:border-white/10 shadow-sm">
          <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
            <span>Enterprise Leads</span>
            <Building2 className="w-4 h-4 text-cyan-500" />
          </div>
          <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mt-1">
            {stats.enterprise}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900/60 p-4 rounded-xl border border-zinc-200 dark:border-white/10 shadow-sm">
          <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
            <span>Mobile Numbers</span>
            <Phone className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mt-1">
            {stats.withPhone}
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-zinc-900/60 p-3 rounded-xl border border-zinc-200 dark:border-white/10">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search by name, email, mobile number, company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-zinc-900 dark:text-zinc-100"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 focus:outline-none"
          >
            <option value="ALL">All Sources</option>
            <option value="SUGGESTION">Suggestion</option>
            <option value="BUG_REPORT">Bug Report</option>
            <option value="ENTERPRISE">Enterprise</option>
            <option value="CONTACT">Contact Form</option>
            <option value="DIRECT">Direct / Manual</option>
            <option value="WEBSITE">Website</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 focus:outline-none"
          >
            <option value="ALL">All Statuses</option>
            <option value="SUBSCRIBED">Subscribed</option>
            <option value="UNSUBSCRIBED">Unsubscribed</option>
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white dark:bg-zinc-900/60 rounded-xl border border-zinc-200 dark:border-white/10 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-zinc-50/80 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4 w-8">
                  <input
                    type="checkbox"
                    checked={contacts.length > 0 && selectedIds.length === contacts.length}
                    onChange={handleSelectAll}
                    className="rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Mobile / Phone</th>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Source</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date Added</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-zinc-500">
                    <div className="inline-block w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-2" />
                    <p>Loading userbase contacts...</p>
                  </td>
                </tr>
              ) : contacts.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-zinc-500">
                    <Users className="w-8 h-8 mx-auto text-zinc-400 mb-2 opacity-50" />
                    <p className="font-medium">No contacts found</p>
                    <p className="text-[11px] text-zinc-400 mt-1">
                      Click "Sync from Tickets" above to automatically pull in all existing ticket submitters!
                    </p>
                  </td>
                </tr>
              ) : (
                contacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className={`hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition ${
                      selectedIds.includes(contact.id) ? "bg-indigo-50/50 dark:bg-indigo-950/20" : ""
                    }`}
                  >
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(contact.id)}
                        onChange={() => handleSelectOne(contact.id)}
                        className="rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-zinc-900 dark:text-zinc-100">
                        {contact.name || "Anonymous User"}
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                        <span>{contact.email}</span>
                        <button
                          onClick={() => copyToClipboard(contact.email)}
                          title="Copy email"
                          className="hover:text-indigo-500 transition"
                        >
                          {copiedEmail === contact.email ? (
                            <Check className="w-3 h-3 text-emerald-500" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {contact.phone ? (
                        <a
                          href={`tel:${contact.phone}`}
                          className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 font-mono"
                        >
                          <Phone className="w-3 h-3 text-zinc-400" />
                          {contact.phone}
                        </a>
                      ) : (
                        <span className="text-zinc-400 italic">Not provided</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-zinc-600 dark:text-zinc-400">
                      {contact.company || "—"}
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                        {contact.source}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {contact.status === "SUBSCRIBED" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Subscribed
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-500/10 text-zinc-500 border border-zinc-500/20">
                          <XCircle className="w-2.5 h-2.5" /> Unsubscribed
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => {
                            setSelectedContact(contact);
                            setContactForm({
                              name: contact.name || "",
                              email: contact.email,
                              phone: contact.phone || "",
                              company: contact.company || "",
                              source: contact.source,
                              status: contact.status,
                              notes: contact.notes || "",
                            });
                            setIsEditOpen(true);
                          }}
                          className="p-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
                          title="Edit Contact"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(contact.id, contact.email)}
                          className="p-1.5 rounded hover:bg-red-500/10 text-zinc-500 hover:text-red-500 transition"
                          title="Delete Contact"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Contact Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl max-w-md w-full p-6 border border-zinc-200 dark:border-white/10 shadow-2xl">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Add Contact to Userbase</h3>
            <p className="text-xs text-zinc-500 mb-4">Directly store a subscriber, customer, or lead.</p>
            <form onSubmit={handleAddSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Email Address *</label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Full Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Mobile / Phone Number</label>
                <input
                  type="tel"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Company</label>
                <input
                  type="text"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g. Acme Corp"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Source</label>
                  <select
                    value={contactForm.source}
                    onChange={(e) => setContactForm({ ...contactForm, source: e.target.value })}
                    className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                  >
                    <option value="DIRECT">Direct</option>
                    <option value="ENTERPRISE">Enterprise</option>
                    <option value="CONTACT">Contact Form</option>
                    <option value="SUGGESTION">Suggestion</option>
                    <option value="BUG_REPORT">Bug Report</option>
                    <option value="WEBSITE">Website</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Status</label>
                  <select
                    value={contactForm.status}
                    onChange={(e) => setContactForm({ ...contactForm, status: e.target.value })}
                    className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                  >
                    <option value="SUBSCRIBED">Subscribed</option>
                    <option value="UNSUBSCRIBED">Unsubscribed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Notes</label>
                <textarea
                  rows={2}
                  value={contactForm.notes}
                  onChange={(e) => setContactForm({ ...contactForm, notes: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                  placeholder="e.g. Requested offline enterprise pilot"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="px-3 py-1.5 text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Save Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Contact Modal */}
      {isEditOpen && selectedContact && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl max-w-md w-full p-6 border border-zinc-200 dark:border-white/10 shadow-2xl">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Edit Contact</h3>
            <p className="text-xs text-zinc-500 mb-4">{selectedContact.email}</p>
            <form onSubmit={handleEditSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Full Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Mobile / Phone Number</label>
                <input
                  type="tel"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Company</label>
                <input
                  type="text"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Source</label>
                  <select
                    value={contactForm.source}
                    onChange={(e) => setContactForm({ ...contactForm, source: e.target.value })}
                    className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                  >
                    <option value="DIRECT">Direct</option>
                    <option value="ENTERPRISE">Enterprise</option>
                    <option value="CONTACT">Contact Form</option>
                    <option value="SUGGESTION">Suggestion</option>
                    <option value="BUG_REPORT">Bug Report</option>
                    <option value="WEBSITE">Website</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Status</label>
                  <select
                    value={contactForm.status}
                    onChange={(e) => setContactForm({ ...contactForm, status: e.target.value })}
                    className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                  >
                    <option value="SUBSCRIBED">Subscribed</option>
                    <option value="UNSUBSCRIBED">Unsubscribed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Notes</label>
                <textarea
                  rows={2}
                  value={contactForm.notes}
                  onChange={(e) => setContactForm({ ...contactForm, notes: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditOpen(false)}
                  className="px-3 py-1.5 text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Send Bulk Email Modal */}
      {isEmailOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl max-w-xl w-full p-6 border border-zinc-200 dark:border-white/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Dispatch Announcement to Userbase
              </h3>
            </div>
            <p className="text-xs text-zinc-500 mb-4">
              Sends an official announcement or product launch update directly via Resend transactional email.
            </p>

            <form onSubmit={handleSendBulkEmail} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Target Audience</label>
                <select
                  value={emailForm.target}
                  onChange={(e) => setEmailForm({ ...emailForm, target: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none"
                >
                  <option value="ALL">All Active Subscribed Users ({stats.subscribed})</option>
                  <option value="ENTERPRISE">Enterprise Contacts Only ({stats.enterprise})</option>
                  {selectedIds.length > 0 && (
                    <option value="SELECTED">Specifically Selected Contacts ({selectedIds.length})</option>
                  )}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Email Subject *</label>
                <input
                  type="text"
                  required
                  value={emailForm.subject}
                  onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Message Content (HTML or formatted text) *
                </label>
                <textarea
                  rows={6}
                  required
                  value={emailForm.messageHtml}
                  onChange={(e) => setEmailForm({ ...emailForm, messageHtml: e.target.value })}
                  className="w-full mt-1 px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:outline-none font-mono text-xs"
                />
              </div>

              {emailStatus && (
                <div
                  className={`p-3 rounded-lg text-xs font-medium ${
                    emailStatus.startsWith("Error")
                      ? "bg-red-500/10 text-red-500 border border-red-500/20"
                      : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                  }`}
                >
                  {emailStatus}
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-zinc-400">
                  Powered by Resend API • Rate-limited and paced safely
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEmailOpen(false)}
                    disabled={sendingEmail}
                    className="px-3 py-1.5 text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={sendingEmail}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50"
                  >
                    {sendingEmail ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Dispatching...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Broadcast
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
