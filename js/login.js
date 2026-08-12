/* Login page JS */

document.addEventListener("DOMContentLoaded",()=>{
 const form=$("#loginForm"), error=$("#loginError"), loading=$("#loginLoading");
 form.addEventListener("submit",e=>{e.preventDefault(); error.style.display="none";
 const email=$("#email").value.trim(), pass=$("#password").value;
 if(!email||!email.includes("@")){error.textContent="Please enter a valid email address.";error.style.display="block";return}
 if(pass.length<6){error.textContent="Password must contain at least 6 characters.";error.style.display="block";return}
 loading.style.display="flex";
 setTimeout(()=>{localStorage.setItem("dfdUser",JSON.stringify({name:"Ayush Kumar Gupta",email}));location.href="dashboard.html"},900);
 });
});