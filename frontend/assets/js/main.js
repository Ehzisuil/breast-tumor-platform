/* ========================================================================
   乳腺肿瘤全周期智能管理平台 — 交互原型脚本
   说明：以下均为前端演示逻辑，真实业务需对接后端 / AI 模型 / 数据库。
   ======================================================================== */

/* ---------- 移动端导航 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  initRiskAssessment();
  initMedReminder();
});

/* ========================================================================
   诊前 · AI 风险评估（演示：简易加权评分）
   ======================================================================== */
function initRiskAssessment() {
  const form = document.getElementById("risk-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    let score = 5; // 基线
    const add = (k, v) => { if (v) score += Number(v); };

    add("age", fd.get("age") || 0);
    add("family", fd.get("family") || 0);
    add("menarche", fd.get("menarche") || 0);
    add("parity", fd.get("parity") || 0);
    add("bmi", fd.get("bmi") || 0);
    add("alcohol", fd.get("alcohol") || 0);
    add("exercise", fd.get("exercise") || 0);

    score = Math.max(2, Math.min(98, score));
    const box = document.getElementById("risk-result");
    const ring = document.getElementById("risk-ring");
    const pct = document.getElementById("risk-pct");
    const level = document.getElementById("risk-level");
    const advice = document.getElementById("risk-advice");

    ring.style.setProperty("--p", score);
    pct.textContent = score + "%";

    let lv, color, adv;
    if (score < 30) { lv = "低风险"; color = "var(--ok)"; adv = "保持健康生活方式，按指南定期自查与筛查即可。"; }
    else if (score < 60) { lv = "中风险"; color = "var(--warn)"; adv = "建议每年一次临床乳腺检查，并考虑乳腺超声/钼靶筛查。"; }
    else { lv = "高风险"; color = "var(--danger)"; adv = "建议尽快至专科门诊评估，结合家族史考虑基因检测与强化筛查。"; }

    level.textContent = lv;
    level.style.color = color;
    advice.textContent = adv;
    box.classList.add("show");
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

/* ========================================================================
   诊后 · 用药提醒（演示：localStorage 持久化）
   ======================================================================== */
const MED_KEY = "bcp_med_reminders";
function initMedReminder() {
  const form = document.getElementById("med-form");
  if (!form) return;
  renderMeds();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get("med") || "").toString().trim();
    const time = (fd.get("time") || "").toString();
    const dose = (fd.get("dose") || "").toString().trim();
    if (!name) return;
    const list = getMeds();
    list.push({ id: Date.now(), name, time, dose });
    saveMeds(list);
    form.reset();
    renderMeds();
  });
}
function getMeds() {
  try { return JSON.parse(localStorage.getItem(MED_KEY) || "[]"); }
  catch { return []; }
}
function saveMeds(list) { localStorage.setItem(MED_KEY, JSON.stringify(list)); }
function renderMeds() {
  const ul = document.getElementById("med-list");
  if (!ul) return;
  const list = getMeds();
  ul.innerHTML = "";
  if (!list.length) {
    ul.innerHTML = '<li style="justify-content:center;color:var(--text-mute)">暂无提醒，添加一条试试 →</li>';
    return;
  }
  list.forEach((m) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>💊 <b>${escapeHtml(m.name)}</b>${m.dose ? " · " + escapeHtml(m.dose) : ""}${m.time ? " · ⏰ " + escapeHtml(m.time) : ""}</span>`;
    const btn = document.createElement("button");
    btn.className = "rm"; btn.textContent = "删除";
    btn.onclick = () => { saveMeds(getMeds().filter(x => x.id !== m.id)); renderMeds(); };
    li.appendChild(btn);
    ul.appendChild(li);
  });
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
