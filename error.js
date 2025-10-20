

// const error = {
//     username: ["username must be 8 charecters"],
//     password: "password must be matched woth confirm password ",
//     email: "email must be requried by @"
// }


// const structorError = (errors) => {
//     const errorStructure = {}
//     console.log(Object.keys(errors))
//     if (typeof errors === 'object') {
//         Object.keys(errors).forEach((error) => {
//             if (Array.isArray(errors[error])) {
//                 errorStructure[error] = errors[error].join('')
//             }
//             else {
//                 errorStructure[error] = errors[error]
//             }
//         })
//     }
//     return errorStructure

// }

// console.log(structorError(error))













const apiData = [
    { id: 1, name: "Ali", skills: ["JS", "React"] },
    { id: 2, name: "Sara", skills: "Python" },
    { id: 3, name: "Omar" } // missing skills
]



// // const normolizeData = (apiData) => {

// //     const apiKeys = ['id', 'name', 'skills']
// //     const structure = []
// //     apiData.map((obj) => {
// //         if (typeof obj === 'object') {
// //             Object.keys(obj).forEach((value)=>{
// //                 if (obj.hasOwnProperty(value)) {
// //                     console.log(true)
// //                 }
// //                 else{
// //                     console.log(false)
// //                 }
// //             })
// //         }
// //     })
// //     return structure

// //     // console.log(data)

// // }



// // console.log(normolizeData(apiData))













// const normolizeData = (apiData) => {
//     const apiKeys = ['id', 'name', 'skills']
//     const structure = []
//     apiData.forEach((obj) => {
//         const temp = {}
//         Object.keys(obj).forEach((key) => {
//             if (key === 'skills') {
//                 if (Array.isArray(obj[key])) {
//                     temp[key] = obj[key]
//                 }
//                 else {
//                     temp[key] = obj[key].split(',')
//                 }
//             }
//             else{
//                 temp[key] = obj[key]
//                 temp['skills'] = []
//             }

//         })
//         structure.push(temp)
//     })
//     return structure
// }

// console.log(normolizeData(apiData))








// const normalizeUsers = (users) => {
//   return users.map(user => ({
//     ...user,
//     skills: Array.isArray(user.skills) ? user.skills : user.skills ? [user.skills] : []
//   }))
// }

// console.log(normalizeUsers(apiData))




















const user = {
  id: 1,
  profile: { name: "Ali", age: 20 },
  contact: { email: "ali@mail.com", phone: "12345" }
}
const flatenObject = (users)=>{
    const structureObj = {}
    Object.keys(users).forEach((item)=>{
if (typeof users[item] === 'object' && users[item] !== null) {
    Object.keys(users[item]).forEach((nested)=>{
        structureObj[`${item}.${nested}`] = users[item][nested]
    })
}
else{
     structureObj[item] = users[item]
}
    })
    return structureObj
    
}


console.log(flatenObject(user))









// const user = {
//     id: 1,
//     profile: { name: "Ali", age: 20 },
//     contact: {
//         email: "ali@mail.com", phone: "12345", detail: {
//             fullName: "AliAhsan",

//         }
//     }
// }




// const flatObject = (obj) => {
//     let structureObj={}
//     Object.keys(obj).forEach((keys) => {
//         if (typeof obj[keys] === 'object' && obj[keys] !== null) {
//            const res = flatObject(obj[keys])
//            Object.assign(structureObj,res)
//            return
//         }
//         structureObj[keys] = obj[keys]
//     })
//     return structureObj
// }

// console.log(flatObject(user))











// const user = {
//     id: 1,
//     profile: { name: "Ali", age: 20 },
//     contact: {
//         email: "ali@mail.com", phone: "12345", detail: {
//             fullName: "AliAhsan",

//         }
//     }
// }




// const flatObject = (obj,parient="") => {




// }

// console.log(flatObject(user))





