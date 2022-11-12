// function propsCount(currentObject){                   //task 1
//     return Object.keys(currentObject).length;
// }

// let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development"
// };
// console.log(propsCount(mentor));

// function MyObject(user,age,hobby,city,job) {                                   //task 2

// this.user = user ,
// this.age = age ,
// this.hobby = hobby ,
// this.city = city ,
// this.job = job ,
// this.FullInfo = function() {
// return this.user + " " +this.age +" " +this.hobby +" " +this.city +" " + this.job
// }
// };
// function showProps(obj) {
// console.log(Object.values(obj));
// console.log(Object.keys(obj));

// }
// console.log(showProps({Alex:1982,Josh: 1994,Sam : 1977,Frank : 1990,Andrew : 1988}))


// let Me = MyObject("Me","17","cycling","Mukachevo","No")
// console.log(FullInfo(Me))








// class Person {                                                          //task 3
//     constructor(name, surname) {
//         this.surname = surname
//         this.name = name
//     }
//     showFullName(){
//        return console.log(this.surname + "" + this.name)
//     }
// }
// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(middleName){
//         return (this.surname + " " + this.name + " " + middleName )
//     }
//     showCourse(){
//         if (this.year < 2016)
//         alert("Your year data is wrong")
//         else
//         return console.log("Current course :", 2022 - this.year)
//     }
// }
// const stud1 = new Student("Petro", "Petrenko", 2015) ;
// const stud2 = new Student("Vasyl","Vasylenko", 2016)
// console.log(stud1.showFullName("Petrovych")) ;
// console.log(stud2.showFullName("Vasylevich")) 
// stud1.showCourse() ;
// stud2.showCourse() ;

// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
//        1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
//        2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
//        3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
// 	4) Вивести значення зарплати з новим experience.
// 	5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value 
// 	6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.

// class Worker {                                                //task 4
//     #experience = 1.2
//     constructor(fullName,dayRate,workingdays){
//     this.fullName = fullName
//     this.dayRate = dayRate
//     this.workingdays = workingdays
//     }
//     showSalary() {
//         return (this.dayRate * this.workingdays)
//     }
//     showSalaryWithExperience(){
//         return (this.dayRate * this.workingdays * this.#experience)
//     }
//     set ExpSet(value) {
//         if (value < 0) 
//         throw new Error("Negative experience ");
//         this.#experience = value;
//     }
//     get exp(){
//         return this.#experience
//     }
// }
// let worker1 = new Worker("John Johnson", 20, 23)
// console.log(worker1.showSalaryWithExperience());
// worker1.ExpSet = 1.5;
// console.log("New experience: " + worker1.showSalaryWithExperience());
// let worker2 = new Worker("Tom Tomson", 48, 22)
// worker2.ExpSet = 2;
// let worker3 = new Worker("Andy Ander", 29, 23)
// worker3.ExpSet = 1;
// let Workers = [worker2 , worker1 , worker3]
// function sortWorkers() {
//         Workers.sort(function(a,b){                   
//             return a.ExpSet - b.ExpSet;
//         });
//         return Workers
//     }
   
//     sortWorkers(Workers) //WHY [object Object],[object Object],[object Object]??
//     alert (Workers)
//     function showWorkersList(Workers) {
//             console.log('Sorted salary: ');
//             for (let i = 0; i < Workers.length; i++) {
//                 console.log(Workers[i].fullName + ': '+ Workers[i].showSalaryWithExperience())
//             }
//         }
//         showWorkersList(Workers);

// class GeometricFigure {                                   //task 5
//   getArea() {
//     return 0;
//   }

// toString() {
//   return Object.getPrototypeOf(this).constructor.name;
// }
// }
// class Triangle extends GeometricFigure {
//   constructor(b,h){
//     super()
//     this.base = b;
//     this.height = h;
//   }
  
//   getArea() {
//     return this.base * this.height / 2;
//   }
// }

// class Square extends GeometricFigure {
//   constructor(a) {
//     super()
//     this.side = a
//   }

//   getArea() {
//     return this.side ** 2
//   }

// }

// class Circle extends GeometricFigure {
//   constructor(r){
//     super()
//     this.radius =r
//   }

//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }
//   }

// function handleFigures(figures) {
//   return figures.reduce(function(sum,figure)) {
//     if(figure instanceof GeometricFigure){
//       console.log(`Geometric figure : ${figure.toString()}` - area : ${figure.getArea})
//       return sum + figure.getArea()
//     }
//     throw Error ('Bad argument figure.');
//   }
// }

// const figures = [new Triangle(4,5),new Square(7),new Circle(5)]

// console.log(handleFigures(figures))
