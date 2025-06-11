"use strict"; //treat all js code as newer version

//alert(3+3) we are using node jd not browser

console.log(3+3);//code readability should be high
 console.log("vani")

 let name="vani"
 let age = 18
 let isloggedIn = false
 let state;

 //number =>2 to power 53
 //bigint 
 //string => ""
 //boolean => true/false
 //null =>standalone value
 //undefined =>
    //symbol =>unique


 //object
//null ek object ka datatype h aur undefined ka datatype undefined hi hai
 console.log(typeof "vani");

 //***summary*** */
 //jis type datatype store hote h uss basis pe 2 type

 //primitive-call by value

 //7 type: String,Number,Boolean,null,undefined,Symbol,BigInteger

 const score=100
 const scoreValue=100.3
 const isLoggedIn=false
 const outsideTemp=null
 let userEmail

 const id= Symbol('123')
 const anotherId = Symbol('123')

 const bigNumber = 346744314642333n

 //reference (Non Primitive)

 //Array,Objects,Functions

 const heros = ["shaktiman","naagraj","doga"];
 let myObj={
   name:"vani",
   age:20,
 }

 const myFunction = function(){
   console.log("Hello world");

 }
 console.log(typeof bigNumber);

 //https://262.ecma-international.org/5.1/#sec-11.4.3
 