let arr = [2, 3, 4, 5];                                //task 1
let mn = 1;


for (let i = 0; i < arr.length ; i += 1) {
    mn *= arr[i];
    
};
console.log(mn);

let mn2 = 1

let i = 0;            
while (i < arr.length) {
    mn2 *= arr[i];
    i += 1; 
};
console.log(mn2);

for (let i = 0 ; i < 16 ; i +=1) {                         //task 2
if (i % 2 === 0 ) {
    console.log(i + ' is even')
}
else {
    console.log (i + ' is odd')
}
}

let ar = [] ;                                            //task 3
for (let k = 0 ; k<5 ; k += 1) {
   let num = Math.random()*500 ;
    console.log(num.toFixed(0)) ;
}

function raiseToDegree(a, b) {                          //task 4
    a = prompt("First number");
    b = prompt("Second number");
    let num1 = Number(a);
    let num2 = Number(b);
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return num1 ** num2;
    } else {
        alert("Error,one or more numbers in function are not INT");
        return raiseToDegree(a, b);
    };
}
console.log(raiseToDegree())

let c = 0;                                            //task 5
 function findMin() {
     for (let i = 0; i < arguments.length; i +=1) {
        if (arguments[i] < c) {
           c = arguments[i];
       }
   }
    return c;
}
 findMin(12, 14, 4, -4, 0.2);
 console.log(c); 

let num1 = +prompt('first')
let num2 = +prompt('second')
let num3 = +prompt('third')
let num4 = +prompt('fourth')
let num5 = +prompt('fifth')

 let nums = [num1,num2,num3,num4,num5];
 console.log (Math.min.apply(Math, nums))

 function findUnique(arr) {                           //task 6
    return new Set(arr).size === arr.length;
    }
 console.log(findUnique([1, 2, 3, 5, 3]));
 console.log(findUnique([1, 2, 3, 5, 11]));

   //                                                //task 7 //










 let str = prompt("type a message here");                    //task 8
   
 function upcase(str) {
 
return str.replace(/(^|\s)\S/g, function(a) 
{return a.toUpperCase()})
 
 }
 
console.log(upcase(str))
  


