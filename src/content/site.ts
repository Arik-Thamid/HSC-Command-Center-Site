/**
 * All editable copy and data for the site lives here.
 * Strings in TUTORIAL steps may contain <b>bold</b> tags (rendered safely by <Rich />).
 */

export const SITE = {
  name: "HSC Command Center",
  title: "HSC Command Center — Your HSC Study Management Platform",
  description:
    "Organize your HSC full preparation with HSC Command Center. Plan your study days, track your syllabus, manage revision, and keep your academic journey organized.",
  appUrl: "https://hsc.readnap.com",
} as const;

export const NAV = [
  { href: "#tour", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#video", label: "Demo" },
  { href: "#tutorial", label: "Tutorial" },
  { href: "#faq", label: "FAQ" },
] as const;

export const PAGES = [
  "Command Center",
  "Daily Planner",
  "Syllabus",
  "Revision",
  "Tests",
  "Weekly Review",
  "83-Day Roadmap",
  "Today’s Page",
  "Settings & Data",
] as const;

export const STATS = [
  { n: 9, label: "pages in one workspace" },
  { n: 13, label: "papers ready to track" },
  { n: 6, label: "subject groups" },
  { n: 0, label: "accounts needed" },
] as const;

export const FRAGMENTS = [
  { title: "Syllabus", text: "Chapters spread across notes", dx: -90, dy: 40, r: -6 },
  { title: "Daily plan", text: "A list on a loose page", dx: 30, dy: -50, r: 5 },
  { title: "Revision", text: "Easy to forget", dx: 110, dy: 30, r: -4 },
  { title: "Tests", text: "Marks in different places", dx: -60, dy: -40, r: 4 },
  { title: "Weekly check", text: "No time to look back", dx: 50, dy: 50, r: -7 },
  { title: "Progress", text: "No clear picture", dx: -110, dy: -30, r: 6 },
] as const;

export type TourItem = {
  title: string;
  path: string;
  img: string;
  heading: string;
  lead: string;
  points: string[];
};

/** Product tour: `img` is a file name in /public/img (without extension). */
export const TOUR: TourItem[] = [
  {
    "title": "Command Center",
    "path": "/",
    "img": "dash",
    "heading": "Your home dashboard.",
    "lead": "See where you stand today and what is next.",
    "points": [
      "Syllabus completion and units done",
      "Countdown to your target date",
      "Study streak and best streak",
      "Completed, in progress, pending",
      "Pace vs plan",
      "Hours today and this week",
      "Overdue tasks and revisions due",
      "Today’s schedule, upcoming tests"
    ]
  },
  {
    "title": "Today’s Page",
    "path": "/daily",
    "img": "today",
    "heading": "A page for every day.",
    "lead": "Plan and run a single day, then step through the calendar.",
    "points": [
      "Previous day, today, next day",
      "Tasks done vs planned hours",
      "Main goals: chapter, priority, target",
      "Sessions with tasks and notes",
      "Questions and mistakes logged"
    ]
  },
  {
    "title": "Syllabus",
    "path": "/syllabus",
    "img": "syl",
    "heading": "Master Syllabus Tracker.",
    "lead": "One row per chapter or topic. Open a row to tick checks, rate confidence, and fix titles.",
    "points": [
      "Paste titles, Add chapter",
      "Filter all, incomplete, high priority",
      "Search chapters, filter by paper",
      "Paper, priority, difficulty, status",
      "Planned dates, hours, checks"
    ]
  },
  {
    "title": "Tests",
    "path": "/tests",
    "img": "tests",
    "heading": "Practice & Mock Tests.",
    "lead": "Log every test. Weekly and model tests are pre-scheduled.",
    "points": [
      "Tests completed, average accuracy",
      "Recent, lowest-scoring topics",
      "Upcoming tests with Log result",
      "Marks, time, mistakes, weak topics",
      "Accuracy over time"
    ]
  },
  {
    "title": "Weekly Review",
    "path": "/weekly",
    "img": "weekly",
    "heading": "Review without excuses.",
    "lead": "Close each week with honest notes and a plan for the next.",
    "points": [
      "Missed tasks this week",
      "Repeated mistakes",
      "Reasons for falling behind",
      "Next week’s priorities",
      "Recovery plan, one-line summary"
    ]
  },
  {
    "title": "83-Day Roadmap",
    "path": "/roadmap",
    "img": "road",
    "heading": "Your plan, day by day.",
    "lead": "From your start date to your target date, with workload by subject.",
    "points": [
      "Workload by subject group",
      "Estimated vs planned study time",
      "Day-by-day load, colour-coded",
      "Rebuild plan",
      "Review days and final audit days"
    ]
  },
  {
    "title": "Settings & Data",
    "path": "/settings",
    "img": "setb",
    "heading": "Control the plan. Keep your data.",
    "lead": "Set dates and hours, then back up or restore.",
    "points": [
      "Start, target date, hours per day",
      "Weekly review day, week start",
      "Rebuild from today or start date",
      "January revision checklist",
      "Download, restore, reset"
    ]
  }
];

export type Feature = {
  id: string;
  label: string;
  title: string;
  body: string;
  size: "wide" | "half" | "small";
  img?: string;
  alt?: string;
  imgFirst?: boolean;
  legend?: boolean;
};

export const FEATURES: Feature[] = [
  {
    id: "01",
    label: "01 · Command Center",
    title: "Your whole preparation at a glance.",
    body: "Syllabus completion, countdown to your target date, study streak, pace vs plan, hours today, overdue tasks and revisions due, plus today’s study schedule with Start, Skip, and Edit on every task.",
    size: "wide",
    img: "sched",
    alt: "Command Center showing today's study schedule, revise today, weak chapters and upcoming tests",
  },
  {
    id: "02",
    label: "02 · Daily Planner",
    title: "Plan the day.",
    body: "Open the planner from your dashboard, add tasks, and work through them with Start, Skip, and Edit.",
    size: "small",
  },
  {
    id: "03",
    label: "03 · Syllabus",
    title: "One row per chapter.",
    body: "Tick checks, rate confidence, filter by paper, priority, or status, and fix chapter titles.",
    size: "small",
  },
  {
    id: "04",
    label: "04 · Revision",
    title: "Revision that finds you.",
    body: "“Revise today” lists what is due, and upcoming revisions appear a day or two after you first study a chapter.",
    size: "small",
  },
  {
    id: "05",
    label: "05 · Tests",
    title: "Log every test. See the trend.",
    body: "Weekly and model tests are pre-scheduled. Open one and enter your marks, time taken, mistakes, weak topics, and a follow-up task. The improvement tab charts your accuracy over time.",
    size: "wide",
    img: "testsimp",
    alt: "Tests page improvement tab with an accuracy over time chart",
    imgFirst: true,
  },
  {
    id: "06",
    label: "06 · Weekly Review",
    title: "Look back honestly.",
    body: "See missed tasks, then note repeated mistakes, reasons for falling behind, next week’s priorities, a recovery plan, and an honest one-line summary.",
    size: "half",
  },
  {
    id: "07",
    label: "07 · Today’s Page",
    title: "A page for every day.",
    body: "Set your main goals, work through your sessions, see tasks done against planned hours, and step to the previous or next day.",
    size: "half",
  },
  {
    id: "08",
    label: "08 · Roadmap",
    title: "Every day, colour-coded.",
    body: "A day-by-day plan from your start date to your target date, with workload by subject and a check that your estimated study time fits inside the plan.",
    size: "wide",
    img: "road",
    alt: "Roadmap day-by-day load grid with normal, heavy, high risk and review days",
    legend: true,
  },
  {
    id: "09",
    label: "09 · Settings & Data",
    title: "Your plan, your data.",
    body: "Set your start date, target date, daily study hours, review day, and week start, then rebuild the remaining plan. Download a backup, restore from it, or reset everything.",
    size: "wide",
    img: "setb",
    alt: "Settings and Data page with backup and data options",
    imgFirst: true,
  },
];

export const LEGEND = [
  { color: "#22c55e", label: "Normal" },
  { color: "#eab308", label: "Heavy (3+ hard chapters)" },
  { color: "#ef4444", label: "High risk" },
  { color: "#6b7280", label: "Review / audit day" },
] as const;

export const SUBJECTS = [
  "Physics",
  "Higher Mathematics",
  "Chemistry",
  "Biology",
  "Bangla & English",
  "ICT",
] as const;

export const STEPS = [
  { n: "01", title: "Set your plan", text: "Choose your start date, target date, and daily study hours in Settings." },
  { n: "02", title: "Open today’s page", text: "Set your main goals and work through your sessions." },
  { n: "03", title: "Track and test", text: "Tick syllabus checks, revise what is due, and log your marks." },
  { n: "04", title: "Review weekly", text: "Reflect, then rebuild the remaining plan if you fall behind." },
] as const;

/** Sample tasks for the "Try the idea" demo. Nothing here is saved anywhere. */
export type DemoTask = { label: string; done: boolean; time: string };
export const DEMO_TASKS: DemoTask[] = [
  { label: "Sample: study block", done: true, time: "1h 20m" },
  { label: "Sample: practice questions", done: false, time: "1h 35m" },
  { label: "Sample: revise a unit", done: false, time: "40m" },
  { label: "Sample: mock review", done: false, time: "35m" },
];

export type TutorialItem = { title: string; where: string; steps: string[]; tip: string | null };
export const TUTORIAL: TutorialItem[] = [
  {
    "title": "Open the app",
    "where": "Anywhere · any browser",
    "steps": [
      "Tap <b>Open Command Center</b> on this page. The app opens in your browser.",
      "There is no account to create. Your progress saves automatically in this browser.",
      "On a phone, use the bottom bar to move around: <b>Home, Planner, Syllabus, Revise, Tests</b>."
    ],
    "tip": "Tip: use your browser’s “Add to Home Screen” to open it like an app."
  },
  {
    "title": "Set up your study plan",
    "where": "Settings & Data → Study plan",
    "steps": [
      "Pick your <b>start date</b> and your <b>target completion date</b>.",
      "Set <b>study hours per day</b> (this includes 30 minutes of recall).",
      "Set <b>final audit days</b>. These are reserved for the syllabus audit, weak chapters, and mixed practice.",
      "Choose your <b>weekly review day</b> and the day your <b>week starts on</b>.",
      "Press <b>Rebuild remaining plan from today</b>, or <b>Rebuild from the start date</b> (you will be asked to confirm)."
    ],
    "tip": "Rebuilding only replaces generated tasks that are still Not Started with no time logged. Completed, skipped, and in-progress tasks, tasks you added yourself, chapter progress, and test results are kept."
  },
  {
    "title": "Check your chapter titles",
    "where": "Syllabus",
    "steps": [
      "Titles marked <b>unverified</b> were seeded from the standard NCTB textbook structure, not the official HSC 2027 syllabus.",
      "Open each chapter and compare it with your textbook.",
      "Edit the title if needed, then tick <b>checked</b>.",
      "To replace a whole paper at once, delete its rows and use <b>Paste titles</b>. Use <b>Add chapter</b> for a single new one."
    ],
    "tip": null
  },
  {
    "title": "Run your day",
    "where": "Today’s Page · Command Center",
    "steps": [
      "Open <b>Today’s Page</b> from the sidebar or the dashboard.",
      "Write your <b>main goals</b>: most important chapter, second priority, and practice target.",
      "Work through the tasks in each session. Use <b>Start</b>, <b>Skip</b>, or <b>Edit</b>, and tick a task when it is done.",
      "Watch the progress line: tasks done against the hours you planned.",
      "Use <b>Previous day</b> and <b>Next day</b> to look around, and <b>Add task</b> for anything extra."
    ],
    "tip": null
  },
  {
    "title": "Track chapter progress",
    "where": "Syllabus",
    "steps": [
      "Each chapter is one row. Open a row to <b>tick its checks</b> and <b>rate your confidence</b>.",
      "Use the filters: All, Incomplete, High priority, Needs revision, Completed.",
      "Filter by paper or search for a chapter by name.",
      "Your dashboard completion and pace update as you go."
    ],
    "tip": null
  },
  {
    "title": "Revise on time",
    "where": "Command Center → Revise today · Revision",
    "steps": [
      "The <b>Revise today</b> panel lists what is due now. Open the <b>Revision tracker</b> for the full view.",
      "Revisions appear a day or two after you first study a chapter, so there is nothing to schedule by hand.",
      "The <b>Weak chapters</b> list fills as you rate confidence, note weak areas, or log tests."
    ],
    "tip": null
  },
  {
    "title": "Log a test",
    "where": "Tests",
    "steps": [
      "Weekly tests and model tests are pre-scheduled under <b>Upcoming</b>.",
      "Press <b>Log result</b> and enter your <b>marks obtained</b> out of the total. Accuracy is worked out for you.",
      "Add the <b>time taken</b>, your <b>mistakes</b>, <b>weak topics</b>, and a <b>follow-up task</b>. Press <b>Save test</b>.",
      "Use <b>Lowest-scoring topics</b> and <b>Improvement</b> to see where to focus and how accuracy changes over time."
    ],
    "tip": null
  },
  {
    "title": "Review your week",
    "where": "Weekly Review · 83-Day Roadmap",
    "steps": [
      "Check <b>missed tasks</b> for the week.",
      "Write your review notes: <b>repeated mistakes</b>, <b>reasons for falling behind</b>, <b>next week’s priorities</b>, a <b>recovery plan</b>, and an <b>honest one-line summary</b>.",
      "Open the <b>Roadmap</b> to see your workload by subject and the colour-coded day-by-day load. If you have fallen behind, use <b>Rebuild plan</b>."
    ],
    "tip": null
  },
  {
    "title": "Back up your data",
    "where": "Settings & Data → Backup and data",
    "steps": [
      "Press <b>Download backup</b> regularly and keep a copy somewhere safe.",
      "Use <b>Restore from backup</b> to bring your progress back on this or another device.",
      "Use <b>Reset everything</b> only if you want to start over."
    ],
    "tip": "Your data does not sync between devices, and clearing site data erases it. A recent backup is your safety net."
  }
];

export const FAQ: { q: string; a: string }[] = [
  {
    "q": "What is HSC Command Center?",
    "a": "A free study command center for HSC Science students in Bangladesh: syllabus tracker, daily planner, revision system, and test log in one place."
  },
  {
    "q": "Is it free? Do I need an account?",
    "a": "It is free, and no account is needed. Open the app and start."
  },
  {
    "q": "Which subjects are included?",
    "a": "13 papers: Bangla (2), English (2), ICT (1), Higher Mathematics (2), Biology (2), Chemistry (2), and Physics (2). You can add another subject’s chapters in the Syllabus tab."
  },
  {
    "q": "Are the chapter titles official?",
    "a": "Titles marked “unverified” were seeded from the standard NCTB textbook structure, not the official HSC 2027 syllabus. Compare them with your textbook and edit them as needed."
  },
  {
    "q": "Where is my data saved?",
    "a": "In your browser, automatically. It does not sync between devices."
  },
  {
    "q": "What if I clear my browser data?",
    "a": "Clearing site data erases your progress. Use Download backup in Settings regularly, and Restore from backup if you need it."
  },
  {
    "q": "Can I change my plan dates?",
    "a": "Yes. In Settings you can change your start date, target date, and daily study hours, then rebuild the remaining plan from today or from the start date. Completed, skipped, and in-progress tasks, your own tasks, chapter progress, and test results are kept."
  },
  {
    "q": "Can I use it on mobile?",
    "a": "Yes. On phones the app uses a bottom navigation bar with Home, Planner, Syllabus, Revise, and Tests."
  }
];

/**
 * Real student reviews only. Add items like:
 *   { quote: "Their words.", name: "Name", meta: "HSC 2027 · Science" }
 * While the list is empty a short invitation is shown instead.
 */
export type Review = { quote: string; name: string; meta?: string };
export const REVIEWS: Review[] = [];

/** Start times (seconds) of each scene in /public/media/demo.mp4 */
export const VIDEO_CHAPTERS = [
  { label: "Command Center", start: 0 },
  { label: "Today’s Page", start: 10 },
  { label: "83-Day Roadmap", start: 22 },
  { label: "Syllabus", start: 38 },
  { label: "Tests", start: 48 },
] as const;
