const modeChange = document.getElementById("theme");
const body = document.getElementById("main");

//dark/light mode setup
modeChange.addEventListener("click",()=>{
  body.classList.toggle("dark");
});

