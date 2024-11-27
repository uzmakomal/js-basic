//Array map method:
let arr=[23,45,1,2,34,65,78,89]
let newarr=arr.map((value,index)  => {
    console.log(value,index);
    return value+index;
})
console.log(newarr);

//Array fillter method:
console.log("array fillter method::")
let arr1=[1,2,3,4,5,6,7,87,65,45];

let newarr1=arr1.filter((value) =>{
    return value<10;
})
console.log(arr1,newarr1);

//Reduce method:
console.log("Array reduce method:")
let arr3=[2,4,5,6,7,8,3];
let sum=arr3.reduce((a1,a2) => {
return a1+a2;
})
console.log(sum);

//for each method:
console.log("for each method:")
var number=[1,2,3,4,5]
let numbers=number.forEach((value) => {
    console.log(value*2);
})


   