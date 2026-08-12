/* Dashboard page JS */

document.addEventListener("DOMContentLoaded",()=>{
 const scans=JSON.parse(localStorage.getItem("dfdScans")||"[]");
 $("#scanCount").textContent=scans.length||12; $("#reportCount").textContent=Math.max(8,scans.length);
});