let x = 1 ;                                                      //task 1
let y = 2 ;

let res1 = String(x)+String(y) ;
console.log(res1) ;
console.log(typeof res1) ;

let res2 = Boolean(x) + String(y) ;
console.log(res2);
console.log(typeof res2) ;

let res3 = Boolean(x + y) ;
console.log(res3) ;
console.log(typeof res3) ;

let res4 = 'x' - 'y' ;
console.log(res4) ;
console.log(typeof res4) ;

let z = prompt ("Enter a number") ;                                //task 2
if (z>=0 && z % 2 === 0) {
console.log(z ,'is more than 0 and multiple to 2')
}
else
{console.log(z ,'is NOT more than 0 and multiple to 2')
}
if (z % 7 === 0) {
console.log(z,'is multiple to 7')
}
else {
console.log(z,'is NOT multiple to 7')
}

let NewArray = [1,"Kyiv",true,null]                                             //task 3
alert('There are '+ NewArray.length + ' elements in the array')
NewArray[4] = prompt('Add the new element')
alert ([NewArray[4]])
alert('There are '+ NewArray.length + ' elements in the array now')
NewArray.splice(0,1);
alert(NewArray);

let cities = ["Rome", "Lviv", "Warsaw"];                                              //task 4
alert('"' + cities.join("*") +'"');

let YourAge = prompt('Enter your age')                                               //task 5
if (YourAge >= 18) {
    alert('Your age is enough for going through')
}
else if(YourAge <= 18 && YourAge > 0) {
    alert('ACHTUNG!KID!!!')
}
else {
alert('You had to enter the number')
}

let Side1 = prompt('First side')    ;                                                  //task 6
let Side2 = prompt('Second side')   ;
let Side3 = prompt('Third side')    ;

let a = Number(Side1) ;                                                               
let b = Number(Side2) ;
let c = Number(Side3) ;

let HalfPerimeter = ( (a+b+c) / 2) ;
let Square = Math.sqrt(HalfPerimeter * (HalfPerimeter - a) *(HalfPerimeter - b) * (HalfPerimeter-c) ) 
//a) 
if (isNaN(Square) == true) {
    alert ('Incorrect data')
}
else {
    alert('The square of your triangle is ' + Square.toFixed(3))
}
// b)
let Square1 = a**2
let Square2= b**2
let Square3= c**2
if (
    Square1 + Square2 === Square3 ||
    Square1 + Square3 === Square2 ||
    Square2 + Square3 === Square1
 ) 
{
    console.log('triangle is rectangular')
}
else {
    console.log('triangle IS not restangular')
}

now= new Date();        
hours= now.getHours();
console.log('now is '+hours )
//1
if (hours<6) 
{
    console.log("Good night") 
}
else if	(hours<12) {
    console.log("Good morning")
}
else if (hours<18) {
    console.log("Good day")
}
else {
    console.log("Good evening")
}
//2
switch(hours){
    case 23: console.log("good night"); break ;
    case 0: console.log("good night"); break ;
    case 1: console.log("good night"); break ;
    case 2: console.log("good night"); break ;
    case 3: console.log("good night"); break ;
    case 4: console.log("good night"); break ;
    case 5: console.log("good night"); break ;
    case 6: console.log("good morning"); break ;
    case 7: console.log("good morning"); break ;
    case 8: console.log("good morning"); break ;
    case 9: console.log("good morning"); break ;
    case 10: console.log("good morning"); break ;
    case 11: console.log("good morning"); break ;
    case 12: console.log("good day"); break ;
    case 13: console.log("good day"); break ;
    case 14: console.log("good day"); break ;
    case 15: console.log("good day"); break ;
    case 16: console.log("good day"); break ;
    case 17: console.log("good day"); break ;
    case 18: console.log("good evening"); break ;
    case 19: console.log("good evening"); break ;
    case 20: console.log("good evening"); break ;
    case 21: console.log("good evening"); break ;
    case 22: console.log("good evening"); break ;
}













