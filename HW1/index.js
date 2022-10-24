console.log("Kozak");                                              //task 2

let first = "1"                                                    //task 3
let second = "2"
alert (first + ' and ' + second)
first = second 
alert (first + ' and ' + second)               

let object = {                                                    //task 4
    str: "object", 
    age: 2,
    avaible: true,
    color: undefined,
    adress: null
};

console.log(object);

console.log(typeof object.str);
console.log(typeof object.age);
console.log(typeof object.avaible);
console.log(typeof object.color);
console.log(typeof object.adress) ;


let isAdult = confirm("To continue,your age must be more than 18") ;  //task 5
console.log(isAdult);
 
const me = {                                                 //task 6
myname: "Andrii", //string                                     
surname: "Kozak" , //string
studygroup: 1 , //number
birthyear :2004 , //number
ismarried: false , //boolean
}
console.log('name is ' + typeof me.myname) ;
console.log('surname is ' + typeof me.surname) ;
console.log('group is ' + typeof me.studygroup) ;
console.log('birthyear is ' + typeof me.birthyear) ;
console.log('ismarried is ' + typeof me.ismarried) ;
console.log(me) ;
console.log(me.studygroup,me.birthyear,me.ismarried,me.myname,me.surname,)

let login = prompt('Please,enter your Nickname') ;                    //task 7
let mail = prompt('Please,enter your E-mail') ;
let password = prompt('Please,enter your Password') ;
alert ('Dear '+ login + ' your e-mail is ' + mail + ' and your password is ' + password) ;

let SecInMinute = 60 ;                                                 //task 8
let SecInHour = SecInMinute * 60 ;
let SecInDay = SecInHour * 24 ;
let Months = prompt ('Enter the number of days in the month') ;
let SecInMonth = Months * SecInDay ;
alert('There is ' + SecInHour + ' seconds in the hour, ' + SecInDay + ' in the day and ' + SecInMonth + ' in the month.')





                            


