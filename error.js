

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


















const normolizeData = (apiData) => {
    const apiKeys = ['id', 'name', 'skills']
    const structure = []
  return apiData.map((obj) => ({
        ...obj
    }))


    // return structure

    // console.log(data)

}



console.log(normolizeData(apiData))