/* History page JS */

document.addEventListener("DOMContentLoaded",()=>{
 const scans=JSON.parse(localStorage.getItem("dfdScans")||"[]");const body=$("#historyBody");
 if(scans.length){body.innerHTML=scans.map(s=>`<tr><td><strong>${s.target}</strong></td><td>${s.type}</td><td>${s.date}</td><td><span class="badge badge-high">${s.risk||"High"}</span></td><td><a class="helper-link" href="results.html">View</a></td></tr>`).join("");}
});