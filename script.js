/* ============================================================
   Jake Brecknock — site behavior
   Data lives here so the page and the terminal share one source.
   ============================================================ */

const PROJECTS = [
  {
    id: "sqrl",
    name: "SQrL VPN",
    kind: "Founder",
    when: "Aug 2026 – present",
    status: "active",
    team: "Three Grinnell College computer scientists",
    body: [
      "A mesh VPN with a Rust backend. It uses the WireGuard protocol for network tunneling and SQL for persistent data storage.",
      "I started it with two other Grinnell CS students, and we're building it as a team."
    ],
    tags: ["Rust", "WireGuard", "SQL", "Networking"]
  },
  {
    id: "ace-est",
    name: "ACE live estimates",
    kind: "ACE Handyman Services",
    when: "Summer 2025",
    status: "in use",
    team: "Solo",
    body: [
      "A website that produces and stores estimates for ACE's field manager and craftsmen. Instead of drafting quotes by hand, the crew generates a customer-facing estimate on the spot.",
      "None of ACE's competitors offer live time estimates. The site is still in use, and it's how ACE sets its estimate process apart."
    ],
    tags: ["JavaScript", "Firebase", "HTML", "CSS"]
  },
  {
    id: "ace-check",
    name: "Tool & vehicle checkout",
    kind: "ACE Handyman Services",
    when: "Summer 2025",
    status: "shipped",
    team: "Solo",
    body: [
      "A second website that lets workers check tools and vehicles in and out of the ACE warehouse, with updates visible across devices in real time."
    ],
    tags: ["JavaScript", "Firebase", "Real-time data"]
  },
  {
    id: "adb",
    name: "ADB site data portal",
    kind: "ADB Companies",
    when: "Summer 2026",
    status: "shipped",
    team: "Solo",
    body: [
      "I cleaned and organized telecom and fiber-optic site data with Python and Excel, then built a web page that hosts it for ADB team members based in St. Louis."
    ],
    tags: ["Python", "Excel", "Data cleaning", "Web"]
  },
  {
    id: "outreach",
    name: "Student Outreach Club",
    kind: "Founder",
    when: "Jan 2025 – present",
    status: "active",
    team: "About 130 members",
    body: [
      "I look for areas of rural Iowa that need help reconstructing houses or general outreach, then find a way to get our club involved.",
      "We're at about 130 members and aiming for growth and lasting local impact."
    ],
    tags: ["Leadership", "Community", "Project management"]
  },
  {
    id: "stackindex",
    name: "Stack Index",
    kind: "Side project",
    when: "2025",
    status: "side",
    team: "Solo",
    body: [
      "A site where people upload their coding projects, from weekend experiments to long-running passion projects, and tag them by category so others can check whether a solution already exists before building it again."
    ],
    tags: ["Web", "Search", "Tagging"],
    link: { href: "https://jakebrecknock.github.io/stackindex/", label: "Open Stack Index" }
  }
];

const COURSES = [
  {
    code: "CSC 161", dept: "CSC",
    title: "Imperative Problem Solving",
    body: "A C-based course on imperative programming and structured problem solving. My final project was a Snake game that used image-based rendering for smoother gameplay and a cleaner look."
  },
  {
    code: "CSC 207", dept: "CSC",
    title: "Algorithms and Object-Oriented Design",
    body: "A Java course on object-oriented design, algorithms, and building larger software systems. Notable work included agentic system design supporting more advanced, neural-network-style decision making."
  },
  {
    code: "CSC 208", label: "CSC/MAT 208", dept: "CSC MAT",
    title: "Discrete Structures",
    body: "How to verify mathematical and logical claims, what different collections of objects have in common, how functions can be represented and tested for equivalence, and how to reason about common diagrams. Topics include Boolean logic, proof techniques, sets, and structures such as trees and graphs.",
    meta: "Cross-listed as MAT 208"
  },
  {
    code: "CSC 211", dept: "CSC",
    title: "Computer Organization and Architecture",
    body: "Low-level assembly programming, machine organization, and digital logic, with hands-on circuit work involving registers, ALUs, and other hardware-level building blocks."
  },
  {
    code: "CSC 301", dept: "CSC",
    title: "Analysis of Algorithms",
    body: "How data is organized and the algorithms that operate on those structures, with an emphasis on the mathematical principles behind them. Programming assignments implement data structures and apply them to computer science and other applications.",
    meta: "Prerequisites: CSC 207 and CSC/MAT 208"
  },
  {
    code: "CSC 324", dept: "CSC",
    title: "Software Design and Development",
    body: "Team-based software development for a real customer, technical or non-technical, using Agile practices. Covers designing an architecture from requirements, building or extending applications, testing, debugging, technical documentation, collaborative version control, and the practical and ethical sides of real-world projects."
  },
  {
    code: "CSC 341", dept: "CSC",
    title: "Automata, Formal Languages, and Computational Complexity",
    body: "A formal study of computational devices, the languages they recognize, and which computations are possible and how hard they are. Covers pushdown automata and Turing machines, context-free languages and recursively enumerable sets, the halting problem, and NP-completeness.",
    meta: "Prerequisites: CSC 161 and MAT 208 or MAT 218"
  },
  {
    code: "MAT 215", dept: "MAT",
    title: "Linear Algebra",
    body: "Vector spaces, linear transformations, matrices, eigenvalues, and structured mathematical reasoning: the kind of abstract thinking that carries straight into algorithms, systems, and modeling."
  },
  {
    code: "MAT 220", dept: "MAT",
    title: "Differential Equations",
    body: "Modeling physical systems with differential equations and the methods for solving them, including infinite-series solutions, linear and nonlinear systems, and qualitative (topological) methods."
  },
  {
    code: "PHY 132", dept: "PHY",
    title: "Electricity and Magnetism",
    body: "Electric fields, potential, circuits, capacitance, current, and magnetic effects. It connects directly to my electrical engineering work by tying theory to circuit behavior and system analysis."
  },
  {
    code: "STA 209", dept: "STA",
    title: "Applied Statistics",
    body: "Worked in R to build fundamental analysis tools and model large datasets, strengthening my background in statistics and modeling software."
  }
];

const LINKS = {
  github: "https://github.com/jakebrecknock",
  linkedin: "https://www.linkedin.com/in/jake-brecknock",
  resume: "resume.pdf",
  letter: "Letter%20of%20Recommendation%20(Jake%20Brecknock).pdf",
  stackindex: "https://jakebrecknock.github.io/stackindex/",
  email: "mailto:jakebrecknock@icloud.com"
};

const EMAIL = "jakebrecknock@icloud.com";
const PHONE = "(708) 378-3477";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------- helpers ---------------- */
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function store(key, val) {
  try {
    if (val === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, val);
  } catch (e) { return null; }
}

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

async function copyText(text, label) {
  try {
    await navigator.clipboard.writeText(text);
    toast(`Copied ${label}`);
    return true;
  } catch (e) {
    toast(`Copy failed. ${label}: ${text}`);
    return false;
  }
}

function setStatus(msg) {
  const el = $("#sbMsg");
  if (el) el.textContent = msg;
}

/* ---------------- clock ---------------- */
const clockEl = $("#clock");
const clockFmt = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Chicago", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
});
function tick() { clockEl.textContent = `${clockFmt.format(new Date())} CT`; }
tick();
setInterval(tick, 1000);

/* ---------------- theme ---------------- */
const root = document.documentElement;
const themeBtn = $("#themeToggle");
function applyTheme(theme) {
  root.dataset.theme = theme;
  themeBtn.querySelector(".tt-label").textContent = theme === "dark" ? "Paper" : "Graphite";
  themeBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.content = theme === "dark" ? "#1A1D20" : "#DCDFDA";
  store("jb-theme", theme);
}
applyTheme(store("jb-theme") || "dark");
themeBtn.addEventListener("click", () => applyTheme(root.dataset.theme === "dark" ? "light" : "dark"));

/* ---------------- projects ---------------- */
const procList = $("#procList");
const procDetail = $("#procDetail");

procList.innerHTML =
  `<div class="proc-head" aria-hidden="true"><span>PID</span><span>Name</span><span>Status</span></div>` +
  PROJECTS.map((p, i) => `
    <button class="proc-row" role="tab" id="tab-${p.id}" aria-controls="procDetail" aria-selected="false" data-i="${i}" tabindex="-1">
      <span class="proc-pid">${String(101 + i * 7).padStart(4, "0")}</span>
      <span class="proc-name">${esc(p.name)}</span>
      <span class="proc-stat">${esc(p.status)}</span>
    </button>`).join("");

function showProject(i, focus = false) {
  const p = PROJECTS[i];
  $$(".proc-row", procList).forEach((b, j) => {
    b.setAttribute("aria-selected", j === i ? "true" : "false");
    b.tabIndex = j === i ? 0 : -1;
    if (j === i && focus) b.focus();
  });
  procDetail.setAttribute("aria-labelledby", `tab-${p.id}`);
  procDetail.innerHTML = `
    <p class="pd-kind">${esc(p.kind)}</p>
    <h3>${esc(p.name)}</h3>
    <dl class="pd-meta">
      <dt>When</dt><dd>${esc(p.when)}</dd>
      <dt>Team</dt><dd>${esc(p.team)}</dd>
      <dt>Status</dt><dd>${esc(p.status)}</dd>
    </dl>
    ${p.body.map((t) => `<p>${esc(t)}</p>`).join("")}
    <ul class="pd-tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    ${p.link ? `<a class="pd-link" href="${p.link.href}" target="_blank" rel="noopener">${esc(p.link.label)}</a>` : ""}
  `;
}
procList.addEventListener("click", (e) => {
  const b = e.target.closest(".proc-row");
  if (b) showProject(+b.dataset.i);
});
procList.addEventListener("keydown", (e) => {
  const rows = $$(".proc-row", procList);
  const cur = rows.findIndex((r) => r.getAttribute("aria-selected") === "true");
  let next = null;
  if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (cur + 1) % rows.length;
  if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (cur - 1 + rows.length) % rows.length;
  if (e.key === "Home") next = 0;
  if (e.key === "End") next = rows.length - 1;
  if (next !== null) { e.preventDefault(); showProject(next, true); }
});
showProject(0);

/* ---------------- courses ---------------- */
const courseList = $("#courseList");
courseList.innerHTML = COURSES.map((c, i) => `
  <li data-dept="${c.dept}">
    <button class="course-btn" aria-expanded="false" aria-controls="cb-${i}" id="ch-${i}">
      <span class="course-caret" aria-hidden="true"></span>
      <span class="course-code">${esc(c.label || c.code)}</span>
      <span class="course-title">${esc(c.title)}</span>
      <span class="course-cr">4 cr</span>
    </button>
    <div class="course-body" id="cb-${i}" role="region" aria-labelledby="ch-${i}" hidden>
      <p>${esc(c.body)}</p>
      ${c.meta ? `<p class="course-meta">${esc(c.meta)}</p>` : ""}
    </div>
  </li>`).join("");

courseList.addEventListener("click", (e) => {
  const b = e.target.closest(".course-btn");
  if (!b) return;
  const open = b.getAttribute("aria-expanded") === "true";
  b.setAttribute("aria-expanded", String(!open));
  $("#" + b.getAttribute("aria-controls")).hidden = open;
});

function filterCourses(dept) {
  dept = dept.toUpperCase() === "ALL" ? "all" : dept.toUpperCase();
  let shown = 0;
  $$("li", courseList).forEach((li) => {
    const match = dept === "all" || li.dataset.dept.split(" ").includes(dept);
    li.hidden = !match;
    if (match) shown++;
  });
  $$("#courseFilters button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.dept === dept)));
  $("#courseCount").textContent = `${shown} course${shown === 1 ? "" : "s"}`;
  return shown;
}
$("#courseFilters").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-dept]");
  if (b) filterCourses(b.dataset.dept);
});
filterCourses("all");

/* ---------------- name: always fits its column ---------------- */
const nameplate = $(".nameplate");
function fitName() {
  nameplate.style.fontSize = "";
  const avail = nameplate.clientWidth;
  const widest = Math.max(...$$("span", nameplate).map((s) => s.scrollWidth));
  if (widest > avail && avail > 0) {
    const size = parseFloat(getComputedStyle(nameplate).fontSize);
    nameplate.style.fontSize = Math.floor(size * (avail / widest) * 0.98) + "px";
  }
}
let fitRaf;
window.addEventListener("resize", () => { cancelAnimationFrame(fitRaf); fitRaf = requestAnimationFrame(fitName); });
fitName();
if (document.fonts) document.fonts.ready.then(fitName);

/* ---------------- photo: tap to show color (no hover on phones) ---------------- */
$(".portrait-img").addEventListener("click", () => $(".portrait").classList.toggle("is-color"));

/* ---------------- copy buttons ---------------- */
$$(".copy").forEach((b) => b.addEventListener("click", () => {
  copyText(b.dataset.copy, b.dataset.copy.includes("@") ? "email" : "phone number").then((ok) => {
    if (!ok) return;
    const old = b.textContent;
    b.textContent = "Copied";
    setTimeout(() => (b.textContent = old), 1400);
  });
}));

/* ---------------- section tracking + keyboard nav ---------------- */
const railLinks = $$(".rail a");
const sections = railLinks.map((a) => $(a.getAttribute("href")));
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    railLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
    const active = railLinks.find((a) => a.classList.contains("is-active"));
    if (active && active.scrollIntoView && window.innerWidth <= 820) {
      active.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach((s) => s && io.observe(s));
const heroIO = new IntersectionObserver(([en]) => {
  if (en.isIntersecting) railLinks.forEach((a) => a.classList.remove("is-active"));
}, { rootMargin: "-45% 0px -50% 0px" });
heroIO.observe($(".hero"));

function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", "#" + id);
}

document.addEventListener("keydown", (e) => {
  const tag = (e.target.tagName || "").toLowerCase();
  const typing = tag === "input" || tag === "textarea" || e.target.isContentEditable;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (!typing && e.key === "/") {
    e.preventDefault();
    termInput.focus({ preventScroll: true });
    $("#terminal").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    return;
  }
  if (!typing && /^[1-6]$/.test(e.key)) {
    const link = railLinks.find((a) => a.dataset.key === e.key);
    if (link) { e.preventDefault(); goTo(link.getAttribute("href").slice(1)); }
  }
  if (typing && e.target === termInput && e.key === "Escape") termInput.blur();
});

/* ============================================================
   Terminal
   ============================================================ */
const termBody = $("#termBody");
const termForm = $("#termForm");
const termInput = $("#termInput");
const history_ = [];
let histIdx = 0;
let busy = false;

function print(html, cls = "") {
  const p = document.createElement("p");
  if (cls) p.className = cls;
  p.innerHTML = html;
  termBody.appendChild(p);
  termBody.scrollTop = termBody.scrollHeight;
  return p;
}
const gap = () => { const d = document.createElement("div"); d.className = "t-gap"; termBody.appendChild(d); };
const row = (k, v) => print(`<span>${k}</span><span>${v}</span>`, "t-row");
const runBtn = (cmd, label = cmd) => `<button type="button" class="t-run" data-cmd="${esc(cmd)}">${esc(label)}</button>`;
const menu = (cmds) => print(cmds.map((c) => runBtn(c)).join(""), "t-menu");
const link = (href, label, ext = true) => `<a href="${href}"${ext ? ' target="_blank" rel="noopener"' : ""}>${esc(label)}</a>`;

const COMMANDS = {
  help: {
    desc: "list commands",
    run() {
      print("Click a command to run it, or type it and press Enter.", "t-dim");
      gap();
      Object.entries(COMMANDS).forEach(([name, c]) => {
        if (c.hidden) return;
        const usage = c.args ? ` <span class="t-dim">${esc(name + " " + c.args)}</span>` : "";
        print(`${runBtn(name)}<span>${esc(c.desc)}${usage}</span>`, "t-row");
      });
      gap();
      print("Tip: Tab completes a command, and the up/down arrows bring back earlier ones.", "t-dim");
    }
  },
  whoami: {
    desc: "the short version",
    run() {
      print("<span class='t-hi'>Jake Brecknock</span>");
      print("B.A. Computer Science + B.S. Electrical Engineering (3-2), Grinnell College '27");
      print("NCAA soccer. Founder of SQrL VPN and the Grinnell Student Outreach Club.");
      print("Interned at ADB Companies (2026) and ACE Handyman Services (2025).", "t-dim");
    }
  },
  about: { desc: "jump to About", run() { print("Opening ~/about", "t-dim"); goTo("about"); } },
  experience: {
    desc: "work history",
    run() {
      row("2026  ADB", "Engineering Intern (software/electrical)");
      row("2025  Grinnell", "Residential Assistant");
      row("2025  ACE", "Software Development Intern");
      row("2024  Tapster", "Robotics Assembly Team");
      gap();
      print(`Full details: ${runBtn("cd experience", "~/experience")}`, "t-dim");
    }
  },
  projects: {
    desc: "list projects",
    args: "[name]",
    run(args) {
      if (args.length) {
        const q = args.join(" ").toLowerCase();
        const i = PROJECTS.findIndex((p) => p.id.includes(q) || p.name.toLowerCase().includes(q));
        if (i < 0) return print(`No project matches "${esc(q)}". Run <span class='t-hi'>projects</span> to list them.`, "t-err");
        showProject(i);
        goTo("projects");
        return print(`Opened ${esc(PROJECTS[i].name)}`, "t-ok");
      }
      PROJECTS.forEach((p) => print(`${runBtn("projects " + p.id, p.id)}<span>${esc(p.name)} <span class="t-dim">(${esc(p.when)})</span></span>`, "t-row"));
      gap();
      print("Click an id to open that project, or type <span class='t-hi'>projects sqrl</span>.", "t-dim");
    }
  },
  courses: {
    desc: "list coursework",
    args: "[csc|mat|phy|sta]",
    run(args) {
      const dept = (args[0] || "all").toUpperCase();
      if (!["ALL", "CSC", "MAT", "PHY", "STA"].includes(dept)) return print(`Unknown department "${esc(args[0])}". Try csc, mat, phy, or sta.`, "t-err");
      const list = COURSES.filter((c) => dept === "ALL" || c.dept.split(" ").includes(dept));
      list.forEach((c) => row(c.label || c.code, esc(c.title)));
      filterCourses(dept);
      gap();
      if (dept === "ALL") print(`Filter by department: ${["csc", "mat", "phy", "sta"].map((d) => runBtn("courses " + d, d)).join(" ")}`, "t-dim");
      else print(`Course list below is filtered to ${dept}. ${runBtn("courses", "show all")}`, "t-dim");
      print(`Full descriptions: ${runBtn("cd courses", "~/courses")}`, "t-dim");
    }
  },
  skills: {
    desc: "languages and tools",
    run() {
      row("languages", "C, JavaScript, R, Rust, SQL, Python, Java");
      row("hardware", "circuit design, computer architecture");
      row("tools", "LLM implementation, AI frameworks, Git, Bash, Excel, Firebase");
    }
  },
  resume: {
    desc: "open my resume (PDF)",
    run() {
      print(`${link(LINKS.resume, "resume.pdf")} <span class="t-dim">(opens in a new tab)</span>`);
      goTo("resume");
    }
  },
  contact: {
    desc: "how to reach me",
    run() {
      row("email", link(LINKS.email, EMAIL, false));
      row("phone", `<a href="tel:+17083783477">${PHONE}</a>`);
      row("linkedin", link(LINKS.linkedin, "in/jake-brecknock"));
      row("github", link(LINKS.github, "jakebrecknock"));
    }
  },
  email: {
    desc: "copy my email address",
    run() { copyText(EMAIL, "email"); print(`${EMAIL} <span class="t-ok">copied to clipboard</span>`); }
  },
  open: {
    desc: "open a link",
    args: "<github|linkedin|resume|letter>",
    run(args) {
      const key = (args[0] || "").toLowerCase();
      if (!LINKS[key]) return print(`Usage: open github | linkedin | resume | letter | stackindex`, "t-err");
      window.open(LINKS[key], key === "email" ? "_self" : "_blank", "noopener");
      print(`Opening ${esc(key)}…`, "t-ok");
    }
  },
  ls: {
    desc: "list files",
    run() {
      print("about.txt  experience.log  projects/  courses/  resume.pdf  recommendation.pdf  contact.txt");
    }
  },
  cat: {
    desc: "read a file",
    args: "<file>",
    run(args) {
      const f = (args[0] || "").replace(/^~\//, "");
      const map = {
        "about.txt": () => COMMANDS.whoami.run(),
        "experience.log": () => COMMANDS.experience.run(),
        "contact.txt": () => COMMANDS.contact.run(),
        "resume.pdf": () => COMMANDS.resume.run(),
        "recommendation.pdf": () => { print(link(LINKS.letter, "recommendation.pdf")); }
      };
      if (map[f]) return map[f]();
      if (f === "projects" || f === "projects/" || f === "courses" || f === "courses/") return print(`cat: ${esc(f)}: is a directory. Try <span class='t-hi'>${f.replace("/", "")}</span>.`, "t-err");
      print(f ? `cat: ${esc(f)}: no such file. Run <span class='t-hi'>ls</span>.` : "Usage: cat <file>", "t-err");
    }
  },
  theme: {
    desc: "switch theme",
    args: "[dark|light]",
    run(args) {
      const want = (args[0] || (root.dataset.theme === "dark" ? "light" : "dark")).toLowerCase();
      if (!["dark", "light"].includes(want)) return print("Usage: theme dark | theme light", "t-err");
      applyTheme(want);
      print(`Theme set to ${want === "dark" ? "graphite" : "paper"}.`, "t-ok");
    }
  },
  clear: { desc: "clear the screen", run() { termBody.innerHTML = ""; } },
  date: { hidden: true, desc: "", run() { print(new Date().toLocaleString("en-US", { timeZone: "America/Chicago", dateStyle: "full", timeStyle: "short" }) + " CT"); } },
  pwd: { hidden: true, desc: "", run() { print("/home/jake"); } },
  sudo: {
    hidden: true, desc: "",
    run(args) {
      if (args.join(" ").toLowerCase().includes("hire")) {
        print("Permission granted.", "t-ok");
        print(`Send the offer to ${link(LINKS.email, EMAIL, false)}`);
      } else {
        print("jake is not in the sudoers file. This incident will be reported.", "t-err");
      }
    }
  },
  exit: { hidden: true, desc: "", run() { print("There is no escape. Try <span class='t-hi'>contact</span> instead.", "t-dim"); } }
};
COMMANDS.cd = { hidden: true, desc: "", run(args) {
  const t = (args[0] || "").replace(/^~\/?/, "").replace(/\/$/, "");
  const ids = ["about", "experience", "projects", "courses", "resume", "contact"];
  if (!t) return print("/home/jake");
  if (ids.includes(t)) { goTo(t); return print(`Opening ~/${t}`, "t-dim"); }
  print(`cd: ${esc(t)}: no such directory`, "t-err");
} };

function run(raw) {
  const line = raw.trim();
  print(`<span class="prompt-echo">$</span> ${esc(line)}`, "t-cmd");
  if (!line) return;
  history_.push(line);
  histIdx = history_.length;
  const [name, ...args] = line.split(/\s+/);
  const cmd = COMMANDS[name.toLowerCase()];
  if (!cmd) {
    print(`${esc(name)}: command not found. Type <span class='t-hi'>help</span> for the list.`, "t-err");
  } else {
    cmd.run(args);
    setStatus(`Last command: ${line}`);
  }
  gap();
}

termForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (busy) return;
  const v = termInput.value;
  termInput.value = "";
  run(v);
});

termInput.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    if (!history_.length) return;
    e.preventDefault();
    histIdx = Math.max(0, histIdx - 1);
    termInput.value = history_[histIdx] || "";
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    histIdx = Math.min(history_.length, histIdx + 1);
    termInput.value = history_[histIdx] || "";
  } else if (e.key === "Tab") {
    const v = termInput.value;
    if (!v) return;
    e.preventDefault();
    const parts = v.split(/\s+/);
    if (parts.length === 1) {
      const hits = Object.keys(COMMANDS).filter((c) => !COMMANDS[c].hidden && c.startsWith(parts[0].toLowerCase()));
      if (hits.length === 1) termInput.value = hits[0] + " ";
      else if (hits.length > 1) { print(hits.join("   "), "t-dim"); }
    } else {
      const pools = {
        open: Object.keys(LINKS),
        courses: ["csc", "mat", "phy", "sta"],
        projects: PROJECTS.map((p) => p.id),
        theme: ["dark", "light"],
        cat: ["about.txt", "experience.log", "contact.txt", "resume.pdf", "recommendation.pdf"],
        cd: ["about", "experience", "projects", "courses", "resume", "contact"]
      };
      const pool = pools[parts[0].toLowerCase()] || [];
      const last = parts[parts.length - 1].toLowerCase();
      const hits = pool.filter((x) => x.startsWith(last));
      if (hits.length === 1) { parts[parts.length - 1] = hits[0]; termInput.value = parts.join(" "); }
      else if (hits.length > 1) print(hits.join("   "), "t-dim");
    }
  }
});

// Clicking a command in the output runs it. Clicking empty space focuses the input
// on desktop (not on phones, where it would pop the keyboard up).
const finePointer = window.matchMedia("(pointer: fine)").matches;
termBody.addEventListener("click", (e) => {
  const btn = e.target.closest(".t-run");
  if (btn) { typeAndRun(btn.dataset.cmd); return; }
  if (e.target.closest("a, button")) return;
  if (window.getSelection().toString()) return;
  if (finePointer) termInput.focus({ preventScroll: true });
});

// Quick command buttons type the command so people see what's happening.
$$(".term-quick button").forEach((b) => b.addEventListener("click", () => typeAndRun(b.dataset.cmd)));

function typeAndRun(cmd) {
  if (busy) return;
  if (reduceMotion) { run(cmd); return; }
  busy = true;
  termInput.value = "";
  let i = 0;
  const step = () => {
    termInput.value = cmd.slice(0, ++i);
    if (i < cmd.length) setTimeout(step, 28);
    else setTimeout(() => { termInput.value = ""; busy = false; run(cmd); }, 90);
  };
  step();
}

/* ---------------- boot: the one orchestrated moment ---------------- */
(function boot() {
  const ok = (label) => `<span class="t-lead"><span>${label}</span><span class="t-dots" aria-hidden="true"></span><span class="t-ok">ok</span></span>`;
  const lines = [
    ["jb-os 2.0, grinnell node", "t-dim"],
    [ok("mounting /home/jake"), ""],
    [ok("loading resume.pdf (updated Nov 2026)"), ""],
    [ok(`indexing ${PROJECTS.length} projects, ${COURSES.length} courses`), ""],
    ["", ""],
    ["Welcome. This is a working terminal. Click a command to run it:", ""]
  ];
  const finish = () => {
    menu(["whoami", "projects", "experience", "courses", "skills", "resume", "contact", "help"]);
    gap();
    print("Or type one below and press Enter.", "t-dim");
  };
  if (reduceMotion) { lines.forEach(([t, c]) => (t ? print(t, c) : gap())); finish(); return; }
  let i = 0;
  const next = () => {
    if (i >= lines.length) { finish(); return; }
    const [t, c] = lines[i++];
    t ? print(t, c) : gap();
    setTimeout(next, i < 4 ? 160 : 220);
  };
  setTimeout(next, 250);
})();
