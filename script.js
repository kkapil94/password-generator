 const len = document.getElementById("len")
 const low = document.getElementById("lo")
 const up = document.getElementById("up")
 const sym = document.getElementById("sy")
 const pass = document.getElementById("pwd")
 const numb= document.getElementById("num")
 const gen = document.querySelector(".sub")
 const cop = document.querySelector(".cop");


 lower = "abcdefghijklmnopqrstuvwxyz"
 upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 symbol = "!@#$%^&*_+"
 number = "1234567890"
function getlow(){
    return lower[Math.floor(Math.random()*lower.length)];
}
function getupp(){
    return upper[Math.floor(Math.random()*upper.length)];
}
function getsymbol(){
    return symbol[Math.floor(Math.random()*symbol.length)];
}
function getnum(){
    return number[Math.floor(Math.random()*number.length)];
}
gen.addEventListener("click",function getpass(){
    let passw = "";
    
    for(let i=0;i<len.value;i++)
    {   
        const pw = x();
        passw=passw+pw;
    }
    pass.innerText=passw;
})
function x(){
    const pw = [];
    if(low.checked){
    const l = getlow();
    pw.push(l);
    }
    if(up.checked){
        const u = getupp();
        pw.push(u)
    }
    if(sym.checked){
        const s = getsymbol();
        pw.push(s)
    }
    if(numb.checked){
        const n = getnum();
        pw.push(n);
    }
    if(pw.length===0) return "";
    return pw[Math.floor(Math.random()*pw.length)];
    
}
cop.addEventListener("click",()=>{
  const pas= document.createElement("textarea");
    const va = pass.innerText;
    if(!va)return;
      pas.value = va;
  document.body.appendChild(pas);

  pas.select();
  pas.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(pas.value);
pas.remove()
  alert("Copied the text: " + pas.value);
  
})
