let btmode=document.querySelector("#btn1")
let crnmode="light mode"
btmode.addEventListener("click",() =>{
    if(crnmode==="light mode"){
        crnmode="dark mode";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        crnmode="light mode";
        document.querySelector("body").style.backgroundColor ="white";
    }
  console.log(crnmode);
})
 