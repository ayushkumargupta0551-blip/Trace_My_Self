/* Scan page JS */

document.addEventListener("DOMContentLoaded", () => {
    $("#scanForm").addEventListener("submit", e => {
        e.preventDefault(); const value = $("#target").value.trim(); if (!value) { $("#scanError").style.display = "block"; return }
        $("#scanError").style.display = "none"; localStorage.setItem("pendingScan", JSON.stringify({ type: $('input[name="scanType"]:checked').value, target: value, date: new Date().toLocaleDateString() })); location.href = "scan-progress.html";
    });
});