function pad(n){ return String(n).padStart(2,'0'); }

function formatNow(d){
  const y = d.getFullYear();
  const m = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const h = pad(d.getHours());
  const min = pad(d.getMinutes());
  const s = pad(d.getSeconds());
  return `${y}-${m}-${day} ${h}:${min}:${s}`;
}

function tick(){
  const el = document.getElementById('clock');
  if (el) el.textContent = formatNow(new Date());
}

tick();
setInterval(tick, 1000);

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());