export interface ScreenifyAiPromptDemo {
  id: string;
  prompt: string;
  category: "AUTO ZOOM & CURSOR" | "ASPECT & FRAMING" | "AUDIO & CAPTIONS" | "PRESET & TRIM";
  appliedSummary: string;
  changes: string[];
  timelinePreview: string;
}

export const SCREENIFY_AI_PROMPT_DEMOS: ScreenifyAiPromptDemo[] = [
  {
    id: "zoom-aspect-padding",
    prompt: "Zoom in 2.2x at 0:02 for 3s, switch aspect ratio to 16:9, and set padding to 8%",
    category: "AUTO ZOOM & CURSOR",
    appliedSummary:
      "Applied local smart edit: added a 2.2x zoom at 0:02 for 3.0s, switched aspect ratio to 16:9, and set canvas padding to 8%.",
    changes: [
      "Added 2.2x spring zoom block (0:02 → 0:05)",
      "Updated aspect ratio to 16:9 widescreen",
      "Adjusted background padding to 8% with 70px rounded corners",
    ],
    timelinePreview: "2.2x Zoom (0:02–0:05) • 16:9 Canvas • 8% Padding",
  },
  {
    id: "punchy-clicks",
    prompt: "Add punchy 2.2x zooms on my clicks and smooth my cursor",
    category: "AUTO ZOOM & CURSOR",
    appliedSummary:
      "Applied local smart edit: synthesized 2.2x click-follow zoom blocks across click clusters and enabled Smooth 240Hz spring cursor stabilization.",
    changes: [
      "Inserted automatic 2.2x click-follow zoom keyframes",
      "Set cursor spring physics to Smooth (RK4 critically-damped)",
      "Enabled click-anticipation deceleration & vector pointer",
    ],
    timelinePreview: "Auto Click-Zooms Active • 240Hz Smooth Cursor",
  },
  {
    id: "vertical-shorts",
    prompt: "Trim the first 2 seconds and format for 9:16 vertical mobile",
    category: "ASPECT & FRAMING",
    appliedSummary:
      "Applied local smart edit: trimmed 0:00–0:02 from start of timeline and switched project canvas to 9:16 vertical (Reels / Shorts / TikTok).",
    changes: [
      "Trimmed leading 2.0s setup pause from timeline",
      "Switched canvas aspect ratio to 9:16 vertical",
      "Centered follow-cursor camera crop for mobile viewing",
    ],
    timelinePreview: "Trimmed 0:02–End • 9:16 Vertical Mobile Canvas",
  },
  {
    id: "boost-mic-denoise",
    prompt: "Boost mic volume to 130%, remove background fan noise, and tighten padding",
    category: "AUDIO & CAPTIONS",
    appliedSummary:
      "Applied local smart edit: boosted microphone gain to 130%, enabled on-device DeepFilterNet noise suppression, and set padding to 5%.",
    changes: [
      "Boosted isolated microphone track to 130%",
      "Enabled on-device neural noise & room-echo removal",
      "Tightened canvas padding to 5% for maximum legibility",
    ],
    timelinePreview: "Mic 130% + Neural Denoise • 5% Tight Padding",
  },
];

export interface ScreenifyPillarTab {
  id: string;
  badge: string;
  label: string;
  shortcut: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

export const SCREENIFY_PILLAR_TABS: ScreenifyPillarTab[] = [
  {
    id: "studio-editor",
    badge: "01 • MULTI-TRACK STUDIO & 240HZ SPRING ZOOMS",
    label: "Studio Editor & Auto-Zoom",
    shortcut: "Space • S",
    title: "Screen recordings that look directed, not just captured.",
    subtitle:
      "Separate synchronized tracks for raw screen video, high-frequency cursor telemetry, microphone, system audio, and webcam.",
    description:
      "Unlike flat recorders that bake your mouse pointer and layout into the pixels during capture, Screenify records every stream independently. Resize or hide your cursor, adjust 240Hz RK4 spring smoothing, drag purple 2x Zoom blocks on the timeline, or switch from 16:9 YouTube to 9:16 Reels after you finish recording.",
    image: "/screenify/02-studio-editor.png",
    imageAlt:
      "Screenify Studio Video Editor showing 16:9 canvas preview, Aspect Ratio and Background inspector, and multi-track timeline with automatic 2x Zoom blocks",
    highlights: [
      "240Hz Runge-Kutta (RK4) spring-physics cursor stabilization removes trackpad shakes & jitter",
      "Automatic click-follow zoom blocks (1.25x–3.5x) synthesized around click clusters",
      "Post-capture aspect ratio switching (Auto, 16:9, 16:10, 4:3, 1:1, 9:16) with custom wallpapers & gradients",
      "Crisp HiDPI vector cursor replacement (0.5x–5x size), click ripples, idle hide & seamless loop return",
    ],
  },
  {
    id: "precision-capture",
    badge: "02 • SCREENCAPTUREKIT & ASPECT-RATIO FRAMING",
    label: "Precision Capture Bar",
    shortcut: "⌘⇧2",
    title: "Precision capture that stays out of your way.",
    subtitle:
      "Record a full Retina display, a single application window, or an interactive aspect-ratio crop at up to 4K 60fps.",
    description:
      "Summon the Helium-White floating recorder bar with ⌘⇧2. Choose Full Display, a specific macOS window, or an interactive crop region with one-click 16:9, 16:10, 4:3, 1:1, and 9:16 presets, toggle Auto Zoom, and capture FaceTime/external camera, microphone, and system audio on isolated tracks.",
    image: "/screenify/01-recorder-and-overlay.png",
    imageAlt:
      "Screenify floating white-minimal recorder bar and interactive 16:10 aspect-ratio crop overlay with Auto zoom toggle",
    highlights: [
      "Zero-copy Apple Silicon ScreenCaptureKit pipeline capturing at up to 4K 60fps",
      "Interactive crop overlay with instant Free, 16:9, 16:10, 4:3, 1:1, and 9:16 framing presets",
      "Independent multi-track recording for Display/Window, Camera PiP, Microphone, and System Audio",
      "One-click Auto Zoom toggle builds your timeline zoom track while you record",
    ],
  },
  {
    id: "ai-smart-edit",
    badge: "03 • PLAIN-ENGLISH TIMELINE EDITING",
    label: "AI Smart Edit Assistant",
    shortcut: "AI Drawer",
    title: "Describe your edit in plain English. Applied in one click.",
    subtitle:
      "Built-in offline natural-language timeline planner—plus optional cloud model support—with instant one-click Undo.",
    description:
      "Open the Assistant drawer in the Studio Editor and type instructions like \"Zoom in 2.2x at 0:02 for 3s, switch aspect ratio to 16:9, and set padding to 8%\". Screenify parses your command locally on your Mac with zero API keys required and applies multi-step timeline zooms, trims, aspect changes, and audio adjustments immediately.",
    image: "/screenify/03-ai-smart-edit-assistant.png",
    imageAlt:
      "Screenify AI Smart Edit Assistant drawer applying a 2.2x zoom, 16:9 aspect ratio, and 8% padding from a plain-English prompt with one-click Undo",
    highlights: [
      "Works 100% offline out-of-the-box with zero API keys or subscriptions required",
      "Executes multi-step instructions: add zooms, trim start/end, switch 16:9 ↔ 9:16, adjust padding & audio",
      "Every AI edit logs a clear checklist of applied changes with instant 1-click Undo",
      "Optional OpenAI API key support in Settings for complex multi-turn editing workflows",
    ],
  },
  {
    id: "whisper-captions",
    badge: "04 • 100% LOCAL WHISPER AI & NEURAL AUDIO",
    label: "On-Device Captions & Audio",
    shortcut: "Captions",
    title: "Your speech is transcribed on this Mac — audio never leaves your computer.",
    subtitle:
      "Local Whisper ONNX speech-to-text in 20+ languages paired with on-device DeepFilterNet neural noise suppression.",
    description:
      "Generate word-accurate synchronized captions in English, Spanish, French, German, Japanese, Hindi, Chinese, Portuguese, and more directly on Apple Silicon. Edit transcript lines inline, customize caption typography and pill backdrop opacity, and strip room echo or keyboard clicks with on-device neural denoising.",
    image: "/screenify/04-cursor-and-captions.png",
    imageAlt:
      "Screenify On-Device Whisper AI Captions panel showing 'Your speech is transcribed on this Mac — the audio never leaves your computer' with language auto-detection",
    highlights: [
      "100% on-device Whisper AI transcription — zero cloud uploads, zero per-minute transcription fees",
      "Automatic spoken language detection across 20+ languages with inline transcript editing",
      "Customizable studio caption styling: Small/Medium/Large font, text color, pill opacity & placement",
      "Built-in DeepFilterNet neural audio denoising removes fan hum, room echo & keyboard clicks",
    ],
  },
  {
    id: "teleprompter-hud",
    badge: "05 • CONTENT-PROTECTED TELEPROMPTER & NATIVE HUD",
    label: "Invisible Teleprompter",
    shortcut: "⌘⇧T",
    title: "Read your script right below the lens. 100% invisible in the recording.",
    subtitle:
      "macOS window content protection keeps your floating Teleprompter visible to your eyes while excluding it from the captured video.",
    description:
      "Deliver confident founder walkthroughs and scripted tutorials without looking away from the camera. Screenify's floating Teleprompter uses native macOS window content protection so ScreenCaptureKit never records it—complete with adjustable scroll speed (0.5x–4x), font size, opacity, Mirror X mode, and live word/duration telemetry.",
    image: "/screenify/05-teleprompter-and-permissions.png",
    imageAlt:
      "Screenify Content-Protected Floating Teleprompter HUD (invisible to screen capture) alongside the one-click macOS Screen Recording and Accessibility setup window",
    highlights: [
      "Native macOS window content protection — visible on your screen, 100% invisible in your video",
      "Adjustable auto-scroll speed (0.5x–4.0x), font size (14px–44px), backdrop opacity & Mirror X flip",
      "Live word count & speaking-time estimator (e.g. 52 words · ~22s) in the teleprompter titlebar",
      "Guided 1-click macOS Screen Recording & Accessibility setup dialog",
    ],
  },
];

export interface ScreenifyStudioPreset {
  name: string;
  tag: string;
  aspect: string;
  summary: string;
}

export const SCREENIFY_STUDIO_PRESETS: ScreenifyStudioPreset[] = [
  {
    name: "Cinematic macOS Glass",
    tag: "Default Showcase",
    aspect: "16:9 • 8% Padding • 70px Corners",
    summary:
      "Balanced studio framing with soft macOS window elevation, 2.0x smooth spring click-zooms, and subtle motion blur.",
  },
  {
    name: "Product Launch Zoom",
    tag: "Keynote & SaaS Demos",
    aspect: "16:9 • 2.4x Rapid Spring Zoom",
    summary:
      "Punchy Apple-keynote-style camera pans into every UI interaction with crisp 1.5x vector cursors and click ripples.",
  },
  {
    name: "Tutorial Crisp",
    tag: "Dev & Design Walkthroughs",
    aspect: "16:10 • 4% Tight Padding",
    summary:
      "Maximizes IDE code, terminal text, and Figma UI legibility with gentle 1.8x zooms and on-device Whisper captions.",
  },
  {
    name: "Social Reels 9:16",
    tag: "Shorts • Reels • TikTok • X",
    aspect: "9:16 Vertical • Follow-Cursor Crop",
    summary:
      "Reframes widescreen recordings into vertical mobile video that automatically tracks your active cursor and clicks.",
  },
  {
    name: "Clean Minimal",
    tag: "Documentation & Changelog",
    aspect: "Auto Aspect • Hairline Frame",
    summary:
      "Pure paper-white or stone backdrop with distraction-free cursor smoothing for engineering PRs and docs.",
  },
];

export const SCREENIFY_WHAT_YOU_GET_LIST: {
  code: string;
  text: string;
}[] = [
  {
    code: "60fps",
    text: "native Apple Silicon 4K 60fps capture for displays, windows & crop areas",
  },
  {
    code: "240Hz",
    text: "RK4 spring-physics cursor stabilization, vector pointers & auto click-zooms",
  },
  {
    code: "AI",
    text: "plain-English AI Smart Edit Assistant (works 100% offline + 1-click Undo)",
  },
  {
    code: "CC",
    text: "on-device Whisper AI captions in 20+ languages (audio never leaves your Mac)",
  },
  {
    code: "DSP",
    text: "on-device DeepFilterNet neural mic denoising removes echo & fan noise",
  },
  {
    code: "HUD",
    text: "content-protected floating Teleprompter invisible to screen recordings",
  },
  {
    code: "MIT",
    text: "100% free & open source (MIT License) • zero watermarks or subscriptions",
  },
];

export interface ScreenifyComparisonRow {
  capability: string;
  screenify: string;
  commercialRecorders: string;
  obsStudio: string;
  quicktime: string;
}

export const SCREENIFY_COMPARISON_ROWS: ScreenifyComparisonRow[] = [
  {
    capability: "Post-Capture Cursor Resizing & 240Hz Spring Smoothing",
    screenify: "Yes — 240Hz RK4 spring physics & vector cursor",
    commercialRecorders: "Yes",
    obsStudio: "No — baked into flat video",
    quicktime: "No — baked into flat video",
  },
  {
    capability: "Automatic Click-Follow Zoom Blocks",
    screenify: "Yes — Auto click-clusters + manual timeline",
    commercialRecorders: "Yes",
    obsStudio: "No",
    quicktime: "No",
  },
  {
    capability: "Plain-English AI Timeline Editing Assistant",
    screenify: "Yes — 100% Offline Engine + Optional Cloud",
    commercialRecorders: "No",
    obsStudio: "No",
    quicktime: "No",
  },
  {
    capability: "Built-In Content-Protected Invisible Teleprompter",
    screenify: "Yes — Built-in & invisible in recording",
    commercialRecorders: "Paid add-on / separate app",
    obsStudio: "No",
    quicktime: "No",
  },
  {
    capability: "100% Offline On-Device Whisper AI Captions",
    screenify: "Yes — Local Apple Silicon Whisper ONNX",
    commercialRecorders: "Cloud upload / paid tier",
    obsStudio: "External plugin required",
    quicktime: "No",
  },
  {
    capability: "On-Device Neural Mic Noise Suppression",
    screenify: "Yes — DeepFilterNet neural denoising",
    commercialRecorders: "Basic filters",
    obsStudio: "Basic filters",
    quicktime: "No",
  },
  {
    capability: "Post-Capture Aspect Ratio Reframing (16:9 ↔ 9:16)",
    screenify: "Yes — 16:9, 16:10, 4:3, 1:1, 9:16 anytime",
    commercialRecorders: "Yes",
    obsStudio: "No — fixed canvas before recording",
    quicktime: "No",
  },
  {
    capability: "License & Price",
    screenify: "$0 Forever • Open Source (MIT) • Zero Watermarks",
    commercialRecorders: "$100–$220+ / year subscription",
    obsStudio: "Free (GPL)",
    quicktime: "Free (macOS built-in)",
  },
];

export const SCREENIFY_SHORTCUTS: { keys: string; action: string }[] = [
  {
    keys: "⌘ ⇧ 2",
    action: "Open or toggle the floating Screenify Recorder Bar from any app",
  },
  {
    keys: "⌘ ⇧ T",
    action: "Toggle the content-protected floating Teleprompter HUD",
  },
  {
    keys: "Space",
    action: "Play or pause the 60fps Studio Editor timeline preview",
  },
  {
    keys: "S  or  ⌘ B",
    action: "Split the active video clip or zoom block at the playhead",
  },
  {
    keys: "⌫ Delete",
    action: "Delete the selected timeline clip or purple zoom keyframe block",
  },
  {
    keys: "⌘ Z  /  ⌘ ⇧ Z",
    action: "Undo or Redo timeline cuts, AI Smart Edits, and inspector changes",
  },
];

export const SCREENIFY_FAQS: { q: string; a: string }[] = [
  {
    q: "Does Screenify upload my screen recordings or voice audio to the cloud?",
    a: "No. All screen recording, 4K 60fps video rendering, DeepFilterNet neural audio denoising, and Whisper speech-to-text caption transcription run 100% locally on your Mac. Your video and audio never leave your computer. Even the AI Smart Edit Assistant works offline out-of-the-box.",
  },
  {
    q: "Is Screenify really free, and are there any watermarks or export limits?",
    a: "Screenify is 100% free and open source under the MIT License at github.com/Shubham-sharma8/screenify. There are zero watermarks, zero time limits, zero cloud subscriptions, and full 4K 60fps MP4, MOV, and GIF exports are included out of the box.",
  },
  {
    q: "Can I change the zoom level, aspect ratio, or cursor size after I finish recording?",
    a: "Yes. Unlike standard recorders that bake your cursor and layout into a flat video file, Screenify records your raw screen video, high-frequency cursor coordinates, microphone, system audio, and camera on separate synchronized tracks. In the Studio Editor, you can resize or hide the cursor, change 240Hz spring smoothing physics, add or drag 2x Zoom blocks, or switch from 16:9 widescreen to 9:16 vertical at any time without re-recording.",
  },
  {
    q: "Will people watching my video see the Teleprompter window?",
    a: "No. Screenify's floating Teleprompter enables native macOS window content protection, which instructs macOS ScreenCaptureKit to exclude the teleprompter window from the recorded video frame buffer while keeping your script clearly visible on your display right below your webcam.",
  },
  {
    q: "Why does Screenify ask for Screen Recording and Accessibility permissions?",
    a: "Screen Recording is required by macOS ScreenCaptureKit to capture your display or application windows. Accessibility allows Screenify to detect window bounds and track precise mouse click locations so it can synthesize automatic click-follow zoom blocks and 240Hz spring-smoothed cursor paths. Microphone and Camera permissions are optional and only requested when recording voiceovers or a camera overlay.",
  },
  {
    q: "Which Macs and macOS versions are supported?",
    a: "Screenify v1.12.0 is built for Apple Silicon Macs (M1, M2, M3, M4 — arm64) running macOS 13.5 Ventura, macOS 14 Sonoma, macOS 15 Sequoia, or macOS Tahoe 26.",
  },
];
