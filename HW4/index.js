let width = +prompt("Enter the first side: ");                           //task 1
let height = +prompt("Enter the second side: ");
let area;
function calcRectangleArea(width, height,area){


try {
    if(isNaN(width) || isNaN(height)){
            throw new Error("Enter the correct number");
         }
         else if (width < 1 || height < 1) {
            throw new Error ('Enter the correct number')
          }
     else {
         area = width * height;
         alert(`Area = ` + area ); }

     }

     catch (error) {
         alert(error.message);
     }
return area 

 }
 console.log(calcRectangleArea(width,height,area))




 let YourAge = prompt('Please enter your age') ;                   //task 2
function AgeCheck(YourAge)
{
try {
if (isNaN(YourAge) == true )
throw new Error ('Please enter the number')
if (YourAge === "")
throw new Error ('The field is empty!')
if (YourAge < 14)
throw new Error("You're too young") 
alert ("Now You're in!")
}
catch (error) {
    alert(error.message)
}
}
AgeCheck(YourAge);

class MonthException {                                  //task 3
    constructor(message) {
this.name = "MonthException";
this.message = message;
    }
    }
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let data = monthNames[prompt('Enter the number of month') -1]
    function showMonthName(data) {
    try {
    	if (data < 0 || data > 11) throw new MonthException("Incorrect month number");
    	} catch (err) {
     		return err.name + " " + err.message;
    	}
       
    	return (data);

    }
    
 console.log(showMonthName(data));


 function showUser(id) {                                                         //task 4
     	if (id < 0) throw new Error("User ID can't be negative: ");
     	return {id: id}
     }
     function showUsers(ids) {
     	let users = []
     	for (let i = 0; i < ids.length; i++) {
             try {
             users.push(showUser(ids[i]))
     		} catch (err) {
                 console.log(err + ids[i])
     		}
     	}
     	return console.log(users)
     }
     showUsers([7, -12, 44, 22])
