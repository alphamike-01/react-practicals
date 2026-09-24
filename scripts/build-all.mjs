import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, cpSync } from "node:fs";
import { resolve, join } from "node:path";

const root = resolve(".");
const dist = join(root, "dist");

if (existsSync(dist)) rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const apps = [
  ["01", "pract1/student-profile-card", "cra"],
  ["02", "pract2/employee-card", "cra"],
  ["03", "pract3/counter-light-switch", "cra"],
  ["04", "pract4/digital-clock", "cra"],
  ["05", "pract5/vote", "cra"],
  ["06", "pract6/student-registration", "cra"],
  ["07", "pract7/dynamic-login", "cra"],
  ["08", "pract8/product-catalog", "cra"],
  ["09", "pract9", "vite"],
  ["10", "pract10", "vite"],
  ["11", "pract11", "vite"],
  ["12", "pract12", "vite"],
  ["13", "pract13", "vite"],
  ["14", "pract14/frontend", "vite"]
];

function run(command, args, cwd, env = {}) {
  console.log(`\n> ${command} ${args.join(" ")}  [${cwd}]`);
  execFileSync(command, args, {
    cwd,
    stdio: "inherit",
    env: { ...process.env, ...env }
  });
}

for (const [id, rel, kind] of apps) {
  const cwd = join(root, rel);
  const target = join(dist, `practical-${id}`);
  mkdirSync(target, { recursive: true });

  // Install each practical's own dependencies because the repository intentionally
  // preserves the original practical projects.
  run(process.platform === "win32" ? "npm.cmd" : "npm",
      ["install", "--no-audit", "--no-fund"], cwd);

  if (kind === "cra") {
    run(process.platform === "win32" ? "npm.cmd" : "npm",
        ["run", "build"], cwd, { PUBLIC_URL: `/practical-${id}` });
    cpSync(join(cwd, "build"), target, { recursive: true });
  } else {
    run(process.platform === "win32" ? "npm.cmd" : "npm",
        ["run", "build", "--", "--base", `/practical-${id}/`, "--outDir", target], cwd);
  }
}

const index = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>React Practicals | Complete Portfolio</title>
<style>
:root{font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif;color:#172033;background:#f5f7fb}
*{box-sizing:border-box}body{margin:0}.wrap{max-width:1180px;margin:auto;padding:56px 20px 70px}
.hero{background:linear-gradient(135deg,#15284b,#315fc8);color:#fff;border-radius:24px;padding:42px;margin-bottom:24px}
.badge{display:inline-block;padding:7px 12px;border-radius:999px;background:rgba(255,255,255,.15);font-size:13px;font-weight:800}
h1{font-size:clamp(34px,6vw,58px);line-height:1.02;margin:15px 0 10px}.hero p{max-width:760px;color:#dbe6ff;font-size:17px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:15px}
.card{display:block;background:#fff;border:1px solid #e2e7ef;border-radius:17px;padding:21px;color:#172033;text-decoration:none;box-shadow:0 10px 30px rgba(20,35,60,.06);transition:.18s}
.card:hover{transform:translateY(-3px);border-color:#9eb5ef}.num{font-size:12px;color:#315fc8;font-weight:900;letter-spacing:.1em}.card h2{margin:8px 0}.card p{color:#6a7485;line-height:1.5;margin:0}.cap{border:2px solid #315fc8}.cap h2{color:#315fc8}
.note{margin-top:22px;padding:16px;background:#fff;border:1px solid #e2e7ef;border-radius:14px;color:#5e6879}
</style>
</head>
<body><main class="wrap">
<section class="hero"><span class="badge">React Practical Portfolio</span>
<h1>React Practicals 01–14</h1>
<p>A single Vercel project containing the complete practical portfolio. Select a practical below to open its original working application.</p></section>
<section class="grid">
${apps.map(([id, rel]) => {
  const cap = id === "14";
  const titles = {
    "01":"Student Profile Card","02":"Employee Card","03":"Counter & Light Switch",
    "04":"Digital Clock","05":"Voting Application","06":"Student Registration",
    "07":"Dynamic Login","08":"Product Catalog","09":"To-Do List Manager",
    "10":"Personal Portfolio","11":"College Information Portal","12":"Shopping Cart",
    "13":"Weather Information App","14":"Student Management System — Capstone"
  };
  return `<a class="card ${cap ? "cap" : ""}" href="/practical-${id}/"><span class="num">PRACTICAL ${id}</span><h2>${titles[id]}</h2><p>${cap ? "Full CRUD Capstone with React, Router, Fetch API, Redux Toolkit, Express and MongoDB." : "Open the implemented practical application."}</p></a>`;
}).join("")}
</section>
<div class="note"><strong>Practical 14:</strong> the frontend is included in this single Vercel project. To enable real database CRUD in production, add a MongoDB Atlas URI as the Vercel environment variable <code>MONGODB_URI</code>.</div>
</main></body></html>`;

require("node:fs").writeFileSync(join(dist, "index.html"), index, "utf8");
console.log("\nAll practicals built into one Vercel project.");
