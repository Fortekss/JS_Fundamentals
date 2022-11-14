// //task 1
// document.getElementById("test").innerHTML = "Changed test"
// document.querySelector("#test").innerHTML = "Last"
// //task 1

// // task2
// document.getElementById("image").src = "cat.jpg"
// // task2
 
// // task3
//  let data = document.querySelectorAll('#text p')
 
//  for (let i = 0; i < data.length; i++) {
//         console.log(`Selector text ${i} ${data[i].innerText}`);

//     }
// // task3

// //task4
// let First = document.querySelectorAll('li')[0].innerText
// let Last = document.querySelectorAll('li')[4].innerText
// let Second =document.querySelectorAll('li')[1].innerText
// let Fourth =document.querySelectorAll('li')[3].innerText
// let Third =document.querySelectorAll('li')[2].innerText

// console.log(`${First} ${Last} ${Second} ${Fourth} ${Third}`)
// //second method
// function getElements() {
//    console.log(` 
//    ${document.querySelector("#list :nth-child(1)").innerHTML} //чого <li>1</li> <li>2</li>... і як викликати "1"?
//    ${document.querySelector("#list :nth-child(5)").innerHTML}
//    ${document.querySelector("#list :nth-child(2)").innerHTML}
//    ${document.querySelector("#list :nth-child(4)").innerHTML}
//    ${document.querySelector("#list :nth-child(3)").innerHTML}
//    ` 
//    )
//     };
//     getElements()
// //task4

// // task5
// document.querySelector("h1").style.backgroundColor = "lime"
// const div = Array.from(document.querySelectorAll("#myDiv>p"));
// div[0].style.fontWeight = "bold";
// div[1].style.color = "red";
// div[2].style.textDecoration = "underline";
// div[3].style.fontStyle = "italic";

// document.getElementById("myList").style.display = "flex";
// document.getElementById("myList").style.listStyle = "none";
// document.querySelector("span").style.display = "none";
// //task5

// //task 6
// function getMessage() {
//         const inp1 = prompt();
//         const inp2 = prompt();
//         input1.setAttribute('value', inp1);
//         input2.setAttribute('value', inp2);
//         input1.value = inp2;
//         input2.value = inp1;    
//     }
//     getMessage()
//     //task 6