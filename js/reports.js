/* Reports page JS */

document.addEventListener("DOMContentLoaded",()=>{
 const scans=JSON.parse(localStorage.getItem("dfdScans")||"[]");if(scans.length){const grid=$("#reportGrid");grid.innerHTML=scans.slice(0,6).map(s=>`<article class="card"><h3>${s.type} Scan</h3><p>${s.target}</p><p><span class="badge badge-high">RISK: ${s.risk||"HIGH"}</span></p><small style="color:var(--muted)">${s.date}</small><div style="display:flex;gap:8px;margin-top:18px"><a class="btn btn-secondary" href="results.html">View</a><button class="btn btn-primary download-btn">Download</button></div></article>`).join("");$$(".download-btn").forEach(b=>b.onclick=()=>showToast("Connect a PDF generator/backend to enable downloads."));}
});