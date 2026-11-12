export const OTTIE_DMG_URL =
  "https://github.com/Shubham-sharma8/cogifyme/releases/download/ottie-v1.0.0/Ottie.dmg";
export const OTTIE_GITHUB_URL =
  "https://github.com/Shubham-sharma8/cogifyme/releases/tag/ottie-v1.0.0";
export const OTTIE_SHA256 =
  "45490a1e193a49a305be3ca066079e244a9f903862b05ef043a47390050de662";
export const OTTIE_SIZE = "2.4 MB";
export const TRYMACAPPS_URL = "https://www.trymacapps.com/shubham/wifyy";
export const TRYMACAPPS_BADGE_IMG = "/images/wifyy/trymacapps-featured.svg";

export interface OttiePersona {
  badge: string;
  title: string;
  body: string;
}

export const OTTIE_PERSONAS: Record<string, OttiePersona> = {
  everyone: {
    badge: "COZY DESK COMPANION · 7 WELLNESS WALLS",
    title: "The break companion you actually look forward to.",
    body: "Instead of harsh alarm pop-ups that you immediately mute, Ottie lives gently on your desktop, yawns when you've been staring too long, drapes a soft scalloped blanket over your screen for 20-20-20 eye rest, and nudges you to drink water, stretch your back, walk downstairs, or call mom & dad.",
  },
  developers: {
    badge: "XCODE & VS CODE AWARE · CUTEST ROBO-OTTIE MODE",
    title: "Codes on a tiny laptop when you code — and waits till you finish typing.",
    body: "When you're deep in Xcode, Cursor, or Terminal, Ottie pulls out its own mini laptop and types right alongside you. Switch into Cutest Robo-Ottie mode for neon cyan visor scans, jetpack flights, and Neural Core Recharge walls — with polite keystroke deferral so it never interrupts mid-commit.",
  },
  "designers & creators": {
    badge: "54 MIX-AND-MATCH OUTFITS · 93 SPRING ANIMATIONS",
    title: "A 23-channel harmonic spring friend with Nintendo-grade polish.",
    body: "While you paint in Figma or edit video, Ottie paints on a tiny easel, sips matcha or boba, flips pancakes, or spins a DJ turntable. Customize 20 tops, 13 bottoms, 11 gloves, and 25 hats in the live split-pane Dressing Room Studio.",
  },
  "remote teams & meetings": {
    badge: "CAMERA & MIC DEFERRAL · RIGHT-CLICK FOCUS MODE",
    title: "Reads the room and steps aside during Zoom, Meet, and screen shares.",
    body: "Camera or microphone active? Full-screen keynote presentation running? Ottie automatically pauses break walls and hides politely until your call finishes. Need 100% zero movement? Right-click Ottie for 1-click Focus Mode.",
  },
};

export interface OttieBreakWall {
  id: string;
  tabLabel: string;
  emoji: string;
  title: string;
  subtitle: string;
  badge: string;
  accentColor: string;
  pillBg: string;
  image: string;
  secondaryImage?: string;
  width: number;
  height: number;
  description: string;
  ctaPreview: string;
}

export const OTTIE_BREAK_WALLS: OttieBreakWall[] = [
  {
    id: "peekaboo",
    tabLabel: "👁️ Peekaboo Blanket",
    emoji: "👁️",
    title: "Peekaboo Blanket Wall (20-20-20 Eye Rest)",
    subtitle: "Find the farthest thing you can see while Ottie counts to 6.",
    badge: "Peekaboo break · Eye Rest",
    accentColor: "#2E705E",
    pillBg: "#E6F0EC",
    image: "/images/ottie/03-break-overlay-counting.png",
    secondaryImage: "/images/ottie/02-blanket-drape-transition.png",
    width: 2240,
    height: 1400,
    description:
      "Follows the optometrist-recommended 20-20-20 rule. A soft scalloped dark-sage blanket drapes smoothly over your workspace while Ottie covers both eyes with its paws — and mischievously peeks with one sparkly eye at '4!' to check if you're looking 20 feet away.",
    ctaPreview: "Snooze 5 min · Skip this one (esc)",
  },
  {
    id: "water",
    tabLabel: "💧 Aquatic Water Wave",
    emoji: "💧",
    title: "Aquatic Water Wave Wall & Daily Hydration Tracker",
    subtitle: "Drink a tall, cool glass of water. Glass 4 of 8 completed today.",
    badge: "Hydration Pause · Water Reminder",
    accentColor: "#1F859E",
    pillBg: "#E3F3F7",
    image: "/images/ottie/09-water-cover-display.png",
    width: 2240,
    height: 1400,
    description:
      "Immersive deep-aqua ocean caustics and rising hydration bubbles drape across your display. Log your daily 8-glass water goal in a single click ('💧 I drank a glass! (+1)') right from the full-screen wave wall or menu bar popover.",
    ctaPreview: "💧 I drank a glass! (+1)",
  },
  {
    id: "parents",
    tabLabel: "❤️ Talk to Parents Hearth",
    emoji: "❤️",
    title: "Talk to Parents & Family Hearth Wall",
    subtitle: "Call mom & dad ❤️ — a quick 5-minute call or voice note.",
    badge: "Family & Loved Ones · Talk to Parents",
    accentColor: "#CC476B",
    pillBg: "#FCEBF0",
    image: "/images/ottie/10-family-reminder-cover.png",
    width: 2240,
    height: 1400,
    description:
      "We get so busy shipping code and answering Slack that weeks fly by. This warm twilight-rose hearth wall with floating embers gently reminds you to send a quick voice note or call your parents and loved ones.",
    ctaPreview: "❤️ Called / Said hello!",
  },
  {
    id: "robo",
    tabLabel: "🤖 Cutest Robo Cyber-Grid",
    emoji: "🤖",
    title: "Cutest Robo-Ottie Cyber-Grid Wall",
    subtitle: "Rebooting optical sensors & neural core to 100%.",
    badge: "Cutest Robo-Ottie Cyber Wall · Neural Core Recharge",
    accentColor: "#298AC7",
    pillBg: "#E5F2FA",
    image: "/images/ottie/13-robo-cyber-grid-wall.png",
    width: 2240,
    height: 1400,
    description:
      "Designed for sci-fi & mecha fans. Neon cyan perspective grids and rotating concentric HUD radar rings surround Cutest Robo-Ottie (complete with LED chest heart, antenna visor, and mecha paws) while your optical sensors recharge.",
    ctaPreview: "⚡ 100% Supercharged! 🤖",
  },
  {
    id: "stairs",
    tabLabel: "🪜 Downstairs Staircase",
    emoji: "🪜",
    title: "Downstairs Walk Staircase Wall",
    subtitle: "Take a 2-minute walk down & up the stairs.",
    badge: "Stair Walk & Posture Wall · Go Down & Up Stairs",
    accentColor: "#9A6B26",
    pillBg: "#F7EFE2",
    image: "/images/ottie/14-staircase-walk-wall.png",
    width: 2240,
    height: 1400,
    description:
      "Sitting for 4 hours straight drains your focus. Animated grand twin staircases frame your screen, nudging you to step away from your desk, walk downstairs and back up, and get your circulation flowing.",
    ctaPreview: "Walked the stairs! 🪜✨",
  },
  {
    id: "stretch",
    tabLabel: "🧘 Stretch Zen Forest",
    emoji: "🧘",
    title: "Stretch Back Zen Bamboo Forest Wall",
    subtitle: "Stand up & stretch paws tall. Reach overhead and roll your shoulders.",
    badge: "Movement & Posture · Stretch Break",
    accentColor: "#2E705E",
    pillBg: "#E6F0EC",
    image: "/images/ottie/15-stretch-zen-bamboo-wall.png",
    width: 2240,
    height: 1400,
    description:
      "Swaying emerald bamboo stalks, calm ripples, and floating forest spores transform your monitor into a tranquil zen sanctuary so you can un-hunch your neck, roll your shoulders, and reset your posture.",
    ctaPreview: "Done stretching ✨",
  },
  {
    id: "tea",
    tabLabel: "🍵 Cozy Tea & Snack Café",
    emoji: "🍵",
    title: "Cozy Tea & Snack Café Wall",
    subtitle: "Pause for warm tea or a mindful snack.",
    badge: "Cozy Tea & Snack Café Wall · Mindful Refuel",
    accentColor: "#A66A38",
    pillBg: "#F6ECE3",
    image: "/images/ottie/16-tea-cafe-wall.png",
    width: 2240,
    height: 1400,
    description:
      "Warm Edison café string lights and rising aromatic steam ribbons invite you to brew a cup of matcha, herbal tea, or espresso and enjoy a mindful 5-minute refuel away from your keyboard.",
    ctaPreview: "Enjoyed tea & snack! 🍵✨",
  },
];

export interface OttieOutfitOption {
  id: string;
  label: string;
  emoji: string;
  category: string;
  speech: string;
  topLabel: string;
  bottomLabel: string;
  glovesLabel: string;
  hatLabel: string;
  accent: string;
}

export const OTTIE_OUTFIT_PRESETS: OttieOutfitOption[] = [
  {
    id: "sprout",
    label: "🌱 Natural Sprout",
    emoji: "🌱",
    category: "Signature Pocket Look",
    speech: "Fresh leaf sprout equipped! Ready to keep you company~ 🐾🌱",
    topLabel: "Natural Fluffy White Fur",
    bottomLabel: "Scalloped Otter Tail Hem",
    glovesLabel: "Soft White Otter Paws",
    hatLabel: "Lucky Green Leaf Sprout",
    accent: "#2E705E",
  },
  {
    id: "robo",
    label: "🤖 Cutest Robo-Ottie",
    emoji: "🤖",
    category: "Sci-Fi Mecha Collection",
    speech: "BEEP BOOP! 🤖 Cutest Robo-Ottie online & dancing! 💠✨",
    topLabel: "Cute Robo Chassis + LED Heart",
    bottomLabel: "Robo Hover Thruster Boots",
    glovesLabel: "Cyan Mecha Claws",
    hatLabel: "Glowing Antenna & Cyber Visor",
    accent: "#298AC7",
  },
  {
    id: "cricket",
    label: "🏏 Cricket Champion",
    emoji: "🏏",
    category: "Sports & Stadium Series",
    speech: "HOWZAT!! Six runs over the dock boundary! 🏏🏆",
    topLabel: "Team Championship Jersey",
    bottomLabel: "Pro Batting Pads",
    glovesLabel: "Spiked Batting Gloves + Willow Bat",
    hatLabel: "Navy Cricket Sun Cap",
    accent: "#1F5EA8",
  },
  {
    id: "chef",
    label: "🥞 Cozy Pancake Chef",
    emoji: "🥞",
    category: "Culinary & Café Studio",
    speech: "Flip! Catch! Hot maple pancakes coming right up! 🥞🍯",
    topLabel: "Double-Breasted Chef Coat & Kerchief",
    bottomLabel: "Checked Bistro Apron",
    glovesLabel: "Cast-Iron Skillet & Spatula",
    hatLabel: "Puffy White Toque Blanche",
    accent: "#C86D2D",
  },
  {
    id: "wizard",
    label: "🧙‍♂️ Starlight Wizard",
    emoji: "🧙‍♂️",
    category: "Fantasy & Arcane Guild",
    speech: "Alakazam! Casting zero-bug compilation spells on your repo ✨🪄",
    topLabel: "Midnight Velvet Star Cloak",
    bottomLabel: "Gold-Trimmed Arcane Robe",
    glovesLabel: "Glowing Crystal Staff",
    hatLabel: "Pointed Astral Wizard Hat",
    accent: "#6B46C1",
  },
  {
    id: "dj",
    label: "🎧 Lo-Fi Turntable DJ",
    emoji: "🎧",
    category: "Music & Focus Beats",
    speech: "Dropping cozy lo-fi focus beats while you ship~ 🎧🎶",
    topLabel: "Streetwear Oversized Hoodie",
    bottomLabel: "Cargo Studio Joggers",
    glovesLabel: "Vinyl Scratching Paws",
    hatLabel: "Studio Monitor Headphones + Beanie",
    accent: "#CC476B",
  },
];

export interface OttieActionOption {
  id: string;
  label: string;
  emoji: string;
  speech: string;
  animationTag: string;
}

export const OTTIE_STUDIO_ACTIONS: OttieActionOption[] = [
  {
    id: "water",
    label: "💧 Drink Water",
    emoji: "💧",
    speech: "*glug glug* Stay hydrated! Have a sip of water with me 💧✨",
    animationTag: "sipWaterGlass",
  },
  {
    id: "robo",
    label: "🤖 Robo Beep-Boop",
    emoji: "🤖",
    speech: "Whoa!! Mini UFO tractor beam & pixel heart projector active! 🛸❤️",
    animationTag: "roboBeepBoopDance",
  },
  {
    id: "stairs",
    label: "🪜 Walk Down Stairs",
    emoji: "🪜",
    speech: "Step, step, hop! Climbing golden stairs across your screen 🪜🐾",
    animationTag: "walkDownStairs",
  },
  {
    id: "parents",
    label: "📞 Call Parents",
    emoji: "📞",
    speech: "Ring ring~ Say hi to mom & dad today! They'll love hearing from you ❤️",
    animationTag: "callFamilyPhone",
  },
  {
    id: "angy",
    label: "😤 Cute Angy >:(",
    emoji: "😤",
    speech: "Hey!! You've been staring at code for 2 hours! Take a break!! >:( 💢",
    animationTag: "cuteAngyStomp",
  },
];

export const OTTIE_WHAT_YOU_GET = [
  {
    title: "7 Dedicated Full-Screen Animated Break Walls",
    description:
      "Peekaboo Blanket (20-20-20), Aquatic Water Wave, Talk to Parents Hearth, Cutest Robo Cyber-Grid, Downstairs Staircase, Stretch Zen Bamboo Forest, and Cozy Tea Café.",
  },
  {
    title: "54 Mix-and-Match Costumes & Cutest Robo Mode",
    description:
      "Split-pane Dressing Room with live preview: 20 tops, 13 bottoms, 11 gloves, 25 hats, and the full Cutest Robo-Ottie preset with LED heart & hover thrusters.",
  },
  {
    title: "93 Equal-Frequency Actions & 13 Robo Gadgets",
    description:
      "23-channel harmonic spring physics rig and balanced shuffle deck — from sipping boba, flipping pancakes, and playing cricket to UFO tractor beams and jetpacks.",
  },
  {
    title: "Smart Screen Activity Awareness",
    description:
      "Watches YouTube on a tiny phone when you watch YouTube, codes on a mini laptop when you're in Xcode/VS Code, texts when messaging, and sleeps under a blanket when idle.",
  },
  {
    title: "Polite Typing, Meeting & Fullscreen Deferral",
    description:
      "Never interrupts while you're actively typing a sentence, during Zoom/Meet calls (camera/mic check), or in full-screen keynote slides.",
  },
  {
    title: "2D Screen Roaming & Cursor Headpats Love",
    description:
      "Travels across screen corners, climbs stairs, or runs right to your mouse cursor for headpats — and gets adorably pouty >:( if you pull away too fast!",
  },
  {
    title: "Reminder Timers OFF by Default (Zero Nagging)",
    description:
      "Enjoy Ottie purely as a cozy desk friend with zero pop-ups, or toggle on automatic 20-20-20 eye breaks, hydration goals, and 25-minute Focus Sprints anytime.",
  },
  {
    title: "100% Local Native Swift · Zero Telemetry",
    description:
      "Featherlight native macOS app (Universal Apple Silicon & Intel). No camera recording, no cloud accounts, and 0 bytes of data ever leave your Mac.",
  },
];

export const OTTIE_COMPARISON_ROWS = [
  {
    feature: "Desktop Character & Physics Rig",
    ottie: "✓ 23-channel spring White Otter & Cutest Robo",
    peeka: "✓ Floating ghost companion",
    lookaway: "✗ Menu bar icon only",
    timeout: "✗ Static screen dimmer",
  },
  {
    feature: "Full-Screen Break Environments",
    ottie: "✓ 7 custom animated habit walls",
    peeka: "1 scalloped blanket overlay",
    lookaway: "1 blurred wallpaper overlay",
    timeout: "1 plain color fade",
  },
  {
    feature: "Dressing Room & Wardrobe",
    ottie: "✓ 54 presets (20 tops, 13 bottoms, 11 gloves, 25 hats)",
    peeka: "4 pocket collectibles",
    lookaway: "✗ None",
    timeout: "✗ None",
  },
  {
    feature: "Animated Companion Actions",
    ottie: "✓ 93 actions + 13 sci-fi Robo gadgets",
    peeka: "6 sleep/peek poses",
    lookaway: "✗ None",
    timeout: "✗ None",
  },
  {
    feature: "Smart Screen Activity Mirroring",
    ottie: "✓ Codes, watches YouTube, paints, DJs & naps with you",
    peeka: "✗ Idle detection only",
    lookaway: "✗ None",
    timeout: "✗ None",
  },
  {
    feature: "Daily Water Tracker & Family Call Wall",
    ottie: "✓ Built-in 8-glass hydration + Talk to Parents hearth",
    peeka: "✗ Eye breaks only",
    lookaway: "✗ Posture text reminders",
    timeout: "✗ Custom text only",
  },
  {
    feature: "Polite Typing, Camera & Mic Deferral",
    ottie: "✓ Waits for typing pause & hides on Zoom/Meet",
    peeka: "✓ Waits for typing & meetings",
    lookaway: "✓ Meeting deferral",
    timeout: "Partial",
  },
  {
    feature: "Pure Companion Mode (Timers Optional)",
    ottie: "✓ Timers OFF by default + 1-click Focus Mode",
    peeka: "✗ Break timer always active",
    lookaway: "✗ Break timer always active",
    timeout: "✗ Break timer always active",
  },
  {
    feature: "Price & Privacy",
    ottie: "✓ Free Download · 100% Local (0 Telemetry)",
    peeka: "$19 one-time after 7-day trial",
    lookaway: "$14.99–$29 license",
    timeout: "Free / Patronware",
  },
];

export const OTTIE_TESTIMONIALS = [
  {
    metric: "9 of 10 eye breaks completed",
    quote:
      "I uninstalled three different break timers because they interrupted me mid-function in Cursor. Ottie actually sits there coding on a tiny laptop next to my dock, waits until I stop typing, and pulls down the Peekaboo blanket. And Cutest Robo-Ottie is ridiculously adorable.",
    author: "Aarav Mehta",
    role: "Staff iOS & macOS Engineer",
  },
  {
    metric: "8/8 daily water glasses + zero dry eyes",
    quote:
      "The Aquatic Water Wave wall and the 'Call mom & dad' sunset hearth wall made me smile the first day I installed it. It feels like a Nintendo Tamagotchi crossed with Apple's native macOS design language.",
    author: "Elena Rostova",
    role: "Principal Product Designer",
  },
  {
    metric: "54 outfits · 0% meeting interruptions",
    quote:
      "Having reminder timers OFF by default is genius. Half the day I just keep Ottie in Wizard or DJ mode roaming around my screen corners and running to my cursor for headpats, then I flip on 25-minute Focus Sprints when grinding.",
    author: "Marcus Vance",
    role: "Indie Founder & Creative Director",
  },
];

export const OTTIE_FAQS = [
  {
    question: "Will Ottie interrupt me while I'm typing, coding, or in a Zoom call?",
    answer:
      "Never. First, automatic reminder timers are OFF by default so Ottie never pops up a full-screen wall unless you explicitly turn timers on (or trigger a wall manually). Second, when timers are enabled, Ottie detects active keyboard input, active camera/microphone sessions (Zoom, Google Meet, Microsoft Teams, FaceTime), and full-screen video/keynote presentations — politely folding its paws and waiting until you pause.",
  },
  {
    question: "How does Smart Screen Activity Awareness work? Does it record my screen?",
    answer:
      "No screen pixels or camera feeds are ever captured or transmitted. Ottie simply checks the frontmost macOS application bundle identifier and idle state locally on your Mac to mirror your vibe — pulling out a mini laptop when you're in Xcode/VS Code/Terminal, watching a tiny phone when you're on YouTube, painting on an easel in Figma, or curling up under a cozy blanket when your Mac is idle.",
  },
  {
    question: "What are the 7 Full-Screen Break Walls?",
    answer:
      "Every wellness habit has its own custom-rendered full-screen environment: (1) Peekaboo Blanket Wall for 20-20-20 eye rest, (2) Aquatic Water Wave Wall with an 8-glass daily hydration counter, (3) Talk to Parents & Family Hearth Wall with warm sunset embers, (4) Stretch Back Zen Bamboo Forest Wall, (5) Downstairs Walk Staircase Wall, (6) Cozy Tea & Snack Café Wall, and (7) Cutest Robo Cyber-Grid Wall for neural core recharges.",
  },
  {
    question: "Can I use Ottie just as a desktop pet without any break timers?",
    answer:
      "Yes! Out of the box, Ottie launches with reminder timers disabled so you can enjoy all 54 costumes, Cutest Robo-Ottie mode, 93 spring-animated antics, 2D screen corner roaming, and mouse cursor headpats with zero full-screen interruptions. And if you need total stillness during deep work, just right-click Ottie and toggle Focus Mode.",
  },
  {
    question: "How do I dress up Ottie or switch into Cutest Robo-Ottie mode?",
    answer:
      "Click the Ottie icon in your macOS menu bar and click 'Robo' for an instant 1-click transformation, or open the split-pane Dressing Room Studio (54 looks) to mix and match 20 tops, 13 bottoms, 11 gloves, and 25 hats with a live interactive preview on the left.",
  },
  {
    question: "What macOS versions and Macs does Ottie support?",
    answer:
      "Ottie v1.0.0 is a universal native Swift & AppKit/SwiftUI application (only 2.4 MB) supporting both Apple Silicon (M1, M2, M3, M4) and Intel Macs running macOS 14.0 Sonoma, macOS 15.0 Sequoia, and macOS 26 Tahoe.",
  },
];
