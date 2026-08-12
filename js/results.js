/* Results page JS */

document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(localStorage.getItem("pendingScan") || '{"type":"Username","target":"ayush123"}'); $("#targetType").textContent = data.type; $("#targetValue").textContent = data.target;
    const scans = JSON.parse(localStorage.getItem("dfdScans") || "[]"); if (!scans.some(x => x.target === data.target)) { scans.unshift({ target: data.target, type: data.type, date: new Date().toLocaleDateString(), risk: "High", score: 72 }); localStorage.setItem("dfdScans", JSON.stringify(scans.slice(0, 20))); }
    $("#newScan").onclick = () => location.href = "scan.html"; $("#download").onclick = () => showToast("Demo PDF generation: connect your backend/report service here.");
});