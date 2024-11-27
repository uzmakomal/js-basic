                                    
//function:
function sum(a,b){
    return (a+b);
}
console.log(sum(2,3));

const ram = () =>{
    console.log("hello function:::")
    return "hey"
}
 let v = ram();
 console.log(v);
 (function() {
    console.log("IIFE executed!");
  })();
  setTimeout(function() {
    console.log("This runs after 4 seconds");
  }, 4000);
  