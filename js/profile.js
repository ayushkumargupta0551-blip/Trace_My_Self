/* Profile page JS */

document.addEventListener("DOMContentLoaded", () => {
    $("#profileForm").addEventListener("submit", e => { e.preventDefault(); const name = $("#profileName").value.trim(), email = $("#profileEmail").value.trim(); if (name && email) { localStorage.setItem("dfdUser", JSON.stringify({ name, email })); applyUser(); showToast("Profile updated successfully."); } });
});