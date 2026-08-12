/* Shared JavaScript helpers used across pages. */


const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

function showToast(message){
  let t = $("#toast");
  if(!t){ t=document.createElement("div"); t.id="toast"; t.className="toast"; document.body.appendChild(t); }
  t.textContent=message; t.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(()=>t.classList.remove("show"),2600);
}
function setupPasswordToggle(){
  $$(".password-toggle").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const input=document.getElementById(btn.dataset.target);
      if(!input) return;
      input.type=input.type==="password"?"text":"password";
      btn.textContent=input.type==="password"?"Show":"Hide";
    });
  });
}
function setupMobileMenu(){
  const menu=$("#mobileMenu"), side=$("#sidebar");
  if(menu && side) menu.addEventListener("click",()=>side.classList.toggle("open"));
}
function setupLogout(){
  $$(".logout-btn").forEach(btn=>btn.addEventListener("click",e=>{
    e.preventDefault(); localStorage.removeItem("dfdUser"); showToast("Logged out successfully");
    setTimeout(()=>location.href="login.html",700);
  }));
}
function getUser(){
  return JSON.parse(localStorage.getItem("dfdUser") || '{"name":"Ayush Kumar Gupta","email":"example@gmail.com"}');
}
function applyUser(){
  const u=getUser();
  $$(".user-name").forEach(el=>el.textContent=u.name);
  $$(".user-email").forEach(el=>el.textContent=u.email);
  $$(".user-initial").forEach(el=>el.textContent=(u.name||"U").split(" ").map(x=>x[0]).slice(0,2).join("").toUpperCase());
}
document.addEventListener("DOMContentLoaded",()=>{
  setupPasswordToggle(); setupMobileMenu(); setupLogout(); applyUser();
});
