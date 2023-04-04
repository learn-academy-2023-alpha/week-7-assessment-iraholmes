// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// PsuedoCode
// a) Create a test with an expect statement using the variable provided.
// Create a function called KeyValues that takes in the array of objects and returns an array with a sentence about each person with their name capitalized.
// Create a parameter called sentences that will be used to iterate through the array
// use the method .map() to iterate through the arrays (value) at the objects: name allowing me to return a new array with the first letter of the name capitalized and add a sentence.
// I will need to separate the letters in string of the name-object 
// Create a new array to place the newly broken up string allowing me to move to the next step.
// I will use .map to iterate through the new array loooking for the first and last name
// Push the value of the words into the empty array and use the index of the first letter to capitalize the first letter of the first and last name
// Add the now separated strings together with addition and return the expected output using string interpolation.
describe("keyValues", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(keyValues(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// First Test Outcome:  ReferenceError: keyValues is not defined
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
//Working Code!!
// b) Create the function that makes the test pass.
const keyValues = (sentences) =>{
      return sentences.map(value =>  {
        const capitalLetter = value.name.split(" ")
        let emptyArray = []
         capitalLetter.map(word => {
          return emptyArray.push(word[0].toUpperCase() + word.slice(1)) 
      })
          return `${emptyArray.join(" ")} is ${value.occupation}.`
  })
}
console.log(keyValues(people));

// BELOW IS THE THOUGHT PROCESSE BECFORE COMING TO MY FINAL CONCLUSION

// if (value.name.includes("f,p,z,a,d")) {
//Testing Code
// const keyValues = (sentences) =>{
//   let value = sentences
//   return sentences.map(value => {
//     for (let i = 0; i < value.length; i++) {
//       value.name[i] = value.name[i][0].toUpperCase() + value.name[i].substr(1);
//       return `${value.name} is a ${value.occupation}`
// }




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// PsuedoCode: 
// a) Create a test with an expect statement using the variables provided.
// Create a function named newArray that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// find the method tht will filter out all integers and allow me to iterate over them.
// find the remainder of the integers in the array by using the % 3 === 0 modulous.
// right the return that will give me the expected output of [ 2, 0, -1, 0 ] & [ 2, 1, -1 ]
// Determine whether or not to use .map/ OR .filter/
// using Type of I can target only the numbers in the array
// Using .filter I can extract the numbers from the array then use .map to iterate through the array and return a new array that holds the number values of the previous array
// I will need to return the values of the array divided by 3
describe("newArray", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(newArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(newArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})


const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// First Outcome: ReferenceError: newArray is not defined
// b) Create the function that makes the test pass.
const newArray = (numbers) => {
  return numbers.filter((value) => {
  return typeof value === "number"
  }).map((value) => {
    return value % 3 
  })

}
console.log(newArray(hodgepodge1));
// COMMENTED OUT CODE ARE DIFFERENT IDEAS BEFORE COMING ACCROSS MY CONCLUSION
// const newArray = (numbers) => {
//     return numbers.map(value =>  {
//     const divided = value <= 50
//     let newNum =[]    
//     return newNum.push(divided % 3)
//     })
//   }

// const newArray = (array) => {
//     return arraynumber.isInteger(value => {
//       let arr = []
//     const newMath = (number.isInteger(value) === true) 
//         return arr.push(array % 3)
//       })
//     }
//  Thought proccess is to get the numbers (filtered out of the array and then add them to a new array and iterate over them.)
// const newArray = (array) => {
//   return  array.map(value => {
//     const doOver = value(number.isInteger(array))
//     const leftOver = []
//     doOver.map(math => {
//     return (array % 3)

//     })
//   })
// }

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
// PSUEDO CODE: 
// a) Create a test with an expect statement using the variables provided.
// I will create a function that will take in the arrays given. titles addedUp
// Use the paraemeter total to signify those arrays
// current array will hold my total varable and use the .map method to iterate through the arrays while storing them inside of the currentArray variable
// My first return will cube the values of the array
// create a variable to hold the potential sum of the values in the given array
// use the forEach method to perform addition on each instance inside of the value array.
// return the total sum of the array after it has been cubed.
describe("addedUp", () => {
  it("returns a generic greeting", () => {
    expect(addedUp(cubeAndSum1)).toEqual(99)
    expect(addedUp(cubeAndSum2)).toEqual(1125)
  })
})



// ReferenceError: addedUp is not defined
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
const addedUp = (total) => {
  const currentArray = total.map(value => {
    return (value ** 3)
  })
  let sum = 0 
 currentArray.forEach (x => {
    sum += x
  }) 
  return sum
}
  console.log(addedUp(cubeAndSum1));
  // const allnums = (addEm) => {
  //   return (num ** 3 + total)
  // }
  // const addedUp = (total) => {
  //   for (let i = 0; i < total.length; i++) {
  //     return (total[i] ** 3)
  //   }
  // }
  // console.log(addedUp(cubeAndSum1))
  // console.log(addedUp(cubeAndSum2))
  //Math is working, figure out why only the first number is being iterated on.