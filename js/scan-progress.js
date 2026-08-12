/* Scan Progress page JS */

document.addEventListener("DOMContentLoaded",()=>{
 let progress=0;const bar=$("#progressBar"), pct=$("#percent"), steps=$$(".scan-step");
 const timer=setInterval(()=>{progress+=5;bar.style.width=progress+"%";pct.textContent=progress+"%";
 const index=Math.min(steps.length-1,Math.floor(progress/20));steps.forEach((s,i)=>{s.querySelector(".step-status").textContent=i<index?"✓":i===index?"⟳":"○";s.querySelector(".step-status").className="step-status "+(i<index?"done":i===index?"running":"")});
 if(progress>=100){clearInterval(timer);setTimeout(()=>location.href="results.html",500)}},180);
 $("#cancelScan").addEventListener("click",()=>{clearInterval(timer);location.href="scan.html"});
});