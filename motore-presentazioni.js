/*!
 * Presentazioni Giacomel – motore grafico
 * Version 1.0.0 · build 2026-11-12 (basato sul motore Dashboard Giacomel 1.2.0)
 * Developed by Andrea Carminati. All rights reserved.
 * Questo file disegna le presentazioni: l'HTML generato contiene solo l'oggetto PRESENTAZIONE con i contenuti.
 */
(function () {
"use strict";
const ENGINE = { name: "Presentazioni Giacomel", version: "1.0.0", build: "2026-11-12", author: "Andrea Carminati" };
ENGINE.signature = `${ENGINE.name} engine v${ENGINE.version} (${ENGINE.build}) – Developed by ${ENGINE.author}`;
if (window.PresentazioniGiacomel) return;
window.PresentazioniGiacomel = Object.freeze(Object.assign({}, ENGINE));
const CSS = "*{box-sizing:border-box;margin:0;padding:0}\nhtml,body,#app{width:100%;height:100%;overflow:hidden}\nbody{font-family:'Poppins',system-ui,sans-serif;-webkit-font-smoothing:antialiased;background:var(--bg)}\nbutton{font:inherit;border:0;background:none;cursor:pointer;color:inherit}\n:root{--a1:#fd8534;--a2:#fdba8c;--ok:#10b981;--ko:#ef4444}\nhtml[data-accent=blu]{--a1:#3b82f6;--a2:#93c5fd}\nhtml[data-theme=dark]{--bg:#24282f;--card:#2e333b;--border:#3a4049;--title:#fff;--sub:#a7adb7;--grid:#3a4049;--soft:#373d46}\nhtml[data-theme=light]{--bg:#f4f5f8;--card:#fff;--border:#e8eaef;--title:#111827;--sub:#6b7280;--grid:#eef0f3;--soft:#f3f4f6}\nhtml[data-brand=grafite]{--sb:#1c1f24;--sbact:#244582;--glow:#2c3038}\nhtml[data-brand=blu]{--sb:#244582;--sbact:#3b82f6;--glow:#2f5aa8}\n.num{font-variant-numeric:tabular-nums}\n.shell{display:flex;width:100%;height:100%;background:var(--bg);transition:background .3s}\n#sb{position:relative;flex-shrink:0;width:240px;height:100%;background:var(--sb);color:#fff;border-radius:0 28px 28px 0;overflow:hidden;z-index:5;box-shadow:4px 0 30px rgba(0,0,0,.18);transition:width .9s cubic-bezier(.22,1,.36,1),border-radius .9s}\n.v-home #sb,.v-end #sb{width:100%;border-radius:0}\n.v-app.collapsed #sb{width:76px}\n.splash{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .4s;background:radial-gradient(60% 50% at 50% 45%,var(--glow),transparent 70%)}\n.v-home .splash,.v-end .splash{opacity:1;pointer-events:auto;transition:opacity .7s .35s}\n.splash-in{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 24px}\n.v-home .end-only,.v-end .home-only,.v-app .end-only,.v-app .home-only{display:none}\n.logo img{display:block;width:150px;filter:brightness(0) invert(1)}\n.logo.big img{width:min(70vw,260px)}\n.logo-txt{display:none;font-weight:600;font-size:18px;letter-spacing:-.01em;color:#fff}\n.logo.big .logo-txt{font-size:42px}\n.line{width:40px;height:2px;border-radius:2px;background:var(--a1);margin:32px 0}\n.sp1{font-size:14px;letter-spacing:.3em;text-transform:uppercase;color:rgba(255,255,255,.65)}\n.sp2{font-size:12px;letter-spacing:.2em;color:rgba(255,255,255,.4);margin-top:8px}\n.start{margin-top:48px;display:inline-flex;align-items:center;gap:14px;padding:11px 12px 11px 30px;border-radius:999px;background:#fff;color:var(--sb);font-weight:600;font-size:15px;box-shadow:0 10px 30px rgba(0,0,0,.25);transition:transform .25s}\n.start:hover{background:#f3f4f6}.start span{transition:transform .25s}.start:hover span{transform:translateX(3px)}\n.start span{width:30px;height:30px;border-radius:50%;background:var(--a1);color:#fff;display:flex;align-items:center;justify-content:center}\n.thanks{font-weight:200;font-size:clamp(26px,4vw,52px);letter-spacing:.25em;color:#fff;animation:pulse 3s ease-in-out infinite}\n@keyframes pulse{50%{opacity:.55}}\n.restart{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;color:rgba(255,255,255,.45);font-size:10px;letter-spacing:.3em;text-transform:uppercase;transition:color .3s}\n.restart:hover{color:#fff}\n.corp{position:absolute;bottom:40px;right:40px;font-size:10px;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.3)}\n.menu{position:absolute;inset:0;display:flex;flex-direction:column;padding:20px 16px;opacity:0;pointer-events:none;transition:opacity .3s}\n.v-app .menu{opacity:1;pointer-events:auto;transition:opacity .6s .5s}\n.mtop{display:flex;justify-content:flex-start;margin:-6px 0 14px -6px}\n.collapsed .mtop{justify-content:center;margin:-6px 0 20px}\n.mend{display:flex;justify-content:flex-start}\n.collapsed .mend{padding-left:8px}\n.v-app.collapsed #sb{overflow:visible}\n.enddot{position:relative;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.07);transition:background .25s}\n.enddot svg{width:10px;height:10px;stroke:#ef4444}\n.enddot span{position:absolute;left:38px;top:50%;transform:translate(-4px,-50%);font-size:12px;font-weight:300;letter-spacing:.06em;white-space:nowrap;color:#fff;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s}\n.collapsed .enddot span{left:62px;color:var(--title)}\n.enddot:hover{background:rgba(255,255,255,.14)}\n.enddot:hover span{opacity:1;transform:translate(0,-50%)}\n.colbtn{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.55);transition:background .2s,color .2s}\n.colbtn:hover{background:rgba(255,255,255,.1);color:#fff}\n.mlogo{display:flex;justify-content:center;margin-bottom:30px}\n.collapsed .mlogo{display:none}\nnav{display:flex;flex-direction:column;gap:8px}\n.nb{display:flex;align-items:center;width:100%;text-align:left;padding:12px 16px;border-radius:12px;font-size:12px;font-weight:500;color:rgba(255,255,255,.75);transition:background .2s,color .2s}\n.nb:hover{background:rgba(255,255,255,.08);color:#fff}\n.nb.on{background:var(--sbact);color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.18)}\n.nn{display:none}\n.collapsed .nb{justify-content:center;padding:12px 0}\n.collapsed .nn{display:block;font-weight:600}\n.collapsed .nt{display:none}\n.mbot{margin-top:auto;display:flex;flex-direction:column;gap:16px}\n.prog .ph{display:flex;justify-content:space-between;font-size:10px;color:rgba(255,255,255,.6);margin-bottom:6px}\n.pt{height:3px;border-radius:3px;background:rgba(255,255,255,.14);overflow:hidden}\n.pf{height:100%;border-radius:3px;background:rgba(255,255,255,.75);transition:width .12s linear}\n.collapsed .pl{display:none}\n.collapsed .prog .ph{justify-content:center}\n.mode{display:flex;align-items:center;justify-content:space-between;padding-top:16px;border-top:1px solid rgba(255,255,255,.1)}\n.ml{font-size:10px;color:rgba(255,255,255,.7)}\n.collapsed .mode{justify-content:center}\n.collapsed .ml{display:none}\n.sw{position:relative;flex-shrink:0;width:56px;height:28px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:space-between;padding:0 7px;color:rgba(255,255,255,.55);transition:background .25s}\nhtml[data-theme=light] .sw{background:#3b82f6;border-color:#3b82f6}\n.sw svg{width:12px;height:12px}\n.knob{position:absolute;top:1px;left:2px;width:24px;height:24px;border-radius:50%;background:#fff;color:var(--sb);box-shadow:0 1px 3px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;transition:left .25s}\nhtml[data-theme=light] .knob{left:28px;color:#3b82f6}\n.mper{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.45);text-align:center}\n.mcorp{font-size:9px;color:rgba(255,255,255,.3);text-align:center;margin-top:-10px}\n.enddot{position:relative;z-index:30;flex-shrink:0}\n.collapsed .mper,.collapsed .mcorp{display:none}\n#main{flex:1;min-width:0;height:100%;overflow-y:auto;overflow-x:hidden;padding:40px;opacity:1;transition:opacity .5s .5s}\n.v-home #main,.v-end #main{opacity:0;padding:0;overflow:hidden;transition:none}\n.page{display:flex;flex-direction:column;gap:24px;padding-bottom:48px}\n.cap{font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--a1)}\n.phd h1{font-size:30px;font-weight:700;line-height:1.2;margin-top:4px;color:var(--title)}\n.phd p{font-size:14px;font-weight:300;color:var(--sub);margin-top:4px}\n.hd{font-size:22px;font-weight:700;color:var(--a1);margin-top:12px}\n.card{min-width:0;padding:24px;border-radius:18px;background:var(--card);border:1px solid var(--border);color:var(--title);transition:background .3s}\n.card.dark{background:#16181c;border-color:color-mix(in srgb,var(--a1) 30%,transparent);color:#fff}\n.ch{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:18px}\n.ct{font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--sub)}\n.card.dark .ct{color:var(--a1)}\n.cs{font-size:12px;font-weight:300;color:var(--sub);margin-top:2px}\n.kpis{display:grid;gap:20px;grid-template-columns:repeat(var(--n),minmax(0,1fr))}\n.cols{display:grid;gap:24px;grid-template-columns:repeat(var(--n),minmax(0,1fr))}\n@media(max-width:1000px){.kpis{grid-template-columns:repeat(2,minmax(0,1fr))}.cols{grid-template-columns:1fr}}\n.kpi{min-width:0;padding:20px 22px;border-radius:18px;background:var(--card);border:1px solid var(--border)}\n.kpi.hl{background:color-mix(in srgb,var(--a1) 9%,var(--card));border-color:color-mix(in srgb,var(--a1) 45%,transparent)}\n.kl{display:flex;align-items:center;gap:8px;font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--sub)}\n.kl::before{content:'';flex-shrink:0;width:6px;height:6px;border-radius:50%;background:var(--a1)}\n.kpi.hl .kl{color:var(--a1)}\n.kvw{margin-top:10px;overflow:hidden}\n.kv{display:inline-block;white-space:nowrap;font-size:40px;font-weight:700;line-height:1.15;color:var(--title)}\n.kv small{font-size:.5em;font-weight:600;color:var(--a1);margin-left:8px}\n.kd{display:block;font-size:12px;font-weight:600;margin-top:4px;color:var(--sub)}\n.kd.ok{color:var(--ok)}.kd.ko{color:var(--ko)}\n.kn{display:block;font-size:11px;font-weight:300;color:var(--sub);margin-top:4px}\n.btn{padding:6px 12px;border-radius:8px;background:var(--soft);color:var(--title);font-size:11px;font-weight:600;white-space:nowrap;transition:background .2s}\n.btn:hover{background:var(--border)}\n.sw3{flex-shrink:0;display:flex;gap:2px;padding:2px;border-radius:9px;background:var(--soft)}\n.sw3 button{padding:4px 9px;border-radius:7px;font-size:10px;font-weight:500;color:var(--sub)}\n.sw3 button.on{background:var(--card);color:var(--title);box-shadow:0 1px 3px rgba(0,0,0,.15)}\n.tw{overflow-x:auto}\ntable{width:100%;border-collapse:collapse;font-size:13px}\nth{padding:12px 14px;text-align:left;white-space:nowrap;background:var(--soft);color:var(--sub);font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase}\nth:first-child{border-radius:10px 0 0 10px}th:last-child{border-radius:0 10px 10px 0}\ntd{padding:12px 14px;text-align:left;border-bottom:1px solid var(--border);color:var(--title);font-weight:300}\ntd:first-child{white-space:nowrap}\nth.r,td.r{text-align:right}\ntd.r{font-weight:500;white-space:nowrap;font-variant-numeric:tabular-nums}\nth.w,td.w{min-width:20rem}\ntr.hl td{color:var(--a1);font-weight:700}\ntr.tot td{font-weight:700;border-bottom:0;background:var(--soft)}\n.dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--a1);margin-right:10px;vertical-align:middle}\n.more{font-size:11px;font-weight:300;color:var(--sub);text-align:right;margin-top:10px}\nsvg text{font-family:inherit}\n.ax{font-size:11px;fill:var(--sub)}\n.vl{font-size:11px;font-weight:600;fill:var(--title)}\n.lg{display:flex;flex-wrap:wrap;gap:16px;font-size:11px;color:var(--sub);margin-top:12px}\n.lg i{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:6px;vertical-align:middle}\n.hb{display:flex;flex-direction:column;gap:14px}\n.hr{display:flex;align-items:center;gap:16px;font-size:13px}\n.hn{width:130px;flex-shrink:0;font-weight:500}\n.hbs{flex:1;display:flex;flex-direction:column;gap:4px}\n.ht{height:10px;border-radius:99px;background:var(--soft)}\n.card.dark .ht{background:rgba(255,255,255,.1)}\n.hf{height:100%;border-radius:99px}\n.hv{min-width:70px;text-align:right;font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums}\n.seg{display:flex;gap:4px;height:12px;border-radius:99px;overflow:hidden;margin-bottom:18px}\n.chips{display:grid;gap:12px;grid-template-columns:repeat(var(--n),minmax(0,1fr))}\n.chip{padding:12px 16px;border-radius:12px;background:var(--soft);font-size:13px;border:1px solid transparent}\n.chip.on{background:color-mix(in srgb,var(--a1) 10%,var(--card));border-color:color-mix(in srgb,var(--a1) 55%,transparent);color:var(--a1)}\n.chip em{font-style:normal;font-size:11px;color:var(--sub)}\n.li{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--border);font-size:13px}\n.li:first-child{border-top:0}\n.lt{display:flex;align-items:center;gap:12px;min-width:0}\n.lt b{font-weight:500}\n.lt small{font-family:ui-monospace,Menlo,monospace;font-size:11px;color:var(--sub)}\n.lv{font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums}\n.ins{padding:16px 20px;border-radius:14px;background:var(--card);border:1px solid var(--border);border-left:3px solid var(--a1)}\n.il{display:block;margin-bottom:8px;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--a1)}\n.ins blockquote{margin-bottom:6px;font-size:14px;font-style:italic;font-weight:300;line-height:1.6;color:var(--title)}\n.ins p{font-size:14px;font-weight:300;line-height:1.6;color:var(--sub)}\n.tx{font-size:14px;font-weight:300;line-height:1.6}\n.warn{display:flex;align-items:center;gap:12px;padding:14px 20px;border-radius:14px;background:color-mix(in srgb,var(--a1) 14%,var(--card));border:1px solid color-mix(in srgb,var(--a1) 60%,transparent);color:var(--a1);font-size:14px;font-weight:600;line-height:1.4}\n.warn svg{flex-shrink:0;width:20px;height:20px}\n.ring{display:flex;flex-direction:column;align-items:center}\n.rv{font-size:30px;font-weight:700;fill:var(--title)}\n.rl{font-size:10px;letter-spacing:.15em;text-transform:uppercase;fill:var(--sub)}\n.rn{font-size:13px;color:var(--sub);margin-top:8px}\n.ov{position:fixed;inset:0;z-index:50;display:flex;padding:12px;background:rgba(0,0,0,.7)}\n.mp{flex:1;display:flex;flex-direction:column;overflow:hidden;border-radius:18px;background:var(--card);border-top:3px solid var(--a1)}\n.mh{display:flex;justify-content:space-between;align-items:center;padding:18px 24px;border-bottom:1px solid var(--border)}\n.mk{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--a1)}\n.mh h3{font-size:18px;font-weight:700;color:var(--title)}\n.mx{width:34px;height:34px;border-radius:50%;background:var(--soft);display:flex;align-items:center;justify-content:center;transition:background .2s}\n.mx svg{width:12px;height:12px;stroke:var(--title)}\n.mx:hover{background:#ef4444}.mx:hover svg{stroke:#fff}\n.mb{flex:1;min-height:0;overflow:auto;padding:24px}\n.mf{padding:14px 24px;text-align:right;border-top:1px solid var(--border)}\n::-webkit-scrollbar{width:7px;height:7px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#6b7280;border-radius:4px}\n\n.fr{display:flex;align-items:center;gap:16px;font-size:13px}\n.ftk{flex:1;position:relative;height:14px}\n.ftk i{position:absolute;top:0;bottom:0;left:0;border-radius:99px}\n.fb{background:color-mix(in srgb,var(--a2) 45%,transparent)}\n.fb.cut{background:repeating-linear-gradient(90deg,color-mix(in srgb,var(--a2) 45%,transparent) 0 84%,transparent 84% 86.5%,color-mix(in srgb,var(--a2) 45%,transparent) 86.5% 89%,transparent 89% 91.5%,color-mix(in srgb,var(--a2) 45%,transparent) 91.5%)}\n.fp{background:var(--a1)}\n.rkw{display:flex;flex-direction:column;align-items:center;text-align:center;gap:2px;padding:16px;border-radius:14px;margin-bottom:6px;background:color-mix(in srgb,var(--a1) 12%,var(--card));border:1px solid var(--a1)}\n.rkw svg{width:26px;height:26px;color:var(--a1);margin-bottom:4px}\n.rkn{font-size:28px;font-weight:700;line-height:1.2;color:var(--title)}\n.rkc{font-size:13px;font-weight:500;color:var(--a1)}\n.rkb{width:24px;height:24px;border-radius:50%;background:var(--soft);display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:var(--sub);flex-shrink:0}\n.rr{display:grid;grid-template-columns:24px 1fr auto;column-gap:10px;row-gap:5px;align-items:center;padding:8px 10px;border-radius:10px;border:1px solid transparent;font-size:13px;margin-bottom:2px}\n.rr b{font-weight:500}.rr.top b{font-weight:700}\n.rr.top{background:color-mix(in srgb,var(--a1) 12%,var(--card));border-color:var(--a1)}\n.rr.top .rkb{background:var(--a1);color:#1f2329}\n.rr svg{width:14px;height:14px;color:var(--a1);vertical-align:-2px;margin-left:6px}\n.rbar{grid-column:2/4;height:5px;border-radius:5px;background:var(--soft)}\n.rbar i{display:block;height:100%;border-radius:5px;background:var(--a1)}\n.rr:not(.top) .rbar i{opacity:.55}\n.hn{overflow-wrap:anywhere;line-height:1.3}\n.cn{font-size:11px;font-weight:300;font-style:italic;color:var(--sub);margin-top:14px}\n.err{display:flex;flex-direction:column;gap:6px;padding:16px 20px;border-radius:14px;background:rgba(239,68,68,.1);border:1px solid #ef4444;color:#ef4444;font-size:13px;line-height:1.5}\n.err b{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}\n.err code{font-family:ui-monospace,Menlo,monospace;font-size:11px;opacity:.8}\n.errpill{margin-top:22px;padding:8px 16px;border-radius:999px;background:rgba(239,68,68,.18);border:1px solid #ef4444;color:#fecaca;font-size:12px}\n.fatal{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:#24282f;font-family:'Poppins',system-ui,sans-serif}\n.fatal .err{max-width:640px;font-size:15px}\n#sig{position:fixed;inset:0;z-index:99;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.72)}\n#sig div{min-width:min(92vw,460px);padding:28px 32px;border-radius:18px;background:#16181c;border:1px solid var(--a1);color:#fff;font-size:13px;line-height:1.9;box-shadow:0 20px 60px rgba(0,0,0,.5)}\n#sig h4{font-size:18px;font-weight:700;color:var(--a1);margin-bottom:10px}\n#sig span{color:rgba(255,255,255,.55)}\n#sig p.k{margin-top:14px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.35)}\n";
let DB = null;
const PCSS = `
.sp0{font-size:clamp(28px,4.2vw,52px);font-weight:600;line-height:1.12;letter-spacing:-.015em;color:#fff;max-width:min(90vw,980px);margin-bottom:18px}
.msg{min-width:0;padding:30px 36px;border-radius:22px;background:linear-gradient(135deg,color-mix(in srgb,var(--a1) 18%,var(--card)),var(--card) 72%);border:1px solid color-mix(in srgb,var(--a1) 50%,transparent);color:var(--title)}
.msl{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--a1)}
.msl svg,.cmh svg{width:16px;height:16px}
.msb{display:flex;align-items:center;gap:20px 36px;flex-wrap:wrap;margin-top:12px}
.msv{font-size:clamp(52px,7vw,92px);font-weight:700;line-height:1;letter-spacing:-.03em;color:var(--a1);font-variant-numeric:tabular-nums;white-space:nowrap}
.msg.neg .msv{color:var(--ko)}.msg.pos .msv{color:var(--ok)}
.mst{flex:1;min-width:240px}
.mst p{font-size:21px;font-weight:500;line-height:1.35;color:var(--title)}
.msg.nov .mst p{font-size:clamp(24px,2.6vw,32px);font-weight:600;line-height:1.25}
.mst small{display:block;margin-top:8px;font-size:13px;font-weight:300;color:var(--sub)}
.acts{display:flex;flex-direction:column;gap:12px}
.act{display:flex;gap:16px;align-items:flex-start;padding:16px 18px;border-radius:14px;background:var(--soft);border-left:3px solid var(--a1)}
.actn{flex-shrink:0;font-size:22px;font-weight:700;line-height:1.1;color:var(--a1);font-variant-numeric:tabular-nums}
.actb b{display:block;font-size:15px;font-weight:600;line-height:1.4;color:var(--title)}
.actb p{font-size:13px;font-weight:300;line-height:1.55;color:var(--sub);margin-top:4px}
.actm{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.actm span{padding:3px 10px;border-radius:99px;font-size:11px;font-weight:500;color:var(--title);background:var(--card);border:1px solid var(--border)}
.cmt{min-width:0;padding:20px 24px;border-radius:18px;background:var(--card);border:1px dashed color-mix(in srgb,var(--a1) 65%,transparent)}
.cmh{display:flex;align-items:center;gap:8px;font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--a1);margin-bottom:10px}
.cmt h3{font-size:17px;font-weight:600;color:var(--title);margin-bottom:6px}
.cmt p{font-size:14px;font-weight:300;line-height:1.65;color:var(--title)}
.cmt p+p,.txt p+p{margin-top:8px}
.cmf{margin-top:12px;font-size:11px;color:var(--sub);line-height:1.6}
.cmf span{font-weight:600;letter-spacing:.1em;text-transform:uppercase;font-size:9px;margin-right:4px}
.cmf a{color:var(--a1);text-decoration:none;border-bottom:1px solid color-mix(in srgb,var(--a1) 40%,transparent)}
.txt p{font-size:15px;font-weight:300;line-height:1.7;color:var(--title)}
.el{list-style:none;display:flex;flex-direction:column;gap:12px;counter-reset:el}
.el li{position:relative;padding-left:26px;font-size:15px;line-height:1.5;color:var(--title)}
.el li::before{content:'';position:absolute;left:4px;top:.55em;width:8px;height:8px;border-radius:50%;background:var(--a1)}
.el.num li{padding-left:36px;counter-increment:el}
.el.num li::before{content:counter(el,decimal-leading-zero);width:auto;height:auto;border-radius:0;background:none;top:0;left:0;font-weight:700;color:var(--a1);font-variant-numeric:tabular-nums}
.el li b{font-weight:500}
.el li span{display:block;font-size:13px;font-weight:300;color:var(--sub);margin-top:2px}
.quo{min-width:0;padding:8px 0 8px 28px;border-left:4px solid var(--a1)}
.quo blockquote{font-size:clamp(20px,2.3vw,28px);font-weight:300;font-style:italic;line-height:1.45;color:var(--title)}
.quo blockquote::before{content:'\\201C';color:var(--a1);font-weight:700;margin-right:2px}
.quo blockquote::after{content:'\\201D';color:var(--a1);font-weight:700}
.quo figcaption{margin-top:10px;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--sub)}
.cf{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);gap:16px;align-items:stretch}
.cfs{padding:20px 22px;border-radius:14px;background:var(--soft);border:1px solid transparent}
.cfs.on{background:color-mix(in srgb,var(--a1) 10%,var(--card));border-color:var(--a1)}
.cfl{display:block;font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--sub)}
.cfs.on .cfl{color:var(--a1)}
.cfv{font-size:34px;font-weight:700;line-height:1.1;margin-top:8px;color:var(--title);font-variant-numeric:tabular-nums}
.cfs.on .cfv{color:var(--a1)}
.cft{display:block;font-size:15px;font-weight:600;margin-top:8px;color:var(--title)}
.cfs ul{list-style:none;margin-top:12px;display:flex;flex-direction:column;gap:8px}
.cfs li{position:relative;padding-left:16px;font-size:13px;font-weight:300;line-height:1.5;color:var(--title)}
.cfs li::before{content:'';position:absolute;left:0;top:.6em;width:6px;height:6px;border-radius:50%;background:var(--sub)}
.cfs.on li::before{background:var(--a1)}
.cfx{align-self:center;font-size:11px;font-weight:700;letter-spacing:.14em;color:var(--sub)}
.cfc{display:flex;gap:10px;align-items:flex-start;margin-top:16px;font-size:14px;font-weight:500;line-height:1.5;color:var(--title)}
.cfc svg{flex-shrink:0;width:18px;height:18px;color:var(--a1);margin-top:1px}
.tl{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr))}
.tls{position:relative;padding-right:16px;min-width:0}
.tlw{display:block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--a1)}
.tls i{display:block;position:relative;height:16px;margin:10px 0 14px}
.tls i::before{content:'';position:absolute;left:0;right:0;top:7px;height:2px;background:var(--border)}
.tls:last-child i::before{right:auto;width:16px}
.tls i::after{content:'';position:absolute;left:0;top:0;width:10px;height:10px;border-radius:50%;background:var(--card);border:3px solid var(--a1)}
.tls.done i::after{background:var(--a1)}
.tls b{display:block;font-size:14px;font-weight:600;line-height:1.35;color:var(--title)}
.tls p{font-size:12px;font-weight:300;line-height:1.5;color:var(--sub);margin-top:4px}
.grd{min-width:0;display:flex;flex-direction:column;gap:12px}
.grc{display:grid;gap:16px;grid-template-columns:repeat(var(--n),minmax(0,1fr))}
.gc{min-width:0;padding:20px;border-radius:16px;background:var(--card);border:1px solid var(--border);color:var(--title)}
.gc.on{border-color:var(--a1);background:color-mix(in srgb,var(--a1) 8%,var(--card))}
.gci{display:inline-flex;width:38px;height:38px;border-radius:11px;align-items:center;justify-content:center;background:color-mix(in srgb,var(--a1) 14%,transparent);color:var(--a1);margin-bottom:12px}
.gci svg{width:20px;height:20px}
.gcv{font-size:30px;font-weight:700;line-height:1.1;color:var(--a1);margin-bottom:6px;font-variant-numeric:tabular-nums}
.gc b{display:block;font-size:15px;font-weight:600;line-height:1.35}
.gc p{font-size:13px;font-weight:300;line-height:1.55;color:var(--sub);margin-top:6px}
.free{min-width:0;font-size:14px;line-height:1.6;color:var(--title);overflow-wrap:anywhere}
.free p+p{margin-top:8px}.free ul,.free ol{padding-left:20px}.free img{max-width:100%;height:auto;border-radius:12px}
.free h2,.free h3{color:var(--title);line-height:1.25}.free a{color:var(--a1)}
.free table{font-size:13px}
.f-accent{color:var(--a1)}.f-ok{color:var(--ok)}.f-ko{color:var(--ko)}.f-muted{color:var(--sub)}
.f-big{font-size:clamp(40px,5vw,64px);font-weight:700;line-height:1.05;letter-spacing:-.02em}
.f-title{font-size:20px;font-weight:700;line-height:1.3}
.f-label{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--sub)}
.f-box{padding:16px 18px;border-radius:14px;background:var(--soft)}
.f-box-accent{padding:16px 18px;border-radius:14px;background:color-mix(in srgb,var(--a1) 10%,var(--card));border:1px solid var(--a1)}
.f-row{display:flex;gap:16px;flex-wrap:wrap;align-items:center}
.f-grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(170px,1fr))}
.f-pill{display:inline-block;padding:3px 12px;border-radius:99px;background:color-mix(in srgb,var(--a1) 15%,transparent);color:var(--a1);font-size:12px;font-weight:600}
.f-bar{height:10px;border-radius:99px;background:var(--soft);overflow:hidden}.f-bar>i{display:block;height:100%;border-radius:99px;background:var(--a1)}
.f-center{text-align:center}
@media(max-width:1000px){.grc{grid-template-columns:repeat(2,minmax(0,1fr))}.cf{grid-template-columns:1fr}.cfx{justify-self:center}.tl{grid-template-columns:1fr 1fr;row-gap:20px}}
#print .msg{background:#fff;border:1.5px solid var(--a1);padding:18px 22px}
#print .msv{font-size:44px}
#print .mst p{font-size:14px}
#print .msg.nov .mst p{font-size:18px}
#print .msb{gap:12px 24px;margin-top:8px}
#print .msg,#print .act,#print .cmt,#print .quo,#print .gc,#print .tl,#print .cf,#print .free,#print .grd{break-inside:avoid}
#print .act{background:#fff;border:1px solid var(--border);border-left:3px solid var(--a1);padding:10px 14px}
#print .actn{font-size:16px}#print .actb b{font-size:12px}#print .actb p{font-size:10.5px}#print .actm span{font-size:9px}
#print .cmt{background:#fff;padding:12px 16px}
#print .cmt p,#print .txt p,#print .free{font-size:11.5px}
#print .cmt h3{font-size:13px}
#print .cmf{font-size:9px}
#print .cmf a{border:0;color:var(--title)}
#print .cmf a::after{content:' (' attr(href) ')';color:var(--sub);word-break:break-all}
#print .el li{font-size:12px}#print .el li span{font-size:10.5px}
#print .quo blockquote{font-size:17px}
#print .cfs,#print .cfs.on{background:#fff;border:1px solid var(--border);padding:12px 14px}
#print .cfs.on{border:1.5px solid var(--a1)}
#print .cfv{font-size:24px}#print .cft{font-size:12px}#print .cfs li{font-size:10.5px}#print .cfc{font-size:11.5px}
#print .cf{grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important}
#print .grc{gap:10px;grid-template-columns:repeat(var(--n),minmax(0,1fr))!important}
#print .gc,#print .gc.on{background:#fff;padding:12px 14px}
#print .gci{width:28px;height:28px;margin-bottom:8px;background:none;border:1px solid var(--a1)}
#print .gci svg{width:16px;height:16px}
#print .gcv{font-size:22px}#print .gc b{font-size:12px}#print .gc p{font-size:10.5px}
#print .tl{grid-template-columns:repeat(var(--n),minmax(0,1fr))!important}
#print .tls b{font-size:11.5px}#print .tls p{font-size:10px}
#print .f-box{background:#fff;border:1px solid var(--border)}
#print .f-box-accent{background:#fff}
#print .f-big{font-size:38px}

#print{position:absolute;left:-99999px;top:0;width:703px;background:#fff}
#print,#print *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
#print{--bg:#fff;--card:#fff;--border:#dde0e5;--title:#1f2329;--sub:#5f6673;--grid:#e8eaed;--soft:#f4f5f7;--a1:#f07a26;--a2:#f9c39c;color:#1f2329;font-family:'Poppins',system-ui,sans-serif}
#print .pg{break-before:page;display:flex;flex-direction:column;gap:14px}
#print .pg:first-child{break-before:auto}
#print .phd{padding-bottom:10px;border-bottom:2px solid var(--a1);margin-bottom:4px}
#print .phd h1{font-size:21px;margin-top:2px}
#print .phd p{font-size:11.5px}
#print .cap{font-size:9px}
#print .hd{font-size:15px;margin-top:6px;break-after:avoid}
#print .card,#print .kpi{border-radius:10px;padding:14px 16px;background:#fff;box-shadow:none}
#print .card,#print .kpis,#print .cols,#print .warn,#print .ins,#print .err{break-inside:avoid}
#print .kpis{gap:10px;grid-template-columns:repeat(var(--n),minmax(0,1fr))!important}
#print .cols{gap:12px;grid-template-columns:repeat(var(--n),minmax(0,1fr))!important}
#print .kpi.hl{background:#fff;border-color:var(--border);border-left:3px solid var(--a1)}
#print .kl{font-size:8px}
#print .kvw{margin-top:6px}
#print .kv{font-size:24px}
#print .kn,#print .kd{font-size:9px}
#print .ct{font-size:9px}
#print .cs{font-size:10px}
#print .ch{margin-bottom:10px}
#print .card.dark{background:#fff;color:var(--title);border-color:var(--a1)}
#print .card.dark .ht{background:var(--soft)}
#print .sw3,#print .btn{display:none}
#print table{font-size:10px}
#print th{background:none;border-bottom:1.5px solid var(--title);color:var(--title);padding:6px 7px;font-size:8px}
#print td{padding:5px 7px}
#print tr{break-inside:avoid}
#print tr.tot td{background:none;border-top:1.5px solid var(--title)}
#print td .dot{width:5px;height:5px;margin-right:6px}
#print .warn{background:#fff;font-size:11px;padding:9px 14px}
#print .rkw{background:#fff;padding:10px}
#print .rkn{font-size:20px}
#print .rr{font-size:11px;padding:5px 8px}
#print .rr.top{background:#fff}
#print .hr,#print .fr{font-size:11px}
#print .hb{gap:9px}
#print .hn{width:110px}
#print .lg{font-size:9px}
#print .cn{font-size:9px;margin-top:8px}
#print .ax,#print .vl{font-size:10px}
#print .ins{background:#fff}
#print .tx,#print .ins p{font-size:11.5px}
#print .cover{height:250mm;display:flex;flex-direction:column;justify-content:center;gap:0}
#print .cover .logo img{filter:none;width:190px}
#print .cover .logo-txt{color:var(--title);font-size:30px}
#print .cover .line{margin:26px 0}
#print .cv1{font-size:30px;font-weight:700;line-height:1.2;color:var(--title)}
#print .cv2{font-size:12px;letter-spacing:.25em;text-transform:uppercase;color:var(--sub);margin-top:8px}
#print .toc{margin-top:46px;display:flex;flex-direction:column;border-top:1px solid var(--border)}
#print .toc div{display:flex;gap:18px;align-items:baseline;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px}
#print .toc b{color:var(--a1);font-weight:600;font-size:11px;letter-spacing:.1em;width:24px}
#print .toc span{color:var(--sub);font-size:11px;font-weight:300;margin-left:auto}
#print .cvf{margin-top:auto;font-size:9px;letter-spacing:.25em;text-transform:uppercase;color:var(--sub)}
html.pv,html.pv body{overflow:auto!important;height:auto!important}
html.pv #app{display:none}
html.pv body{background:#8b9099}
html.pv #print{position:static;left:auto;margin:0 auto;width:auto;background:none;padding:24px 0 80px}
html.pv #print .pg{width:210mm;min-height:297mm;margin:0 auto 20px;padding:14mm 12mm 16mm;background:#fff;box-shadow:0 6px 24px rgba(0,0,0,.25);position:relative}
html.pv #print .pg::after{content:attr(data-foot);position:absolute;left:12mm;right:12mm;bottom:7mm;font-size:8px;color:#8a909b;letter-spacing:.05em}
#pvbar{display:none}
html.pv #pvbar{display:flex;position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:60;gap:18px;align-items:center;padding:10px 20px;border-radius:999px;background:#1c1f24;color:#fff;font:500 12px 'Poppins',system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.35)}
#pvbar kbd{font:600 11px 'Poppins',system-ui,sans-serif;padding:2px 7px;border-radius:5px;background:rgba(255,255,255,.14)}
#pvbar i{width:6px;height:6px;border-radius:50%;background:#fd8534}
@media print{
  html,body{height:auto!important;overflow:visible!important;background:#fff!important}
  #app,#modal,#pvbar,#sig{display:none!important}
  #print{position:static!important;left:auto!important;width:auto!important;padding:0!important}
  #print .pg{width:auto!important;min-height:0!important;margin:0!important;padding:0!important;box-shadow:none!important}
  #print .pg::after{display:none}
  #print .cover{height:255mm}
}
`;
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
let REG = [], PRN = false;
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
  const { keys, rows } = ser(b), L = 46, R = 8, T = 26, iw = W - L - R, labs = rows.map(r => wrapLab(r.name, iw / rows.length)), two = labs.some(l => l.length > 1), B = two ? 44 : 30, H = two ? 294 : 280, ih = H - T - B;
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
    g += `<text x="${L + slot * i + slot / 2}" y="${H - (two ? 22 : 8)}" text-anchor="middle" class="ax"><title>${esc(r.name)}</title>${labs[i].map((t, k) => `<tspan x="${L + slot * i + slot / 2}" dy="${k ? 13 : 0}">${esc(t)}</tspan>`).join("")}</text>`;
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
      return card(b, tableHtml(b.head, b.full || PRN ? b.rows : b.rows.slice(0, 6), b.total, b.hl) + (!b.full && !PRN && b.rows.length > 6 ? `<p class="more">Mostrate 6 su ${b.rows.length} voci. Elenco completo in Apri tabella.</p>` : ""), `<button class="btn" data-open="${id}">Apri tabella</button>`, a);
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
    case "riempimento": return card(b, fillHtml(b), "", a);
    case "classifica": return card(b, rankHtml(b), "", a);
    case "messaggio": return `<div class="msg${b.tono === "negativo" ? " neg" : b.tono === "positivo" ? " pos" : ""}${b.value == null || b.value === "" ? " nov" : ""}"${a}>${b.label ? `<span class="msl">${icon(b.icon || "target")}${esc(b.label)}</span>` : ""}<div class="msb">${b.value != null && b.value !== "" ? `<div class="msv">${esc(b.value)}</div>` : ""}<div class="mst">${b.text ? `<p>${esc(b.text)}</p>` : ""}${b.note ? `<small>${esc(b.note)}</small>` : ""}</div></div></div>`;
    case "azione": return card(Object.assign({ title: "Azioni proposte" }, b), `<div class="acts">${b.items.map((x, i) => { const o = typeof x === "string" ? { text: x } : x, m = [o.chi ? "Chi: " + o.chi : "", o.quando ? "Quando: " + o.quando : "", o.impatto ? "Impatto: " + o.impatto : ""].filter(Boolean); return `<div class="act"><span class="actn">${pad(i + 1)}</span><div class="actb"><b>${esc(o.text)}</b>${o.detail ? `<p>${esc(o.detail)}</p>` : ""}${m.length ? `<div class="actm">${m.map(t => `<span>${esc(t)}</span>`).join("")}</div>` : ""}</div></div>`; }).join("")}</div>`, "", a);
    case "commento": { const f = isArr(b.fonti) ? b.fonti : []; return `<div class="cmt"${a}><div class="cmh">${icon(b.icon || "idea")}<span>${esc(b.label || "Commento")}</span></div>${b.title ? `<h3>${esc(b.title)}</h3>` : ""}${paras(b.text)}${f.length ? `<div class="cmf"><span>Fonti</span> ${f.map(x => { const o = typeof x === "string" ? { name: x } : (x || {}); return /^https?:\/\//i.test(o.url || "") ? `<a href="${esc(o.url)}" target="_blank" rel="noopener">${esc(o.name || o.url)}</a>` : esc(o.name || o.url || ""); }).join(" · ")}</div>` : ""}</div>`; }
    case "testo": return card(b, `<div class="txt">${paras(b.text)}</div>`, "", a);
    case "elenco": { const tg = b.numerato ? "ol" : "ul"; return card(b, `<${tg} class="el${b.numerato ? " num" : ""}">${b.items.map(x => { const o = typeof x === "string" ? { text: x } : x; return `<li><b>${esc(o.text)}</b>${o.detail ? `<span>${esc(o.detail)}</span>` : ""}</li>`; }).join("")}</${tg}>`, "", a); }
    case "citazione": return `<figure class="quo"${a}><blockquote>${esc(b.text)}</blockquote>${b.author ? `<figcaption>${esc(b.author)}</figcaption>` : ""}</figure>`;
    case "confronto": {
      const ev = b.evidenza || "destra", side = (s, on) => `<div class="cfs${on ? " on" : ""}">${s.label ? `<span class="cfl">${esc(s.label)}</span>` : ""}${s.value != null ? `<div class="cfv">${esc(s.value)}</div>` : ""}${s.title ? `<b class="cft">${esc(s.title)}</b>` : ""}${isArr(s.items) && s.items.length ? `<ul>${s.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}</div>`;
      return card(b, `<div class="cf">${side(b.left, ev === "sinistra")}<div class="cfx">VS</div>${side(b.right, ev === "destra")}</div>${b.conclusione ? `<p class="cfc">${icon("check")}<span>${esc(b.conclusione)}</span></p>` : ""}`, "", a);
    }
    case "timeline": return card(b, `<div class="tl" style="--n:${b.steps.length}">${b.steps.map(s => `<div class="tls${s.fatto ? " done" : ""}"><span class="tlw">${esc(s.when || "")}</span><i></i><b>${esc(s.title)}</b>${s.text ? `<p>${esc(s.text)}</p>` : ""}</div>`).join("")}</div>`, "", a);
    case "griglia": { const n = Math.min(4, Math.max(1, +b.colonne || Math.min(4, b.items.length))); return `<div class="grd"${a}>${b.title ? `<div class="ct">${esc(b.title)}</div>` : ""}<div class="grc" style="--n:${n}">${b.items.map(x => `<div class="gc${x.evidenza ? " on" : ""}">${x.icon ? `<span class="gci">${icon(x.icon)}</span>` : ""}${x.value != null ? `<div class="gcv">${esc(x.value)}</div>` : ""}<b>${esc(x.title)}</b>${x.text ? `<p>${esc(x.text)}</p>` : ""}</div>`).join("")}</div></div>`; }
    case "html": return b.cornice === false ? `<div class="free"${a}>${clean(b.html)}</div>` : card(b, `<div class="free">${clean(b.html)}</div>`, "", a);
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

function pageCss() {
  let st = document.getElementById("dg-page");
  if (!st) { st = document.createElement("style"); st.id = "dg-page"; (document.head || document.documentElement).appendChild(st); }
  const q = s => '"' + String(s || "").replace(/["\\\n]/g, " ") + '"';
  st.textContent = `@page{size:A4 portrait;margin:14mm 12mm 16mm}@page{@bottom-left{content:${q("Fratelli Giacomel S.p.A. · " + [DB.title, DB.period].filter(Boolean).join(" · "))};font:300 7.5pt Poppins,sans-serif;color:#8a909b}@bottom-right{content:counter(page) " / " counter(pages);font:500 7.5pt Poppins,sans-serif;color:#8a909b}}@page:first{@bottom-left{content:none}@bottom-right{content:none}}`;
}
function buildPrint() {
  const D = DB, keep = REG; let pr = document.getElementById("print");
  if (!pr) { pr = document.createElement("div"); pr.id = "print"; document.body.appendChild(pr); }
  REG = []; PRN = true;
  const foot = esc("Fratelli Giacomel S.p.A. · " + [D.title, D.period].filter(Boolean).join(" · "));
  let h = `<section class="pg cover"><div>${logo(true)}<div class="line"></div><p class="cv1">${esc(D.title || D.period || "")}</p><p class="cv2">${D.title && D.period ? esc(D.period) + " · " : ""}${pad(D.tabs.length)} capitoli</p></div><div class="toc">${D.tabs.map((t, i) => `<div><b>${pad(i + 1)}</b>${esc(t.label)}<span>${esc(t.title || "")}</span></div>`).join("")}</div><p class="cvf">Fratelli Giacomel S.p.A.</p></section>`;
  D.tabs.forEach((t, ti) => {
    if (!Array.isArray(t.blocks)) return;
    h += `<section class="pg" data-foot="${foot}"><header class="phd"><span class="cap">Capitolo ${pad(ti + 1)}</span><h1>${esc(t.title)}</h1>${t.subtitle ? `<p>${esc(t.subtitle)}</p>` : ""}</header>${t.blocks.map((b, i) => block(b, "p" + ti + "-" + i)).join("")}</section>`;
  });
  PRN = false;
  pr.innerHTML = h;
  draw();
  REG = keep;
  pageCss();
}
function printView(on) {
  const h = document.documentElement;
  if (on) { buildPrint(); h.classList.add("pv"); window.scrollTo(0, 0); }
  else { h.classList.remove("pv"); if (S.view === "app") { draw(); prog(); } }
}
function doPrint() {
  buildPrint();
  try { window.print(); } catch (e) {}
}

function init() {
  const D = DB, h = document.documentElement;
  document.title = ("presentazione_fratelli_giacomel_" + (D.title || D.period || "")).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  h.dataset.engine = "presentazioni-giacomel@" + ENGINE.version;
  h.dataset.author = ENGINE.author;
  h.dataset.brand = D.brand === "blu" ? "blu" : "grafite";
  h.dataset.accent = D.accent === "blu" ? "blu" : "arancio";
  const per = D.period ? esc(D.period) : "";
  $("#app").innerHTML = `<div class="shell v-home" id="shell"><aside id="sb">
    <div class="splash"><div class="splash-in">${logo(true)}<div class="line"></div>
      <div class="home-only">${D.title ? `<h1 class="sp0">${esc(D.title)}</h1>` : ""}${per ? `<p class="sp1">${per}</p>` : ""}<p class="sp2">${pad(D.tabs.length)} capitoli</p>${ERR.length ? `<p class="errpill">⚠ ${ERR.length} ${ERR.length === 1 ? "problema" : "problemi"} nei dati: i blocchi coinvolti sono segnati in rosso</p>` : ""}<button class="start" id="bStart">Avvia <span>${I.arrow}</span></button></div>
      <div class="end-only">${D.title ? `<p class="sp1" style="margin-bottom:18px">${esc(D.title)}</p>` : ""}<h2 class="thanks">${esc(D.thanks || "GRAZIE PER L'ATTENZIONE")}</h2>${per ? `<p class="sp2">${per}</p>` : ""}</div></div>
      <button class="restart end-only" id="bRestart">${I.home}<span>Ricomincia</span></button><p class="corp home-only">Fratelli Giacomel S.p.A.</p></div>
    <div class="menu"><div class="mtop"><button class="colbtn" id="bCol" title="Chiudi / apri barra laterale">${I.panel}</button></div>
      <div class="mlogo">${logo(false)}</div><nav id="nav"></nav>
      <div class="mbot"><div class="prog"><div class="ph"><span class="pl">Avanzamento</span><span id="pn" class="num"></span></div><div class="pt"><div class="pf" id="pf"></div></div></div>
        <div class="mode"><span class="ml" id="ml"></span><button class="sw" id="bMode" title="Modalità PC / Proiettore">${I.pc}${I.proj}<span class="knob" id="knob"></span></button></div>
        ${per ? `<p class="mper">${per}</p>` : ""}<p class="mcorp">Fratelli Giacomel S.p.A.</p><div class="mend"><button class="enddot" id="bEnd" title="Termina">${I.x}<span>Termina</span></button></div></div></div>
  </aside><main id="main"></main></div><div id="modal"></div>`;
  if (!document.getElementById("pvbar")) document.body.insertAdjacentHTML("beforeend", `<div id="pvbar"><i></i><span>Anteprima di stampa · A4</span><span><kbd>Ctrl</kbd> + <kbd>P</kbd> stampa / PDF</span><span><kbd>Esc</kbd> chiudi</span></div>`);
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
    if ((e.ctrlKey || e.metaKey) && !e.altKey && (e.key === "p" || e.key === "P")) { e.preventDefault(); doPrint(); return; }
    if (e.ctrlKey && e.altKey && (e.code === "KeyP" || e.key === "p" || e.key === "P")) { e.preventDefault(); printView(!document.documentElement.classList.contains("pv")); return; }
    if (e.key === "Escape" && document.documentElement.classList.contains("pv")) { printView(false); return; }
    if (document.documentElement.classList.contains("pv")) return;
    if (e.key === "Escape" && $("#sig")) { $("#sig").remove(); return; }
    if (e.key === "Escape" && S.modal) { S.modal = null; modal(); return; }
    if (S.view !== "app" || S.modal) return;
    if ((e.key === "ArrowRight" || e.key === "PageDown") && S.tab < DB.tabs.length - 1) { S.tab++; update(); }
    if ((e.key === "ArrowLeft" || e.key === "PageUp") && S.tab > 0) { S.tab--; update(); }
  });
  $("#main").addEventListener("scroll", prog, { passive: true });
  let tm; if (window.ResizeObserver) new ResizeObserver(() => { clearTimeout(tm); tm = setTimeout(() => { if (S.view === "app") { draw(); prog(); } }, 120); }).observe($("#main"));
  window.addEventListener("beforeprint", buildPrint);
  update();
  buildPrint();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(buildPrint);
}



I.trophy = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>';
function fillHtml(b) {
  const d = b.data, vs = d.map(x => +x.value || 0), s = vs.slice().sort((x, y) => y - x), out = new Set();
  for (let i = 0; i < s.length - 1 && s[i + 1] > 0 && s[i] > 3 * s[i + 1]; i++) out.add(s[i]);
  const mx = Math.max(1, ...vs.filter(v => !out.has(v)));
  const lab = isArr(b.legend) && b.legend.length === 2 ? b.legend : ["Totale", "Parte"];
  const rows = d.map(x => {
    const v = +x.value || 0, p = +x.part || 0, cut = out.has(v), L = cut ? 100 : Math.max(3, Math.sqrt(v) / Math.sqrt(mx) * 100), f = v ? Math.min(1, p / v) : 0;
    return `<div class="fr"><span class="hn">${esc(x.name)}</span><div class="ftk"><i class="fb${cut ? " cut" : ""}" style="width:${L}%"></i><i class="fp" style="width:${L * f}%"></i></div><span class="hv">${fmt(v)} | ${fmt(p)}</span></div>`;
  }).join("");
  return `<div class="hb">${rows}</div><div class="lg"><span><i style="background:color-mix(in srgb,var(--a2) 45%,transparent)"></i>${esc(lab[0])}</span><span><i style="background:var(--a1)"></i>${esc(lab[1])}</span></div><p class="cn">Scala ridotta per leggibilità: fanno fede i numeri.</p>`;
}
function rankHtml(b) {
  const d = (b.data || []).map((x, i) => ({ n: x.name, v: +x.value || 0, i })).sort((x, y) => y.v - x.v || x.i - y.i);
  if (!d.length) return `<p class="tx" style="color:var(--sub)">${esc(b.empty || "Nessun dato disponibile")}</p>`;
  d.forEach(x => { x.r = 1 + d.filter(y => y.v > x.v).length; });
  const u = b.unit ? " " + esc(b.unit) : "", mx = d[0].v || 1;
  if (b.style === "righe") return d.map(x => `<div class="rr${x.r === 1 ? " top" : ""}"><span class="rkb">${x.r}</span><b>${esc(x.n)}${x.r === 1 ? I.trophy : ""}</b><span class="lv">${fmt(x.v)}</span><div class="rbar"><i style="width:${Math.max(2, x.v / mx * 100)}%"></i></div></div>`).join("");
  const w = d.filter(x => x.r === 1), rest = d.filter(x => x.r > 1);
  return `<div class="rkw">${I.trophy}<div class="rkn">${w.map(x => esc(x.n)).join(" / ")}</div><div class="rkc">${fmt(w[0].v)}${u}</div></div>${rest.map(x => `<div class="li"><div class="lt"><span class="rkb">${x.r}</span><b>${esc(x.n)}</b></div><span class="lv">${fmt(x.v)}</span></div>`).join("")}`;
}

function wrapLab(name, slot) {
  const s = String(name == null ? "" : name), max = Math.max(4, Math.floor((slot - 6) / 6.2));
  if (s.length <= max) return [s];
  const parts = s.split(/(?<=[\s./-])/), lines = [""];
  parts.forEach(p => { const cur = lines[lines.length - 1]; if (cur && (cur + p).trimEnd().length > max && lines.length < 2) lines.push(p); else lines[lines.length - 1] = cur + p; });
  return lines.map(l => l.trim()).map(l => l.length > max ? l.slice(0, max - 1) + "…" : l);
}

const IC = {
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  grafico: '<path d="M4 20V11M10 20V5M16 20v-7M21 20H3"/>',
  euro: '<path d="M17 6.5A7 7 0 1 0 17 17.5M4 10h9M4 14h9"/>',
  persone: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a5.5 5.5 0 0 1 3.5 6"/>',
  telefono: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2"/>',
  idea: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
  allarme: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/>',
  calendario: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  megafono: '<path d="M3 10v4h4l8 5V5L7 10z"/><path d="M18 9a4 4 0 0 1 0 6"/>',
  stella: '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
  su: '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
  giu: '<path d="M3 7l6 6 4-4 8 8M15 17h6v-6"/>',
  web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  auto: '<path d="M3 16v-3l2-5h14l2 5v3zM5 16v2M19 16v2"/><circle cx="7.5" cy="12.5" r="1"/><circle cx="16.5" cy="12.5" r="1"/>',
  ricerca: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  razzo: '<path d="M12 15l-3-3c1.5-4.5 5-8 10-9-1 5-4.5 8.5-9 10z"/><path d="M9 12l-4 1 2-4h4M12 15l-1 4 4-2v-4M5 19c0-2 1-3 2-3"/>',
  documento: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h7M9 17h7"/>',
  orologio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};
const icon = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${IC[n] || IC.stella}</svg>`;
const paras = t => String(t == null ? "" : t).split(/\n\s*\n|\n/).filter(s => s.trim()).map(s => `<p>${esc(s)}</p>`).join("");
const clean = h => String(h == null ? "" : h)
  .replace(/<\s*(script|style|iframe|object|noscript|form|template|svg:script)\b[\s\S]*?<\/\s*\1\s*>/gi, "")
  .replace(/<\s*\/?\s*(script|style|iframe|object|embed|link|meta|base|form|frame|frameset)\b[^>]*>/gi, "")
  .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
  .replace(/\s(href|src|xlink:href|action)\s*=\s*("|')\s*(javascript|data:text\/html|vbscript):[^"']*\2/gi, "")
  .replace(/position\s*:\s*fixed/gi, "position:relative");
const TYPES = ["riempimento","classifica","kpi","heading","table","colonne","barre","linea","bars","progress","bolle","anello","segmenti","evidenza","lista","torta","donut","insight","text","avviso","cols","messaggio","azione","commento","testo","elenco","citazione","confronto","timeline","griglia","html"];
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
    case "riempimento": return need(isArr(b.data) && b.data.length && b.data.every(d => d.name != null && num(d.value) && num(d.part)), `riempimento "${b.title || ""}": ogni voce deve avere name, value e part numerici`);
    case "classifica": return need(isArr(b.data) && b.data.every(d => d.name != null && num(d.value)), `classifica "${b.title || ""}": ogni voce deve avere name e value numerico`);
    case "cols": return need(isArr(b.blocks) && b.blocks.length >= 1 && b.blocks.length <= 3, "cols: servono da 1 a 3 blocchi in \"blocks\"");
    case "messaggio": return need((b.value != null && b.value !== "") || b.text, "messaggio: serve \"value\" (la cifra) oppure \"text\"");
    case "azione": return need(isArr(b.items) && b.items.length && b.items.every(x => typeof x === "string" || (x && x.text)), `azione "${b.title || ""}": serve "items" con "text" per ogni azione`);
    case "commento": case "testo": case "citazione": return need(b.text != null && b.text !== "", `${b.type}: manca "text"`);
    case "elenco": return need(isArr(b.items) && b.items.length && b.items.every(x => typeof x === "string" || (x && x.text)), `elenco "${b.title || ""}": serve "items" (testi o oggetti con "text")`);
    case "confronto": return need(b.left && b.right && typeof b.left === "object" && typeof b.right === "object", `confronto "${b.title || ""}": servono "left" e "right"`);
    case "timeline": return need(isArr(b.steps) && b.steps.length >= 2 && b.steps.length <= 6 && b.steps.every(s => s && s.title), `timeline "${b.title || ""}": servono da 2 a 6 "steps", ognuno con "title"`);
    case "griglia": return need(isArr(b.items) && b.items.length && b.items.length <= 12 && b.items.every(x => x && x.title), `griglia "${b.title || ""}": servono da 1 a 12 "items", ognuno con "title"`);
    case "html": return need(typeof b.html === "string" && b.html.trim(), "html: manca il testo HTML in \"html\"");
  }
  return "";
}
function where(id) { const p = String(id).replace(/^p/, "").split("-"); return `Capitolo ${+p[0] + 1}, blocco ${+p[1] + 1}${p[2] != null ? "." + (+p[2] + 1) : ""}`; }
function errBox(id, msg) { return `<div class="err"><b>Dato da correggere · ${esc(String(id).startsWith("cap") ? "Capitolo " + (+String(id).slice(3) + 1) : where(id))}</b><span>${esc(msg)}</span></div>`; }
function scan() {
  (DB.tabs || []).forEach((t, ti) => {
    if (!t || !isArr(t.blocks)) { ERR.push(`Capitolo ${ti + 1}: manca "blocks"`); return; }
    t.blocks.forEach((b, bi) => {
      const e = check(b); if (e) ERR.push(`${where(ti + "-" + bi)}: ${e}`);
      else if (b.type === "cols") b.blocks.forEach((x, xi) => { const e2 = check(x); if (e2) ERR.push(`${where(ti + "-" + bi + "-" + xi)}: ${e2}`); });
    });
  });
  if (ERR.length && window.console) console.warn("[Presentazioni Giacomel] Dati da correggere:\n- " + ERR.join("\n- "));
}
function sign() {
  if ($("#sig")) { $("#sig").remove(); return; }
  const g = DB && (DB.generatore || DB.generator) ? esc(DB.generatore || DB.generator) : "";
  const d = document.createElement("div"); d.id = "sig";
  d.innerHTML = `<div><h4>${ENGINE.name}</h4><span>Engine</span> v${ENGINE.version} · ${ENGINE.build}<br><span>Developed by</span> ${ENGINE.author}<br>${g ? `<span>Skill</span> ${g}<br>` : ""}${DB.title ? `<span>Titolo</span> ${esc(DB.title)}<br>` : ""}<span>Period</span> ${esc(DB.period || "-")}<p class="k">Esc / Ctrl+Alt+A per chiudere</p></div>`;
  d.addEventListener("click", () => d.remove());
  document.body.appendChild(d);
}
function fatal(msg) {
  const box = document.getElementById("app") || document.body.appendChild(Object.assign(document.createElement("div"), { id: "app" }));
  box.removeAttribute("style");
  if (!document.getElementById("dg-style")) { const st = document.createElement("style"); st.id = "dg-style"; st.textContent = CSS; (document.head || document.documentElement).appendChild(st); }
  box.innerHTML = `<div class="fatal"><div class="err"><b>Presentazione non disponibile</b><span>${esc(msg)}</span><code>${esc(ENGINE.signature)}</code></div></div>`;
}

function boot() {
  if (DB) return;
  let d = null;
  try { d = PRESENTAZIONE; } catch (e) { d = window.PRESENTAZIONE || null; }
  if (!d) { try { d = DASHBOARD; } catch (e) { d = window.DASHBOARD || null; } }
  if (!d) { if (document.readyState !== "complete") return; fatal("Nessun oggetto PRESENTAZIONE trovato nella pagina. L'HTML deve contenere: const PRESENTAZIONE = {...} prima del motore."); return; }
  DB = d;
  const head = document.head || document.documentElement;
  if (!document.querySelector('link[href*="family=Poppins"]')) { const l = document.createElement("link"); l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"; head.appendChild(l); }
  const st = document.createElement("style"); st.id = "dg-style"; st.textContent = CSS + PCSS; head.appendChild(st);
  [["author", ENGINE.author], ["generator", ENGINE.signature]].forEach(([n, c]) => { const m = document.createElement("meta"); m.name = n; m.content = c; head.appendChild(m); });
  const app = document.getElementById("app") || document.body.appendChild(Object.assign(document.createElement("div"), { id: "app" }));
  app.removeAttribute("style"); app.textContent = "";
  if (!isArr(DB.tabs) || !DB.tabs.length) { fatal("L'oggetto PRESENTAZIONE non contiene capitoli (\"tabs\" vuoto o mancante)."); return; }
  scan();
  if (window.console) console.info("%c" + ENGINE.signature, "color:#fd8534;font-weight:600");
  init();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
window.addEventListener("load", boot);
})();
