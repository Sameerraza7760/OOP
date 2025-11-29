// const name = "sameer";

// // const removeExtraAlphabet = (arr) => {
// //   const removeDuplicate = arr.split("");
// //   //   console.log(removeDuplicate);
// //   return [...new Set(removeDuplicate)];
// // };

// // console.log(removeExtraAlphabet(name));

// const removeExtraAlphabet = (name) => {
//   const newArray = [];
//   const arr = name.split("");
//   arr.forEach((element) => {
//     if (newArray.includes(element)) {
//       return;
//     } else {
//       newArray.push(element);
//     }
//   });

//   return newArray.join("");
// };

// console.log(removeExtraAlphabet(name));

// const unstructureArray = {
//   username: ["username is required"],
//   password: ["password is required"],
//   email: "email is required",
// };

// const returnStructureArray = (obj) => {
//   const structureObj = {};
//   if (typeof obj !== "object") {
//     return;
//   }

//   Object.keys(obj).forEach((elem) => {
//     if (Array.isArray(obj[elem])) {
//       structureObj[elem] = obj[elem].join("");
//     } else {
//       structureObj[elem] = obj[elem];
//     }
//   });
//   return structureObj;
// };

// console.log(returnStructureArray(unstructureArray));

// const addTwoNumber = (num1, num2) => {
//   let value = null;
//   for (let index = 0; index < num2; index++) {
//     value += num1;
//   }
//   return value;
// };
// console.log(addTwoNumber(2, 3));

// const vowel = ["a", "e", "i", "o", "u"];

// const arr = ["a", "o", "n", "d"];

// const check = vowel.filter((elem) => arr.includes(elem));
// console.log(check);
















