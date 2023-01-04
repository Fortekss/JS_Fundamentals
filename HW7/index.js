/ // Task 1
// let openWindow;

// function openWin() {
//     openWindow = window.open("", "", "width=300, height=300");
// }

// setTimeout(function(){openWindow.resizeTo(500, 500)}, 2000);
// setTimeout(function(){openWindow.moveTo(200, 200)}, 4000);
// setTimeout(function(){openWindow.close()}, 6000);

// // END


// // Task 2

// let p = document.querySelector("#text");

// function changeCSS(){
//     p.style.color = "red";
//     p.style.fontSize = "20px";
//     p.style.fontFamily = "Comic Sans MS";
// }

// // END


// // Task 3
// let body = document.querySelector("body");

// document.querySelector(".first_button").addEventListener("click", changeColor);
// document.querySelector(".second_button").addEventListener("dblclick", changeBackground);
// document.querySelector(".third_button").addEventListener("mousedown", mouseDown);
// document.querySelector(".third_button").addEventListener("mouseup", mouseUp);
// document.querySelector(".link").addEventListener("mouseover", mouseOver);
// document.querySelector(".link").addEventListener("mouseout", mouseOut);

// function changeColor() {
//     body.style.backgroundColor = "blue";
// }

// function changeBackground() {
//     body.style.backgroundColor = "pink";
// }
// function mouseDown() {
//     body.style.backgroundColor = "brown";
// }
// function mouseUp() {
//     body.style.backgroundColor = "white";
// }
// function mouseOver() {
//     body.style.backgroundColor = "yellow";
// }
// function mouseOut() {
//     body.style.backgroundColor = "white";
// }

// // END


// Task 4

// document.getElementById("myBtn").addEventListener("click", deleteOption);
// let selectobject = document.getElementById("mySelect");

// function deleteOption() {
//     let selected = [];

//     for (let i = 0; i < selectobject.options.length; i++) {
//         selected[i] = selectobject.options[i].selected;
//     }

//     // first method
//     // let index = selectobject.options.length;
//     // while (index--) {
//     //     if (selected[index]) {
//     //         selectobject.remove(index);
//     //     }
//     // }

//     // second method
//     for (let index = 0; index < selected.length; index++) {
//         if (selected[index]) {
//             selectobject.remove(index);
//         }
//     }
// }

// END

// // Task 5

// let btn = document.getElementById("myBtn")
// btn.addEventListener("mouseover", mouseOver);
// btn.addEventListener("click", mouseClick);
// btn.addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     const p = document.createElement("p");
//     const nodes = document.createTextNode("Mouse on me!");
//     p.appendChild(nodes);
//     document.querySelector("#myDiv").appendChild(p);
// }

// function mouseClick() {
//     const p = document.createElement("p");
//     const node = document.createTextNode("I was pressed!");
//     p.appendChild(node);
//     document.querySelector("#myDiv").appendChild(p);
// }

// function mouseOut() {
//     const p = document.createElement("p");
//     const node = document.createTextNode("Mouse is not on me!");
//     p.appendChild(node);
//     document.querySelector("#myDiv").appendChild(p);
// }

// // END

// // Task 6
// window.onresize = displayWindowSize;
// window.onload = displayWindowSize;

// function displayWindowSize() {
//     myWidth = window.innerWidth;
//     myHeight = window.innerHeight;
//     document.getElementById("test").innerHTML = "Width: " + myWidth + " Height: " + myHeight;
// };

// // END

// Task 7

const cityOfUSA = ["New York", "Boston", "Chicago", "Washington"];
const cityOfGermany = ["Berlin", "Hamburg", "Cologne", "Dortmund"];
const cityOfUkraine = ["Lviv", "Kyiv", "Kherson", "Kharkiv"];

const countryDropDown = document.querySelector("#countryDropDown");
const cityDropDown = document.querySelector("#cityDropDown");
const p = document.querySelector("#country");

countryDropDown.addEventListener("change", e => {
    p.innerText = e.target.value;
    if (e.target.value == "USA") {
        removeAll();
        for (let i = 0; i < cityOfUSA.length; i++) {
            cityDropDown.options[cityDropDown.options.length] = new Option(cityOfUSA[i], cityOfUSA[i]);
        }
    } else if(e.target.value == "Germany") {
        removeAll();
        for (let i = 0; i < cityOfUSA.length; i++) {
            cityDropDown.options[cityDropDown.options.length] = new Option(cityOfGermany[i], cityOfGermany[i]);
        }
    } else if (e.target.value == "Ukraine"){
        removeAll();
        for (let i = 0; i < cityOfUSA.length; i++) {
            cityDropDown.options[cityDropDown.options.length] = new Option(cityOfUkraine[i], cityOfUkraine[i]);
        }
    }
})

cityDropDown.addEventListener("change", e=>{
    p.innerHTML += ", " + e.target.value;
})

function removeAll() {
    while (cityDropDown.options.length > 0) {
        cityDropDown.remove(0);
    }
}