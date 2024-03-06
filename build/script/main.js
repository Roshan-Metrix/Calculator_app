const modeChange = document.getElementById("theme");
const body = document.getElementById("main");
const display = document.getElementById("calc");
const btns = document.querySelectorAll('button');

let string = '';
//taking button value
const btnArray = Array.from(btns);
btnArray.forEach((event)=>{
  event.addEventListener("click",(e)=>{
    if(e.target.innerHTML == 'C'){
      string = string.substring(0,string.length-1);
      display.innerHTML=string;
    }else if(e.target.innerHTML == 'AC'){
      string = string.substring(0,string.length = 0);
      display.innerHTML = string;
    }
    else{
    string += e.target.innerHTML;
    display.innerHTML = string;
    }
  });
});


//dark/light mode setup
modeChange.addEventListener("click",()=>{
  body.classList.toggle("dark");
});


