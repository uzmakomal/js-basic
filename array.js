//empty array:
const book=[];
//array with element:
const car=["ford","chevy","honda"];
car[0]="toyota";//change the value of array by index
console.log(car.length);
//array method:
const num=[1,2,3,4,56,75];
console.log(num.length);//check the length of array
let b=num.toString();//tostring mehod
console.log(b,typeof  b);
let c=num.join("and");//join method
console.log(c);
let y=num.pop();//pop method...popped(remove) the last element of array
console.log(num,y);
let z=num.push(23);//push method ...add new element in array
console.log(num,z);
var x=num.shift();//shift the first element and return its
console.log(num,x);
 var x=num.unshift(12);//unshift method ..add new element in the start of array
 console.log(num,x);
 delete num[1];//delete method:
 console.log(num);