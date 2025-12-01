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

//
// const nestedArray = [1, 2, 3, 4, [4, 5, 6], [3, 1, [0, 3]]];

// const flatArray = (arr) => {
//   if (typeof arr !== "object") return;

//   const flatenArray = [];
//   let sum = 0;
//   arr.forEach((element) => {
//     if (element < 3) return;
//     if (Array.isArray(element)) {
//       const response = flatArray(element);
//       flatenArray.push(...response);
//       sum += response.reduce((acc, curr) => acc + curr, 0);
//       return;
//     } else {
//       flatenArray.push(element);
//       sum += element;
//     }
//   });

//   console.log(sum);
//   return flatenArray;
//   //   return flatenArray.reduce((acc, curr) => acc + curr, 0);
// };

// console.log(flatArray(nestedArray));

//

// const flatArray = (arr) => {
//   if (typeof arr !== "object") return;
//   const flatenArray = [];

//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       console.log("array", element);
//       const response = flatArray(element);
//       flatenArray.push(...response);
//       return;
//     } else {
//       flatenArray.push(element);
//     }
//   });
//   return flatenArray;
// };

// console.log(
//   flatArray(nestedArray)
//     .filter((element) => element > 3)
//     .reduce((acc, curr) => acc + curr, 0)
// );

// const reverseString = (str) => {
//   let reversed = "";
//   for (let index = str.length - 1; index >= 0; index--) {
//     reversed += str[index];
//   }
//   return reversed;
// };
// console.log(reverseString("sameer"));

// const findDuplicate = (arr) => {
//   const include = [];
//   const duplicate = [];
//   arr.forEach((element) => {
//     if (include.includes(element)) {
//       duplicate.push(element);
//       return;
//     }
//     include.push(element);
//   });
//   return include;
// };
// console.log(findDuplicate([1, 2, 3, 4, 1, 4]));

// const findMaximum = (arr) => {
//   const uniqueArr = [...new Set(arr)];
//   return uniqueArr.sort((a, b) => b - a)[0];
// };
// console.log(findMaximum([1, 2, 3, 4, 55, 5, 1, 4]));

const vowel = ["a", "e", "i", "o", "u"];
const checkVowel = (arr) => {
  const length = [];
  arr.forEach((element) => {
    if (vowel.includes(element)) {
        return
    }
      length.push(element);
  });
  return length;
};
console.log(checkVowel(["s", "o", "u"]));
