/*1*/
let = "message";
message = "Rasul"
console.log(message);
  
/*2*/

let fruits = ["Apple", "Orange", "Plum" , "Lemon" , "WaterMelon"]
let b = (fruits.splice(1));
console.log(fruits);

/*3*/
let userr = {     
    namee: "John",  
    age: 30,
    job: "Programming"
    
  };
  delete userr["age"]
  delete userr["namee"]
  console.log(userr);
  

  /*4*/


  
  let a = 6
 function myfunction(a) {
    return a*a ;
}

/*5*/

let ii = 0;
while (ii < 10) {
console.log(ii);
ii++;
}
 

/*7*/

let cars = ["BMW" , "Mercedes" , "Audi"  , "Bugatti" , "Lamborghini"]
let add = cars.push('Chevrolet') 
console.log(cars);


/*8*/

const myBirthday = '18.04.1982';

/*9*/
let f = 7
let sum = function(f) {
    return f * f;
  };
  

/*10*/

    let names = [1,2,3].forEach((item, index, array) => {
    (`${item} index is ${index} in ${array}`);
  });
 
  /*12*/

  let colors =  ["Red" , "Green" , "Blue"]
 let removeColor = colors.shift()
 console.log(colors);

 /*14*/

 let num = [1,2,3,4,5,6,7,8,9]
 let lenght = (num.length)
 console.log(lenght);

 /*17*/

 let arrr = [1, 2, 3, 4, 5];

let result = arrr.reduce((sum, current) => sum + current, 0);

(result);

/*19*/

let iii = 0;
while (iii < 10) {
console.log(iii);
iii++;
}

/*20*/

var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
if (arr[i] > largest ) {
largest = arr[i];
}
}
console.log(largest);


/*22*/


let lengths = ["Bilbo", "Gandalf", "Nazgul" , 'Rasul'].map(item => item.length);
(lengths); 

/*23*/

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 2);
(user.name);

console.log(user);

/*26*/

let namess = [12,1,43,7,6,44,543,6,6]
let string = namess.toString()
console.log(string);

