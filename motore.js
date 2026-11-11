/*!
 * Dashboard Giacomel – motore grafico
 * Version 1.0.0 · build 2026-11-11
 * Developed by Andrea Carminati. All rights reserved.
 * Questo file disegna le dashboard: l'HTML generato contiene solo l'oggetto DASHBOARD con i dati.
 */
(function () {
"use strict";
const ENGINE = { name: "Dashboard Giacomel", version: "1.0.0", build: "2026-11-11", author: "Andrea Carminati" };
ENGINE.signature = `${ENGINE.name} engine v${ENGINE.version} (${ENGINE.build}) – Developed by ${ENGINE.author}`;
if (window.DashboardGiacomel) return;
window.DashboardGiacomel = Object.freeze(Object.assign({}, ENGINE));
const CSS = "*{box-sizing:border-box;margin:0;padding:0}\nhtml,body,#app{width:100%;height:100%;overflow:hidden}\nbody{font-family:'Poppins',system-ui,sans-serif;-webkit-font-smoothing:antialiased;background:var(--bg)}\nbutton{font:inherit;border:0;background:none;cursor:pointer;color:inherit}\n:root{--a1:#fd8534;--a2:#fdba8c;--ok:#10b981;--ko:#ef4444}\nhtml[data-accent=blu]{--a1:#3b82f6;--a2:#93c5fd}\nhtml[data-theme=dark]{--bg:#24282f;--card:#2e333b;--border:#3a4049;--title:#fff;--sub:#a7adb7;--grid:#3a4049;--soft:#373d46}\nhtml[data-theme=light]{--bg:#f4f5f8;--card:#fff;--border:#e8eaef;--title:#111827;--sub:#6b7280;--grid:#eef0f3;--soft:#f3f4f6}\nhtml[data-brand=grafite]{--sb:#1c1f24;--sbact:#244582;--glow:#2c3038}\nhtml[data-brand=blu]{--sb:#244582;--sbact:#3b82f6;--glow:#2f5aa8}\n.num{font-variant-numeric:tabular-nums}\n.shell{display:flex;width:100%;height:100%;background:var(--bg);transition:background .3s}\n#sb{position:relative;flex-shrink:0;width:240px;height:100%;background:var(--sb);color:#fff;border-radius:0 28px 28px 0;overflow:hidden;z-index:5;box-shadow:4px 0 30px rgba(0,0,0,.18);transition:width .9s cubic-bezier(.22,1,.36,1),border-radius .9s}\n.v-home #sb,.v-end #sb{width:100%;border-radius:0}\n.v-app.collapsed #sb{width:76px}\n.splash{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .4s;background:radial-gradient(60% 50% at 50% 45%,var(--glow),transparent 70%)}\n.v-home .splash,.v-end .splash{opacity:1;pointer-events:auto;transition:opacity .7s .35s}\n.splash-in{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 24px}\n.v-home .end-only,.v-end .home-only,.v-app .end-only,.v-app .home-only{display:none}\n.logo img{display:block;width:150px;filter:brightness(0) invert(1)}\n.logo.big img{width:min(70vw,260px)}\n.logo-txt{display:none;font-weight:600;font-size:18px;letter-spacing:-.01em;color:#fff}\n.logo.big .logo-txt{font-size:42px}\n.line{width:40px;height:2px;border-radius:2px;background:var(--a1);margin:32px 0}\n.sp1{font-size:14px;letter-spacing:.3em;text-transform:uppercase;color:rgba(255,255,255,.65)}\n.sp2{font-size:12px;letter-spacing:.2em;color:rgba(255,255,255,.4);margin-top:8px}\n.start{margin-top:48px;display:inline-flex;align-items:center;gap:14px;padding:11px 12px 11px 30px;border-radius:999px;background:#fff;color:var(--sb);font-weight:600;font-size:15px;box-shadow:0 10px 30px rgba(0,0,0,.25);transition:transform .25s}\n.start:hover{transform:scale(1.04)}\n.start span{width:30px;height:30px;border-radius:50%;background:var(--a1);color:#fff;display:flex;align-items:center;justify-content:center}\n.thanks{font-weight:200;font-size:clamp(26px,4vw,52px);letter-spacing:.25em;color:#fff;animation:pulse 3s ease-in-out infinite}\n@keyframes pulse{50%{opacity:.55}}\n.restart{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;color:rgba(255,255,255,.45);font-size:10px;letter-spacing:.3em;text-transform:uppercase;transition:color .3s}\n.restart:hover{color:#fff}\n.corp{position:absolute;bottom:40px;right:40px;font-size:10px;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.3)}\n.menu{position:absolute;inset:0;display:flex;flex-direction:column;padding:20px 16px;opacity:0;pointer-events:none;transition:opacity .3s}\n.v-app .menu{opacity:1;pointer-events:auto;transition:opacity .6s .5s}\n.mtop{display:flex;justify-content:flex-start;margin:-6px 0 14px -6px}\n.collapsed .mtop{justify-content:center;margin:-6px 0 20px}\n.mend{display:flex;justify-content:flex-start}\n.collapsed .mend{padding-left:8px}\n.v-app.collapsed #sb{overflow:visible}\n.enddot{position:relative;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.07);transition:background .25s}\n.enddot svg{width:10px;height:10px;stroke:#ef4444}\n.enddot span{position:absolute;left:38px;top:50%;transform:translate(-4px,-50%);font-size:12px;font-weight:300;letter-spacing:.06em;white-space:nowrap;color:#fff;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s}\n.collapsed .enddot span{left:62px;color:var(--title)}\n.enddot:hover{background:rgba(255,255,255,.14)}\n.enddot:hover span{opacity:1;transform:translate(0,-50%)}\n.colbtn{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.55);transition:background .2s,color .2s}\n.colbtn:hover{background:rgba(255,255,255,.1);color:#fff}\n.mlogo{display:flex;justify-content:center;margin-bottom:30px}\n.collapsed .mlogo{display:none}\nnav{display:flex;flex-direction:column;gap:8px}\n.nb{display:flex;align-items:center;width:100%;text-align:left;padding:12px 16px;border-radius:12px;font-size:12px;font-weight:500;color:rgba(255,255,255,.75);transition:background .2s,color .2s}\n.nb:hover{background:rgba(255,255,255,.08);color:#fff}\n.nb.on{background:var(--sbact);color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.18)}\n.nn{display:none}\n.collapsed .nb{justify-content:center;padding:12px 0}\n.collapsed .nn{display:block;font-weight:600}\n.collapsed .nt{display:none}\n.mbot{margin-top:auto;display:flex;flex-direction:column;gap:16px}\n.prog .ph{display:flex;justify-content:space-between;font-size:10px;color:rgba(255,255,255,.6);margin-bottom:6px}\n.pt{height:3px;border-radius:3px;background:rgba(255,255,255,.14);overflow:hidden}\n.pf{height:100%;border-radius:3px;background:rgba(255,255,255,.75);transition:width .12s linear}\n.collapsed .pl{display:none}\n.collapsed .prog .ph{justify-content:center}\n.mode{display:flex;align-items:center;justify-content:space-between;padding-top:16px;border-top:1px solid rgba(255,255,255,.1)}\n.ml{font-size:10px;color:rgba(255,255,255,.7)}\n.collapsed .mode{justify-content:center}\n.collapsed .ml{display:none}\n.sw{position:relative;flex-shrink:0;width:56px;height:28px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:space-between;padding:0 7px;color:rgba(255,255,255,.55);transition:background .25s}\nhtml[data-theme=light] .sw{background:#3b82f6;border-color:#3b82f6}\n.sw svg{width:12px;height:12px}\n.knob{position:absolute;top:1px;left:2px;width:24px;height:24px;border-radius:50%;background:#fff;color:var(--sb);box-shadow:0 1px 3px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;transition:left .25s}\nhtml[data-theme=light] .knob{left:28px;color:#3b82f6}\n.mper{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.45);text-align:center}\n.mcorp{font-size:9px;color:rgba(255,255,255,.3);text-align:center;margin-top:-10px}\n.enddot{position:relative;z-index:30;flex-shrink:0}\n.collapsed .mper,.collapsed .mcorp{display:none}\n#main{flex:1;min-width:0;height:100%;overflow-y:auto;overflow-x:hidden;padding:40px;opacity:1;transition:opacity .5s .5s}\n.v-home #main,.v-end #main{opacity:0;padding:0;overflow:hidden;transition:none}\n.page{display:flex;flex-direction:column;gap:24px;padding-bottom:48px}\n.cap{font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--a1)}\n.phd h1{font-size:30px;font-weight:700;line-height:1.2;margin-top:4px;color:var(--title)}\n.phd p{font-size:14px;font-weight:300;color:var(--sub);margin-top:4px}\n.hd{font-size:22px;font-weight:700;color:var(--a1);margin-top:12px}\n.card{min-width:0;padding:24px;border-radius:18px;background:var(--card);border:1px solid var(--border);color:var(--title);transition:background .3s}\n.card.dark{background:#16181c;border-color:color-mix(in srgb,var(--a1) 30%,transparent);color:#fff}\n.ch{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:18px}\n.ct{font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--sub)}\n.card.dark .ct{color:var(--a1)}\n.cs{font-size:12px;font-weight:300;color:var(--sub);margin-top:2px}\n.kpis{display:grid;gap:20px;grid-template-columns:repeat(var(--n),minmax(0,1fr))}\n.cols{display:grid;gap:24px;grid-template-columns:repeat(var(--n),minmax(0,1fr))}\n@media(max-width:1000px){.kpis{grid-template-columns:repeat(2,minmax(0,1fr))}.cols{grid-template-columns:1fr}}\n.kpi{min-width:0;padding:20px 22px;border-radius:18px;background:var(--card);border:1px solid var(--border)}\n.kpi.hl{background:color-mix(in srgb,var(--a1) 9%,var(--card));border-color:color-mix(in srgb,var(--a1) 45%,transparent)}\n.kl{display:flex;align-items:center;gap:8px;font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--sub)}\n.kl::before{content:'';flex-shrink:0;width:6px;height:6px;border-radius:50%;background:var(--a1)}\n.kpi.hl .kl{color:var(--a1)}\n.kvw{margin-top:10px;overflow:hidden}\n.kv{display:inline-block;white-space:nowrap;font-size:40px;font-weight:700;line-height:1.15;color:var(--title)}\n.kv small{font-size:.5em;font-weight:600;color:var(--a1);margin-left:8px}\n.kd{display:block;font-size:12px;font-weight:600;margin-top:4px;color:var(--sub)}\n.kd.ok{color:var(--ok)}.kd.ko{color:var(--ko)}\n.kn{display:block;font-size:11px;font-weight:300;color:var(--sub);margin-top:4px}\n.btn{padding:6px 12px;border-radius:8px;background:var(--soft);color:var(--title);font-size:11px;font-weight:600;white-space:nowrap;transition:background .2s}\n.btn:hover{background:var(--border)}\n.sw3{flex-shrink:0;display:flex;gap:2px;padding:2px;border-radius:9px;background:var(--soft)}\n.sw3 button{padding:4px 9px;border-radius:7px;font-size:10px;font-weight:500;color:var(--sub)}\n.sw3 button.on{background:var(--card);color:var(--title);box-shadow:0 1px 3px rgba(0,0,0,.15)}\n.tw{overflow-x:auto}\ntable{width:100%;border-collapse:collapse;font-size:13px}\nth{padding:12px 14px;text-align:left;white-space:nowrap;background:var(--soft);color:var(--sub);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase}\nth:first-child{border-radius:10px 0 0 10px}th:last-child{border-radius:0 10px 10px 0}\ntd{padding:12px 14px;text-align:left;border-bottom:1px solid var(--border);color:var(--title);font-weight:300}\ntd:first-child{white-space:nowrap}\nth.r,td.r{text-align:right}\ntd.r{font-weight:500;white-space:nowrap;font-variant-numeric:tabular-nums}\nth.w,td.w{min-width:20rem}\ntr.hl td{color:var(--a1);font-weight:700}\ntr.tot td{font-weight:700;border-bottom:0;background:var(--soft)}\n.dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--a1);margin-right:10px;vertical-align:middle}\n.more{font-size:11px;font-weight:300;color:var(--sub);text-align:right;margin-top:10px}\nsvg text{font-family:inherit}\n.ax{font-size:11px;fill:var(--sub)}\n.vl{font-size:11px;font-weight:600;fill:var(--title)}\n.lg{display:flex;flex-wrap:wrap;gap:16px;font-size:11px;color:var(--sub);margin-top:12px}\n.lg i{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:6px;vertical-align:middle}\n.hb{display:flex;flex-direction:column;gap:14px}\n.hr{display:flex;align-items:center;gap:16px;font-size:13px}\n.hn{width:130px;flex-shrink:0;font-weight:500}\n.hbs{flex:1;display:flex;flex-direction:column;gap:4px}\n.ht{height:10px;border-radius:99px;background:var(--soft)}\n.card.dark .ht{background:rgba(255,255,255,.1)}\n.hf{height:100%;border-radius:99px}\n.hv{min-width:70px;text-align:right;font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums}\n.seg{display:flex;gap:4px;height:12px;border-radius:99px;overflow:hidden;margin-bottom:18px}\n.chips{display:grid;gap:12px;grid-template-columns:repeat(var(--n),minmax(0,1fr))}\n.chip{padding:12px 16px;border-radius:12px;background:var(--soft);font-size:13px;border:1px solid transparent}\n.chip.on{background:color-mix(in srgb,var(--a1) 10%,var(--card));border-color:color-mix(in srgb,var(--a1) 55%,transparent);color:var(--a1)}\n.chip em{font-style:normal;font-size:11px;color:var(--sub)}\n.li{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--border);font-size:13px}\n.li:first-child{border-top:0}\n.lt{display:flex;align-items:center;gap:12px;min-width:0}\n.lt b{font-weight:500}\n.lt small{font-family:ui-monospace,Menlo,monospace;font-size:11px;color:var(--sub)}\n.lv{font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums}\n.ins{padding:16px 20px;border-radius:14px;background:var(--card);border:1px solid var(--border);border-left:3px solid var(--a1)}\n.il{display:block;margin-bottom:8px;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--a1)}\n.ins blockquote{margin-bottom:6px;font-size:14px;font-style:italic;font-weight:300;line-height:1.6;color:var(--title)}\n.ins p{font-size:14px;font-weight:300;line-height:1.6;color:var(--sub)}\n.tx{font-size:14px;font-weight:300;line-height:1.6}\n.warn{display:flex;align-items:center;gap:12px;padding:14px 20px;border-radius:14px;background:color-mix(in srgb,var(--a1) 14%,var(--card));border:1px solid color-mix(in srgb,var(--a1) 60%,transparent);color:var(--a1);font-size:14px;font-weight:600;line-height:1.4}\n.warn svg{flex-shrink:0;width:20px;height:20px}\n.ring{display:flex;flex-direction:column;align-items:center}\n.rv{font-size:30px;font-weight:700;fill:var(--title)}\n.rl{font-size:10px;letter-spacing:.15em;text-transform:uppercase;fill:var(--sub)}\n.rn{font-size:13px;color:var(--sub);margin-top:8px}\n.ov{position:fixed;inset:0;z-index:50;display:flex;padding:12px;background:rgba(0,0,0,.7)}\n.mp{flex:1;display:flex;flex-direction:column;overflow:hidden;border-radius:18px;background:var(--card);border-top:3px solid var(--a1)}\n.mh{display:flex;justify-content:space-between;align-items:center;padding:18px 24px;border-bottom:1px solid var(--border)}\n.mk{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--a1)}\n.mh h3{font-size:18px;font-weight:700;color:var(--title)}\n.mx{width:34px;height:34px;border-radius:50%;background:var(--soft);display:flex;align-items:center;justify-content:center;transition:background .2s}\n.mx svg{width:12px;height:12px;stroke:var(--title)}\n.mx:hover{background:#ef4444}.mx:hover svg{stroke:#fff}\n.mb{flex:1;min-height:0;overflow:auto;padding:24px}\n.mf{padding:14px 24px;text-align:right;border-top:1px solid var(--border)}\n::-webkit-scrollbar{width:7px;height:7px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#6b7280;border-radius:4px}\n.cn{font-size:11px;font-weight:300;font-style:italic;color:var(--sub);margin-top:14px}\n.err{display:flex;flex-direction:column;gap:6px;padding:16px 20px;border-radius:14px;background:rgba(239,68,68,.1);border:1px solid #ef4444;color:#ef4444;font-size:13px;line-height:1.5}\n.err b{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}\n.err code{font-family:ui-monospace,Menlo,monospace;font-size:11px;opacity:.8}\n.errpill{margin-top:22px;padding:8px 16px;border-radius:999px;background:rgba(239,68,68,.18);border:1px solid #ef4444;color:#fecaca;font-size:12px}\n.fatal{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:#24282f;font-family:'Poppins',system-ui,sans-serif}\n.fatal .err{max-width:640px;font-size:15px}\n#sig{position:fixed;inset:0;z-index:99;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.72)}\n#sig div{min-width:min(92vw,460px);padding:28px 32px;border-radius:18px;background:#16181c;border:1px solid var(--a1);color:#fff;font-size:13px;line-height:1.9;box-shadow:0 20px 60px rgba(0,0,0,.5)}\n#sig h4{font-size:18px;font-weight:700;color:var(--a1);margin-bottom:10px}\n#sig span{color:rgba(255,255,255,.55)}\n#sig p.k{margin-top:14px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.35)}\n";
let DB = null;
const ACC = { arancio: ["#fd8534", "#fdba8c"], orange: ["#fd8534", "#fdba8c"], blu: ["#3b82f6", "#93c5fd"], blue: ["#3b82f6", "#93c5fd"], verde: ["#10b981", "#6ee7b7"], green: ["#10b981", "#6ee7b7"] };
const I = {
  x: '<svg viewBox="0 0 10 10" fill="none" stroke-width="1.8" stroke-linecap="round"><path d="M1.5 1.5l7 7M8.5 1.5l-7 7"/></svg>',
  panel: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9.5 4v16"/></svg>',
  pc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
  proj: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="8" width="20" height="9" rx="2"/><circle cx="15" cy="12.5" r="2.5"/><path d="M6 12.5h3M5 17v2M19 17v2"/></svg>',
  home: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-8 9 8M5 10v10h5v-6h4v6h5V10"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/></svg>',
  arrow: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};
const S = { view: "home", tab: 0, last: -1, light: false, collapsed: false, modal: null, views: {} };
let REG = [];
const $ = s => document.querySelector(s);
const esc = v => String(v == null ? "" : v).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmt = v => typeof v === "number" ? v.toLocaleString("it-IT", { maximumFractionDigits: 2, useGrouping: "always" }) : esc(v);
const pad = n => String(n).padStart(2, "0");
const acc = a => a && ACC[a] ? ` style="--a1:${ACC[a][0]};--a2:${ACC[a][1]}"` : "";
const col = j => j === 0 ? "var(--a1)" : j === 1 ? "var(--a2)" : j === 2 ? "var(--sub)" : "#a78bfa";
const short = v => Math.abs(v) >= 1000 ? (v / 1000).toLocaleString("it-IT", { maximumFractionDigits: 1 }) + "k" : v.toLocaleString("it-IT", { maximumFractionDigits: 2 });
const logo = big => `<div class="logo${big ? " big" : ""}"><img src="https://fratelligiacomel.it/img/logo.png" alt="Fratelli Giacomel" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="logo-txt">Fratelli Giacomel</span></div>`;

function norm(b) {
  if (b.type === "bars") return Object.assign({}, b, { type: "colonne" });
  if (b.type === "donut") return Object.assign({}, b, { type: "torta" });
  if (b.type === "progress") return Object.assign({}, b, { type: "barre", data: (b.rows || []).map(r => ({ name: r.label, value: r.value, display: r.display })) });
  return b;
}
function ser(b) {
  if (b.series) return { keys: b.series, rows: b.data.map(d => ({ name: d.name, vals: b.series.map(s => +d[s] || 0) })) };
  return { keys: null, rows: (b.data || []).map(d => ({ name: d.name != null ? d.name : d.label, vals: [+d.value || 0], display: d.display })) };
}
function scale(max) {
  if (max <= 0) return { top: 1, step: 0.25 };
  const raw = max / 4, p = Math.pow(10, Math.floor(Math.log10(raw))), n = raw / p;
  const step = (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p;
  return { top: step * Math.ceil(max / step), step };
}
const legend = keys => keys ? `<div class="lg">${keys.map((k, j) => `<span><i style="background:${col(j)}"></i>${esc(k)}</span>`).join("")}</div>` : "";
const unit = b => b.unit ? esc(b.unit) + " " : "";

function grid(L, R, W, y, top, step) {
  let g = "";
  for (let v = 0; v <= top + 1e-9; v += step) g += `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" style="stroke:var(--grid)"/><text x="${L - 8}" y="${y(v) + 4}" text-anchor="end" class="ax">${short(v)}</text>`;
  return g;
}
function colSvg(b, W) {
  const { keys, rows } = ser(b), H = 280, L = 46, R = 8, T = 26, B = 30, ih = H - T - B, iw = W - L - R;
  const all = rows.flatMap(r => r.vals), max = Math.max(...all), { top, step } = scale(max);
  const y = v => T + ih - (v / top) * ih, slot = iw / rows.length, ns = rows[0].vals.length, gap = ns > 1 ? 4 : 0;
  const gw = Math.min(slot * 0.62, 90 * ns), bw = (gw - gap * (ns - 1)) / ns;
  let g = grid(L, R, W, y, top, step);
  rows.forEach((r, i) => {
    const x0 = L + slot * i + (slot - gw) / 2;
    r.vals.forEach((v, j) => {
      const x = x0 + j * (bw + gap), fill = ns === 1 ? (v === max ? "var(--a1)" : "var(--a2)") : col(j);
      g += `<rect x="${x}" y="${y(v)}" width="${bw}" height="${Math.max(1, (v / top) * ih)}" rx="${Math.min(8, bw / 4)}" style="fill:${fill}"><title>${esc(r.name)}${keys ? " · " + esc(keys[j]) : ""}: ${fmt(v)}</title></rect>`;
      if (ns === 1 || bw > 34) g += `<text x="${x + bw / 2}" y="${y(v) - 7}" text-anchor="middle" class="vl">${ns === 1 && r.display ? esc(r.display) : unit(b) + fmt(v)}</text>`;
    });
    g += `<text x="${L + slot * i + slot / 2}" y="${H - 8}" text-anchor="middle" class="ax">${esc(r.name)}</text>`;
  });
  return `<svg width="${W}" height="${H}" style="display:block">${g}</svg>${legend(keys)}`;
}
function lineSvg(b, W, id) {
  const { keys, rows } = ser(b), H = 280, L = 46, R = 20, T = 26, B = 30, ih = H - T - B, iw = W - L - R, n = rows.length, ns = rows[0].vals.length;
  const { top, step } = scale(Math.max(...rows.flatMap(r => r.vals)));
  const p = n > 1 ? Math.min(40, iw / (n * 2)) : 0, x = i => n > 1 ? L + p + i * (iw - 2 * p) / (n - 1) : L + iw / 2, y = v => T + ih - (v / top) * ih;
  let g = `<defs><linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--a1);stop-opacity:.25"/><stop offset="1" style="stop-color:var(--a1);stop-opacity:0"/></linearGradient></defs>` + grid(L, R, W, y, top, step);
  for (let j = 0; j < ns; j++) {
    const pts = rows.map((r, i) => `${x(i)},${y(r.vals[j])}`);
    if (ns === 1) g += `<path d="M${x(0)},${y(0)}L${pts.join("L")}L${x(n - 1)},${y(0)}Z" fill="url(#g${id})"/>`;
    g += `<path d="M${pts.join("L")}" fill="none" style="stroke:${col(j)}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`;
    rows.forEach((r, i) => {
      g += `<circle cx="${x(i)}" cy="${y(r.vals[j])}" r="4" style="fill:${col(j)};stroke:var(--card)" stroke-width="2"><title>${esc(r.name)}${keys ? " · " + esc(keys[j]) : ""}: ${fmt(r.vals[j])}</title></circle>`;
      if (ns === 1 && n <= 12) g += `<text x="${x(i)}" y="${y(r.vals[j]) - 10}" text-anchor="middle" class="vl">${r.display ? esc(r.display) : unit(b) + fmt(r.vals[j])}</text>`;
    });
  }
  rows.forEach((r, i) => { g += `<text x="${x(i)}" y="${H - 8}" text-anchor="middle" class="ax">${esc(r.name)}</text>`; });
  return `<svg width="${W}" height="${H}" style="display:block">${g}</svg>${legend(keys)}`;
}
function barHtml(b) {
  const { keys, rows } = ser(b), max = b.max || Math.max(...rows.flatMap(r => r.vals)) || 1;
  return `<div class="hb">${rows.map(r => `<div class="hr"><span class="hn">${esc(r.name)}</span><div class="hbs">${r.vals.map((v, j) => `<div class="ht"><div class="hf" style="width:${Math.max(1.5, v / max * 100)}%;background:${keys ? col(j) : "var(--a1)"}"></div></div>`).join("")}</div><span class="hv">${keys ? r.vals.map(fmt).join(" · ") : r.display ? esc(r.display) : unit(b) + fmt(r.vals[0])}</span></div>`).join("")}</div>${legend(keys)}`;
}
function pack(items, gap) {
  const c = items.map(d => Object.assign({}, d, { r: Math.sqrt(Math.max(d.v, 0.01)) * 10 })).sort((a, b) => b.r - a.r);
  const rMin = c[0].r * 0.5; c.forEach(d => { d.cr = Math.max(d.r, rMin); });
  const placed = [], free = (x, y, r) => placed.every(p => Math.hypot(p.x - x, p.y - y) >= p.cr + r + gap - 0.01);
  c.forEach(d => {
    if (!placed.length) { d.x = 0; d.y = 0; }
    else if (placed.length === 1) { d.x = placed[0].cr + d.cr + gap; d.y = 0; }
    else {
      let best = null;
      for (let i = 0; i < placed.length; i++) for (let j = i + 1; j < placed.length; j++) {
        const A = placed[i], B = placed[j], ra = A.cr + d.cr + gap, rb = B.cr + d.cr + gap, dx = B.x - A.x, dy = B.y - A.y, D = Math.hypot(dx, dy);
        if (D > ra + rb || D < Math.abs(ra - rb) || D === 0) continue;
        const k = (ra * ra - rb * rb + D * D) / (2 * D), h = Math.sqrt(Math.max(0, ra * ra - k * k)), mx = A.x + dx * k / D, my = A.y + dy * k / D;
        [[mx + h * dy / D, my - h * dx / D], [mx - h * dy / D, my + h * dx / D]].forEach(([x, y]) => { if (free(x, y, d.cr)) { const s = Math.hypot(x, y); if (!best || s < best.s) best = { x, y, s }; } });
      }
      d.x = best ? best.x : 0; d.y = best ? best.y : 0;
    }
    placed.push(d);
  });
  return placed;
}
function bubbleSvg(b) {
  const W = 760, H = 360, P = 30, gs = b.groups || [];
  const pts = pack(b.data.map(d => ({ n: d.name, v: +d.value || 0, d: d.display, g: typeof d.group === "number" ? d.group : Math.max(0, gs.indexOf(d.group)) })), 6);
  const minX = Math.min(...pts.map(p => p.x - p.cr)), maxX = Math.max(...pts.map(p => p.x + p.cr)), minY = Math.min(...pts.map(p => p.y - p.cr)), maxY = Math.max(...pts.map(p => p.y + p.cr));
  const tv = pts.reduce((a, p) => a + p.v, 0) || 1, cx = pts.reduce((a, p) => a + p.x * p.v, 0) / tv, cy = pts.reduce((a, p) => a + p.y * p.v, 0) / tv;
  const k = Math.min((W - P * 2) / (maxX - minX), (H - P * 2) / (maxY - minY)), ox = W / 2 - (minX + maxX) / 2 * k, oy = H / 2 - (minY + maxY) / 2 * k;
  let g = "";
  pts.forEach(p => {
    const x = ox + p.x * k, y = oy + p.y * k, r = p.r * k, lab = p.d ? esc(p.d) : fmt(p.v), tc = p.g === 0 ? "#fff" : "#1f2937";
    g += `<g><title>${esc(p.n)}: ${lab}</title><circle cx="${x}" cy="${y}" r="${r}" style="fill:${p.g === 0 ? "var(--a1)" : "var(--a2)"}"/>`;
    if (r >= 34) {
      const fs = Math.max(11, Math.min(16, r / 4.2));
      g += `<text x="${x}" y="${y - fs * 0.15}" text-anchor="middle" fill="${tc}" font-size="${fs * 1.9}" font-weight="700">${lab}</text><text x="${x}" y="${y + fs * 1.25}" text-anchor="middle" fill="${tc}" fill-opacity=".9" font-size="${fs * 0.8}" font-weight="500">${esc(p.n)}</text>`;
    } else {
      const dx = p.x - cx, dy = p.y - cy, Ln = Math.hypot(dx, dy) || 1, ux = dx / Ln, uy = dy / Ln, lx = x + ux * (r + 18), ly = y + uy * (r + 18), an = ux >= 0 ? "start" : "end";
      g += `<line x1="${x + ux * r}" y1="${y + uy * r}" x2="${x + ux * (r + 12)}" y2="${y + uy * (r + 12)}" style="stroke:var(--sub)"/><text x="${lx}" y="${ly - 2}" text-anchor="${an}" style="fill:var(--title)" font-size="13" font-weight="700">${lab}</text><text x="${lx}" y="${ly + 13}" text-anchor="${an}" style="fill:var(--sub)" font-size="11">${esc(p.n)}</text>`;
    }
    g += "</g>";
  });
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:340px">${g}</svg>${legend(gs.length ? gs : null)}`;
}
function ringSvg(b) {
  const pct = Math.max(0, Math.min(1, (+b.value || 0) / (+b.max || 1))), r = 80, c = 2 * Math.PI * r;
  return `<div class="ring"><svg viewBox="0 0 200 200" width="180" height="180"><circle cx="100" cy="100" r="${r}" fill="none" style="stroke:var(--soft)" stroke-width="14"/><circle cx="100" cy="100" r="${r}" fill="none" style="stroke:var(--a1)" stroke-width="14" stroke-linecap="round" stroke-dasharray="${c * pct} ${c}" transform="rotate(-90 100 100)"/><text x="100" y="106" text-anchor="middle" class="rv">${b.display ? esc(b.display) : Math.round(pct * 100) + "%"}</text><text x="100" y="130" text-anchor="middle" class="rl">${esc(b.label || "")}</text></svg>${b.note ? `<p class="rn">${esc(b.note)}</p>` : ""}</div>`;
}
function pieSvg(b) {
  const tot = b.data.reduce((a, d) => a + (+d.value || 0), 0) || 1, r = 70, c = 2 * Math.PI * r; let off = 0, g = "";
  b.data.forEach((d, i) => { const l = (+d.value || 0) / tot * c; g += `<circle cx="100" cy="100" r="${r}" fill="none" style="stroke:${col(i)}" stroke-width="26" stroke-dasharray="${Math.max(0, l - 3)} ${c}" stroke-dashoffset="${-off}" transform="rotate(-90 100 100)"><title>${esc(d.name)}: ${fmt(d.value)}</title></circle>`; off += l; });
  return `<div class="ring"><svg viewBox="0 0 200 200" width="190" height="190">${g}</svg></div><div class="lg" style="justify-content:center">${b.data.map((d, i) => `<span><i style="background:${col(i)}"></i>${esc(d.name)}: <b style="color:var(--title)">${fmt(d.value)}${d.perc ? " (" + esc(d.perc) + ")" : ""}</b></span>`).join("")}</div>`;
}
function tableHtml(head, rows, total, hl) {
  hl = hl || [];
  const wide = head.map((h, i) => rows.some(r => typeof r[i] === "string" && r[i].length > 40));
  const isNum = c => c == null || typeof c === "number" || /^(€\s?)?[-+]?[\d.,]+\s?(%|pt)?$|^(n\.d\.|ND|-)$/i.test(String(c).trim());
  const numc = head.map((h, i) => rows.every(r => isNum(r[i])));
  const al = i => wide[i] ? ' class="w"' : i > 0 && numc[i] ? ' class="r"' : "";
  return `<div class="tw"><table><thead><tr>${head.map((h, i) => `<th${al(i)}>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map((r, ri) => `<tr${hl.includes(ri) ? ' class="hl"' : ""}>${r.map((c, i) => `<td${al(i)}>${i === 0 ? '<i class="dot"></i>' : ""}${fmt(c)}</td>`).join("")}</tr>`).join("")}${total ? `<tr class="tot">${total.map((c, i) => `<td${al(i)}>${fmt(c)}</td>`).join("")}</tr>` : ""}</tbody></table></div>`;
}
const card = (b, inner, action, a) => `<div class="card"${a}>${b.title || action ? `<div class="ch"><div><div class="ct">${esc(b.title || "")}</div>${b.subtitle ? `<div class="cs">${esc(b.subtitle)}</div>` : ""}</div>${action || ""}</div>` : ""}${inner}${b.note ? `<p class="cn">${esc(b.note)}</p>` : ""}</div>`;
const kpi = k => `<div class="kpi${k.highlight ? " hl" : ""}"${acc(k.accent)}><span class="kl">${esc(k.label)}</span><div class="kvw"><span class="kv">${esc(k.value)}${k.suffix ? `<small>${esc(k.suffix)}</small>` : ""}</span></div>${k.delta ? `<span class="kd${k.good === true ? " ok" : k.good === false ? " ko" : ""}">${k.trend === "up" ? "↑ " : k.trend === "down" ? "↓ " : ""}${esc(k.delta)}</span>` : ""}${k.note ? `<span class="kn">${esc(k.note)}</span>` : ""}</div>`;
const switcher = (id, v) => `<div class="sw3">${[["colonne", "Colonne"], ["barre", "Barre"], ["linea", "Linea"]].map(([k, l]) => `<button data-sw="${id}" data-v="${k}" class="${v === k ? "on" : ""}">${l}</button>`).join("")}</div>`;

function block(b0, id) {
  const bad = check(b0);
  if (bad) return errBox(id, bad);
  try { return block0(b0, id); } catch (e) { return errBox(id, "errore di disegno: " + e.message); }
}
function block0(b0, id) {
  const b = norm(b0), a = acc(b.accent);
  switch (b.type) {
    case "kpi": return `<div class="kpis" style="--n:${b.items.length}">${b.items.map(kpi).join("")}</div>`;
    case "heading": return `<h2 class="hd"${a}>${esc(b.text)}</h2>`;
    case "table":
      REG.push({ id, b });
      return card(b, tableHtml(b.head, b.full ? b.rows : b.rows.slice(0, 6), b.total, b.hl) + (!b.full && b.rows.length > 6 ? `<p class="more">Mostrate 6 su ${b.rows.length} voci. Elenco completo in Apri tabella.</p>` : ""), `<button class="btn" data-open="${id}">Apri tabella</button>`, a);
    case "colonne": case "barre": case "linea":
      REG.push({ id, b });
      return card(b, `<div data-c="${id}"></div>`, switcher(id, S.views[id] || b.type), a);
    case "bolle": case "anello": case "torta":
      REG.push({ id, b });
      return card(b, `<div data-c="${id}"></div>`, "", a);
    case "segmenti": {
      const mi = b.data.reduce((m, d, i) => parseFloat(d.perc) > parseFloat(b.data[m].perc) ? i : m, 0);
      return card(b, `<div class="seg">${b.data.map((d, i) => `<i style="width:${parseFloat(d.perc) || 0}%;background:${col(i === mi ? 0 : 1)};" title="${esc(d.name)}: ${esc(d.perc)}"></i>`).join("")}</div><div class="chips" style="--n:${b.data.length}">${b.data.map((d, i) => `<div class="chip${i === mi ? " on" : ""}">${esc(d.name)} · <b>${esc(d.perc)}</b>${d.value != null ? ` <em>(${fmt(d.value)})</em>` : ""}</div>`).join("")}</div>`, "", a);
    }
    case "evidenza": {
      const max = Math.max(...b.rows.map(r => +r.value || 0)) || 1;
      return `<div class="card dark"${a}>${b.title ? `<div class="ch"><div class="ct">${esc(b.title)}</div></div>` : ""}<div class="hb">${b.rows.map(r => `<div class="hr"><span class="hn">${esc(r.name)}</span><div class="hbs"><div class="ht"><div class="hf" style="width:${Math.max(1.5, (+r.value || 0) / max * 100)}%;background:var(--a1)"></div></div></div><span class="hv">${r.display ? esc(r.display) : fmt(r.value)}</span></div>`).join("")}</div></div>`;
    }
    case "lista":
      return card(b, "<div>" + b.rows.map(r => `<div class="li"><div class="lt"><i class="dot"${acc(r.accent)}></i><b>${esc(r.label)}</b>${r.detail ? `<small>${esc(r.detail)}</small>` : ""}</div>${r.value != null ? `<span class="lv">${fmt(r.value)}</span>` : ""}</div>`).join("") + "</div>", "", a);
    case "insight": return `<div class="ins"${a}><span class="il">${esc(b.label || "Text Mining Insights")}</span>${b.quote ? `<blockquote>“${esc(b.quote)}”</blockquote>` : ""}${b.text ? `<p>${esc(b.text)}</p>` : ""}</div>`;
    case "text": return card(b, `<p class="tx">${esc(b.text)}</p>`, "", a);
    case "avviso": return `<div class="warn"${a}>${I.warn}<span>${esc(b.text)}</span></div>`;
    case "cols": return `<div class="cols" style="--n:${b.blocks.length}">${b.blocks.map((x, i) => block(x, id + "-" + i)).join("")}</div>`;
    default: return "";
  }
}

function draw() {
  REG.forEach(({ id, b }) => {
    const el = document.querySelector(`[data-c="${id}"]`); if (!el) return;
    const t = S.views[id] || b.type, W = Math.max(220, el.clientWidth);
    try { el.innerHTML = t === "colonne" ? colSvg(b, W) : t === "linea" ? lineSvg(b, W, id) : t === "barre" ? barHtml(b) : t === "bolle" ? bubbleSvg(b) : t === "anello" ? ringSvg(b) : t === "torta" ? pieSvg(b) : ""; }
    catch (e) { el.innerHTML = `<div class="err"><b>Grafico non disegnabile</b><span>${esc(e.message)}</span></div>`; }
  });
  document.querySelectorAll(".kvw").forEach(w => {
    const s = w.firstElementChild; let f = 40; s.style.fontSize = f + "px";
    while (s.scrollWidth > w.clientWidth && f > 14) { f--; s.style.fontSize = f + "px"; }
  });
}
function page() {
  const t = DB.tabs[S.tab], m = $("#main"); REG = [];
  if (!Array.isArray(t.blocks)) { m.innerHTML = `<div class="page">${errBox("cap" + S.tab, "il capitolo non ha l'elenco \"blocks\"")}</div>`; return; }
  m.innerHTML = `<div class="page"><header class="phd"><span class="cap">Capitolo ${pad(S.tab + 1)}</span><h1>${esc(t.title)}</h1>${t.subtitle ? `<p>${esc(t.subtitle)}</p>` : ""}</header>${t.blocks.map((b, i) => block(b, S.tab + "-" + i)).join("")}</div>`;
  if (S.last !== S.tab) { m.scrollTop = 0; S.last = S.tab; }
  draw(); prog();
}
function prog() {
  const m = $("#main"), max = m.scrollHeight - m.clientHeight;
  $("#pf").style.width = (S.view !== "app" ? 0 : max <= 2 ? 100 : Math.min(100, m.scrollTop / max * 100)) + "%";
}
function modal() {
  const m = $("#modal"), b = S.modal;
  m.innerHTML = b ? `<div class="ov" data-close="1"><div class="mp"><div class="mh"><div><span class="mk">Trascrizione integrale</span><h3>${esc(b.title || "Tabella")}</h3></div><button class="mx" data-close="1">${I.x}</button></div><div class="mb">${tableHtml(b.head, b.rows, b.total, b.hl)}</div><div class="mf"><button class="btn" data-close="1">Chiudi</button></div></div></div>` : "";
}
function update() {
  const D = DB, n = D.tabs.length, h = document.documentElement;
  h.dataset.theme = S.light ? "light" : "dark";
  $("#shell").className = `shell v-${S.view}${S.collapsed ? " collapsed" : ""}`;
  $("#nav").innerHTML = D.tabs.map((t, i) => `<button class="nb${i === S.tab ? " on" : ""}" data-i="${i}" title="${esc(t.label)}"><span class="nn">${pad(i + 1)}</span><span class="nt">${esc(t.label)}</span></button>`).join("");
  $("#pn").textContent = `${pad(S.tab + 1)} / ${pad(n)}`;
  $("#ml").textContent = S.light ? "Proiettore" : "Modalità PC";
  $("#knob").innerHTML = S.light ? I.proj : I.pc;
  if (S.view === "app") page();
  modal();
}
function init() {
  const D = DB, h = document.documentElement;
  document.title = ("dashboard_fratelli_giacomel_" + (D.period || "")).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  h.dataset.engine = "dashboard-giacomel@" + ENGINE.version;
  h.dataset.author = ENGINE.author;
  h.dataset.brand = D.brand === "blu" ? "blu" : "grafite";
  h.dataset.accent = D.accent === "blu" ? "blu" : "arancio";
  const per = D.period ? esc(D.period) : "";
  $("#app").innerHTML = `<div class="shell v-home" id="shell"><aside id="sb">
    <div class="splash"><div class="splash-in">${logo(true)}<div class="line"></div>
      <div class="home-only">${per ? `<p class="sp1">${per}</p>` : ""}<p class="sp2">${pad(D.tabs.length)} capitoli</p>${ERR.length ? `<p class="errpill">⚠ ${ERR.length} ${ERR.length === 1 ? "problema" : "problemi"} nei dati: i blocchi coinvolti sono segnati in rosso</p>` : ""}<button class="start" id="bStart">Avvia <span>${I.arrow}</span></button></div>
      <div class="end-only"><h2 class="thanks">${esc(D.thanks || "GRAZIE PER L'ATTENZIONE")}</h2>${per ? `<p class="sp2">${per}</p>` : ""}</div></div>
      <button class="restart end-only" id="bRestart">${I.home}<span>Ricomincia</span></button><p class="corp home-only">Fratelli Giacomel S.p.A.</p></div>
    <div class="menu"><div class="mtop"><button class="colbtn" id="bCol" title="Chiudi / apri barra laterale">${I.panel}</button></div>
      <div class="mlogo">${logo(false)}</div><nav id="nav"></nav>
      <div class="mbot"><div class="prog"><div class="ph"><span class="pl">Avanzamento</span><span id="pn" class="num"></span></div><div class="pt"><div class="pf" id="pf"></div></div></div>
        <div class="mode"><span class="ml" id="ml"></span><button class="sw" id="bMode" title="Modalità PC / Proiettore">${I.pc}${I.proj}<span class="knob" id="knob"></span></button></div>
        ${per ? `<p class="mper">${per}</p>` : ""}<p class="mcorp">Fratelli Giacomel S.p.A.</p><div class="mend"><button class="enddot" id="bEnd" title="Termina">${I.x}<span>Termina</span></button></div></div></div>
  </aside><main id="main"></main></div><div id="modal"></div>`;
  $("#app").appendChild(document.createComment(" " + ENGINE.signature + " "));
  document.addEventListener("click", e => {
    const t = e.target.closest("button,[data-close]"); if (!t) return;
    if (t.id === "bStart") S.view = "app";
    else if (t.id === "bEnd") { S.view = "end"; S.modal = null; }
    else if (t.id === "bRestart") { S.view = "home"; S.tab = 0; }
    else if (t.id === "bCol") S.collapsed = !S.collapsed;
    else if (t.id === "bMode") S.light = !S.light;
    else if (t.dataset.i != null) S.tab = +t.dataset.i;
    else if (t.dataset.sw) S.views[t.dataset.sw] = t.dataset.v;
    else if (t.dataset.open) S.modal = (REG.find(r => r.id === t.dataset.open) || {}).b || null;
    else if (t.dataset.close && (e.target === t || t.tagName === "BUTTON")) S.modal = null;
    else return;
    update();
  });
  document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.altKey && (e.code === "KeyA" || e.key === "a" || e.key === "A")) { e.preventDefault(); sign(); return; }
    if (e.key === "Escape" && $("#sig")) { $("#sig").remove(); return; }
    if (e.key === "Escape" && S.modal) { S.modal = null; modal(); return; }
    if (S.view !== "app" || S.modal) return;
    if ((e.key === "ArrowRight" || e.key === "PageDown") && S.tab < DB.tabs.length - 1) { S.tab++; update(); }
    if ((e.key === "ArrowLeft" || e.key === "PageUp") && S.tab > 0) { S.tab--; update(); }
  });
  $("#main").addEventListener("scroll", prog, { passive: true });
  let tm; if (window.ResizeObserver) new ResizeObserver(() => { clearTimeout(tm); tm = setTimeout(() => { if (S.view === "app") { draw(); prog(); } }, 120); }).observe($("#main"));
  update();
}


const TYPES = ["kpi","heading","table","colonne","barre","linea","bars","progress","bolle","anello","segmenti","evidenza","lista","torta","donut","insight","text","avviso","cols"];
const ERR = [];
const isArr = Array.isArray, num = v => typeof v === "number" && isFinite(v);
function check(b) {
  if (!b || typeof b !== "object") return "blocco vuoto o non valido";
  if (!TYPES.includes(b.type)) return `tipo di blocco sconosciuto: "${b.type}"`;
  const need = (c, m) => c ? "" : m;
  switch (b.type) {
    case "kpi": return need(isArr(b.items) && b.items.length && b.items.every(k => k && k.label != null && k.value != null), "kpi: serve \"items\" con label e value per ogni card");
    case "heading": case "avviso": case "text": return need(b.text != null && b.text !== "", `${b.type}: manca "text"`);
    case "table": {
      if (!isArr(b.head) || !isArr(b.rows)) return "tabella: servono \"head\" e \"rows\"";
      const i = b.rows.findIndex(r => !isArr(r) || r.length !== b.head.length);
      if (i >= 0) return `tabella "${b.title || ""}": la riga ${i + 1} ha ${isArr(b.rows[i]) ? b.rows[i].length : 0} celle, le colonne sono ${b.head.length}`;
      if (b.total && (!isArr(b.total) || b.total.length !== b.head.length)) return `tabella "${b.title || ""}": la riga totale ha ${isArr(b.total) ? b.total.length : 0} celle, le colonne sono ${b.head.length}`;
      return "";
    }
    case "colonne": case "barre": case "linea": case "bars": {
      if (!isArr(b.data) || !b.data.length) return `grafico "${b.title || ""}": "data" vuoto`;
      if (b.series) {
        if (!isArr(b.series) || !b.series.length) return `grafico "${b.title || ""}": "series" non valido`;
        const d = b.data.find(d => d.name == null || b.series.some(s => !num(d[s])));
        return d ? `grafico "${b.title || ""}": la voce "${d.name}" deve avere un numero per ${b.series.join(", ")}` : "";
      }
      const d = b.data.find(d => (d.name == null && d.label == null) || !num(d.value));
      return d ? `grafico "${b.title || ""}": la voce "${d.name != null ? d.name : d.label}" deve avere "value" numerico (senza virgolette)` : "";
    }
    case "progress": return need(isArr(b.rows) && b.rows.every(r => num(r.value)), "progress: serve \"rows\" con value numerico");
    case "bolle": return need(isArr(b.data) && b.data.length && b.data.every(d => num(d.value)), `bolle "${b.title || ""}": serve "data" con value numerico`);
    case "anello": return need(num(b.value) && num(b.max), `anello "${b.title || ""}": "value" e "max" devono essere numeri`);
    case "segmenti": return need(isArr(b.data) && b.data.length && b.data.every(d => d.perc != null), `segmenti "${b.title || ""}": serve "perc" per ogni voce`);
    case "evidenza": return need(isArr(b.rows) && b.rows.length && b.rows.every(r => num(r.value)), `evidenza "${b.title || ""}": serve "rows" con value numerico`);
    case "lista": return need(isArr(b.rows) && b.rows.every(r => r && r.label != null), `lista "${b.title || ""}": serve "rows" con label`);
    case "torta": case "donut": return need(isArr(b.data) && b.data.length && b.data.every(d => num(d.value)), `torta "${b.title || ""}": serve "data" con value numerico`);
    case "insight": return need(b.quote || b.text, "insight: serve \"quote\" o \"text\"");
    case "cols": return need(isArr(b.blocks) && b.blocks.length >= 1 && b.blocks.length <= 3, "cols: servono da 1 a 3 blocchi in \"blocks\"");
  }
  return "";
}
function where(id) { const p = String(id).split("-"); return `Capitolo ${+p[0] + 1}, blocco ${+p[1] + 1}${p[2] != null ? "." + (+p[2] + 1) : ""}`; }
function errBox(id, msg) { return `<div class="err"><b>Dato da correggere · ${esc(String(id).startsWith("cap") ? "Capitolo " + (+String(id).slice(3) + 1) : where(id))}</b><span>${esc(msg)}</span></div>`; }
function scan() {
  (DB.tabs || []).forEach((t, ti) => {
    if (!t || !isArr(t.blocks)) { ERR.push(`Capitolo ${ti + 1}: manca "blocks"`); return; }
    t.blocks.forEach((b, bi) => {
      const e = check(b); if (e) ERR.push(`${where(ti + "-" + bi)}: ${e}`);
      else if (b.type === "cols") b.blocks.forEach((x, xi) => { const e2 = check(x); if (e2) ERR.push(`${where(ti + "-" + bi + "-" + xi)}: ${e2}`); });
    });
  });
  if (ERR.length && window.console) console.warn("[Dashboard Giacomel] Dati da correggere:\n- " + ERR.join("\n- "));
}
function sign() {
  if ($("#sig")) { $("#sig").remove(); return; }
  const g = DB && (DB.generatore || DB.generator) ? esc(DB.generatore || DB.generator) : "non indicato";
  const d = document.createElement("div"); d.id = "sig";
  d.innerHTML = `<div><h4>Dashboard Giacomel</h4><span>Engine</span> v${ENGINE.version} · ${ENGINE.build}<br><span>Developed by</span> ${ENGINE.author}<br><span>Data generated with</span> ${g}<br><span>Period</span> ${esc(DB.period || "-")}<p class="k">Esc / Ctrl+Alt+A per chiudere</p></div>`;
  d.addEventListener("click", () => d.remove());
  document.body.appendChild(d);
}
function fatal(msg) {
  const box = document.getElementById("app") || document.body.appendChild(Object.assign(document.createElement("div"), { id: "app" }));
  box.removeAttribute("style");
  if (!document.getElementById("dg-style")) { const st = document.createElement("style"); st.id = "dg-style"; st.textContent = CSS; (document.head || document.documentElement).appendChild(st); }
  box.innerHTML = `<div class="fatal"><div class="err"><b>Dashboard non disponibile</b><span>${esc(msg)}</span><code>${esc(ENGINE.signature)}</code></div></div>`;
}

function boot() {
  if (DB) return;
  let d = null;
  try { d = DASHBOARD; } catch (e) { d = window.DASHBOARD || null; }
  if (!d) { if (document.readyState !== "complete") return; fatal("Nessun oggetto DASHBOARD trovato nella pagina. L'HTML deve contenere: const DASHBOARD = {...} prima del motore."); return; }
  DB = d;
  const head = document.head || document.documentElement;
  if (!document.querySelector('link[href*="family=Poppins"]')) { const l = document.createElement("link"); l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"; head.appendChild(l); }
  const st = document.createElement("style"); st.id = "dg-style"; st.textContent = CSS; head.appendChild(st);
  [["author", ENGINE.author], ["generator", ENGINE.signature]].forEach(([n, c]) => { const m = document.createElement("meta"); m.name = n; m.content = c; head.appendChild(m); });
  const app = document.getElementById("app") || document.body.appendChild(Object.assign(document.createElement("div"), { id: "app" }));
  app.removeAttribute("style"); app.textContent = "";
  if (!isArr(DB.tabs) || !DB.tabs.length) { fatal("L'oggetto DASHBOARD non contiene capitoli (\"tabs\" vuoto o mancante)."); return; }
  scan();
  if (window.console) console.info("%c" + ENGINE.signature, "color:#fd8534;font-weight:600");
  init();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
window.addEventListener("load", boot);
})();
