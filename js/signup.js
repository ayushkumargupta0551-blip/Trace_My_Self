/* Signup page JS */

document.addEventListener("DOMContentLoaded",()=>{
 const form=$("#signupForm"), error=$("#signupError"), pass=$("#password"), confirm=$("#confirmPassword");
 function strength(v){let score=0;if(v.length>=8)score++;if(/[A-Z]/.test(v))score++;if(/[0-9]/.test(v))score++;if(/[^A-Za-z0-9]/.test(v))score++;
 $$(".strength-bars span").forEach((x,i)=>x.style.background=i<score?"var(--success)":"#26384d");$("#strengthText").textContent=["Very weak","Weak","Good","Strong","Very strong"][score]||"Very weak";}
 pass.addEventListener("input",()=>strength(pass.value));
 form.addEventListener("submit",e=>{e.preventDefault();error.style.display="none";
 const name=$("#name").value.trim(), email=$("#email").value.trim(), p=pass.value, c=confirm.value;
 if(name.length<2){error.textContent="Please enter your name.";error.style.display="block";return}
 if(!email.includes("@")){error.textContent="Please enter a valid email.";error.style.display="block";return}
 if(p.length<8){error.textContent="Password must be at least 8 characters.";error.style.display="block";return}
 if(p!==c){error.textContent="Passwords do not match.";error.style.display="block";return}
 if(!$("#terms").checked){error.textContent="Please accept the Terms and Privacy Policy.";error.style.display="block";return}
 localStorage.setItem("dfdUser",JSON.stringify({name,email}));location.href="dashboard.html";
 });
});