// what is oop

// oop is an structor of programing that what kind of structure you prefered for doing programing like in object format

// what is object in OOp concept

// ans is actally a collection of properties and method

// parts of OOP

// Object Literal
//  - Constructor
// - classes
// - Instances (new ,this )
// -protoTypes

// Four pillers Of Oops
//Abstraction
//Encapsulation 
//Inheritence
//PolymorPhism

// what is constructor
// a special method in class for make the special object where this object contain the nesseay data
// and autometically call when the new instance of class create

// why we used constuctor

// Initialization: The constructor is used to initialize the properties of the class when a new instance is created.
// Object Setup: It helps in setting up the necessary state of the object based on parameters passed when the object is instantiated.
// Code Reusability: The constructor allows us to create multiple instances of a class with different initial values without writing repetitive code.

// what is classes
// a piece of collection where method and properties are defiend

// /Why Use Classes?
// Organize code: Classes provide a clear structure for creating objects with similar behavior and properties.
// Encapsulate data and behavior: It keeps related functions (methods) and variables (properties) together.
// const user = {
//   username: "sameer",
//   age: 20,

//   getUserName() {
//     console.log(this);
//   },
// };

// user.age = 90;

// console.log(user.getUserName());

// now for exampale we need a user2

// const user2 = {
//   username: "sameer",
//   age: 20,

//   getUserName() {
//     console.log(this);
//   },
// };

// user.age = 90;

// console.log(user.getUserName());

// thats is the code repeatation for same code thats wrong thats why we need constructor
class User {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }

  getUserName() {
    return this;
  }
}

const newUser1 = new User("sameer", 20);
// console.log(newUser.getUserName());

// in this if we need the second user so we just need to write only this line
const newUser2 = new User("usman", 21);

// thats why we used Construction of reuibility

// now

// the Promise also constructor

// const newPromise = new Promise();
// const newDate = new Date();

// in this the new keyword also doing and shows this is constructor method and new is used for create the multiple  instances
// of same object

// now we make the function thats works like constructor

function user(username, isLoggedin, loginCount) {
  (this.username = username),
    (this.isLoggedin = isLoggedin),
    (this.loginCount = loginCount);
  this.greeting = function () {
    console.log(`Hello ${this.username}`);
  };
  return this;
}

// const userOne = user("sameer", false, 90);
// const userTwo = user("usman", true, 20);

console.log(userOne);

// crypto: [Getter],
// username: 'usman',
// isLoggedin: true,
// loginCount: 20
// }

// due to used this function instead of used constructor the information of user overaide change

// so if we used with new

const userOne = new user("sameer", false, 90);
const userTwo = new user("usman", true, 20);

// what is new keyword

// the new keyword is just like to work like if we call with new
// first step to create the empty object
// second step to make a construuctor method where the argument go and atteched woth the empty object bu using this

// Why Use new?
// Encapsulation: It allows you to create multiple instances with their own properties.
// Clarity: Using new makes it clear that you are creating a new object instance.
// Correct this Binding: Ensures that this refers to the new instance instead of the global object.
// Conclusion
// Using new with a constructor function is essential for proper object-oriented programming in JavaScript. It ensures that instances are created correctly and that properties are assigned to the right object.

// Encapsulation bundles and restricts access to data and methods.
// Abstraction hides complex implementation and exposes simpler interfaces.
// Inheritance allows classes to share and extend behavior.
// Polymorphism enables treating different types through a shared interface.

// Encapsulation

class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age; // Private-like variable (convention with _)
  }

  getAge() {
    return this._age; // Encapsulated access to _age
  }

  setAge(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    }
  }
}

const person = new Person("John", 25);
console.log(person.getAge()); // 25
person.setAge(30);
console.log(person.getAge()); // 30

// Encapsulation
// Encapsulation in JavaScript is about keeping data safe within
//  an object or class by restricting direct access and providing methods
// (getters and setters) to interact with that data.



//////////////////////////////////////      




// Abstraction
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Public method (abstracted detail)
  startCar() {
    this._igniteEngine(); // Abstracted engine ignition
    console.log("Car is starting...");
  }

  // Private method (hidden complexity)
  _igniteEngine() {
    console.log("Igniting engine...");
  }
}

const car = new Car("Tesla", "Model X");
car.startCar();
// Output:
// Igniting engine...
// Car is starting...

// . Abstraction
// Abstraction hides the complexity and only exposes the essential
// features of an object, allowing the user to interact
// with a simplified interface.



///////////////////////////////////////////////
// Inheritence

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks.

// 3. Inheritance
// Inheritance allows one class to inherit the properties and methods of another class.





/////////////////////////////////////////////////////






// 4. Polymorphism
// Polymorphism allows objects of different types
// to be treated as objects of a common super type, often by overriding methods.

class Animal {
  speak() {
    console.log("Animal speaks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks.");
  }
}

const animals = [new Animal(), new Cat(), new Dog()];
animals.forEach((animal) => animal.speak());
// Output:
// Animal speaks.
// Cat meows.
// Dog barks.



// Polymorphism lets us treat objects from different classes as
//  if they are from the same class. This means methods can work differently
//   depending on what type of object is being used, making our code more flexible and reusable.











/////////////////////////


// polymorphysim 
 





// Step 1: Parent Class (Vehicle) 

class Vehicle {
  start() {
    console.log("The vehicle is starting.");
  }

  stop() {
    console.log("The vehicle is stopping.");
  }
}


// Step 2: Child Classes that extend Vehicle 


// Now, we want to create specific types of vehicles: a car and a motorcycle.

// Car will behave differently when it starts.
// Motorcycle will behave differently when it starts.
// We’ll use extends to inherit the start() and stop() methods from Vehicle but 
// customize them for each child class. 





class Car extends Vehicle {
  start() {
    console.log("The car is starting with a smooth engine sound.");
  }
}

class Motorcycle extends Vehicle {
  start() {
    console.log("The motorcycle is starting with a loud rev.");
  }
}
 

// Step 3: Using the Classes
// Now, you can create instances of Car and Motorcycle and call the start() method. Notice that
//  even though both classes extend Vehicle, they each have their own version of start().



const myCar = new Car();
const myMotorcycle = new Motorcycle();

myCar.start();         // Output: "The car is starting with a smooth engine sound."
myMotorcycle.start();   // Output: "The motorcycle is starting with a loud rev."

myCar.stop();           // Output: "The vehicle is stopping."
myMotorcycle.stop();    // Output: "The vehicle is stopping.





// What is Happening?
// The Vehicle class defines common behavior (like start() and stop()) that all vehicles share.
// The Car and Motorcycle classes extend Vehicle, which means they inherit its methods (like stop()),
//  but they can override the start() method to provide their own unique behavior.
// We don't need to write the stop() method again in Car or Motorcycle because it was inherited from 
// Vehicle.





// Without extends:
// If you don’t use extends, you’ll have to rewrite the same methods (start(), stop())
//  in every class, which is repetitive and harder to maintain. For example:

js
class Car {
  start() {
    console.log("The car is starting with a smooth engine sound.");
  }

  stop() {
    console.log("The vehicle is stopping.");
  }
}

class Motorcycle {
  start() {
    console.log("The motorcycle is starting with a loud rev.");
  }

  stop() {
    console.log("The vehicle is stopping.");
  }
}



// import { NextRequest, NextResponse } from 'next/server';
// import ConnectedEmail from '~/models/connectedEmail';
// import {
//   validateUser,
//   sendEmailUsingCustomSmtp,
//   sendEmailUsingAppPassword,
//   sendEmailUsingGmail,
//   sendEmailUsingOutlook,
// } from '~/utils/helper';
// import axios from 'axios';
// import { google } from 'googleapis';

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();

//     const body = {
//       from: formData.get('from') as string,
//       to: formData.get('to') as string,
//       subject: formData.get('subject') as string,
//       message: formData.get('message') as string,
//       cc: formData.get('cc') as string | null,
//     };

//     // simple email helpers
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // normalize list: split on commas or semicolons, strip display names like "Name <addr>"
//     const parseEmails = (list?: string) =>
//       !list
//         ? []
//         : list
//             .split(/[,;]+/)
//             .map((s) => {
//               const trimmed = s.trim();
//               const match = trimmed.match(/<([^>]+)>$/);
//               return match ? match[1].trim() : trimmed;
//             })
//             .filter(Boolean);
//     const validateEmails = (list?: string) =>
//       parseEmails(list).every((e) => emailRegex.test(e));
//     const findInvalidEmail = (list?: string) => {
//       const emails = parseEmails(list);
//       return emails.find((e) => !emailRegex.test(e)) || null;
//     };

//     const user = await validateUser();
//     if (!user) {
//       return NextResponse.json(
//         { status: false, message: 'Unauthorized.' },
//         { status: 401 }
//       );
//     }
//     console.log('user', user);
//     const connectedEmail = await ConnectedEmail.findOne({ emailId: body.from });

//     if (!connectedEmail) {
//       return NextResponse.json(
//         { status: false, message: 'No connected email found.' },
//         { status: 400 }
//       );
//     }

//     if (connectedEmail.type === 'gmail') {
//       // validate recipients
//       const invalidTo = findInvalidEmail(body.to);
//       const invalidCc = body.cc ? findInvalidEmail(body.cc) : null;
//       if (invalidTo || invalidCc) {
//         const bad = invalidTo || invalidCc;
//         console.error('Invalid email address detected:', bad);
//         return NextResponse.json(
//           { status: false, message: `Invalid recipient or cc address: ${bad}` },
//           { status: 400 }
//         );
//       }

//       const oauth2Client = new google.auth.OAuth2(
//         process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//         process.env.GOOGLE_CLIENT_SECRET
//       );

//       oauth2Client.setCredentials({
//         refresh_token: connectedEmail.gmailRefreshToken,
//       });

//       let accessToken: string | undefined;
//       try {
//         const res: any = await oauth2Client.refreshAccessToken();
//         accessToken = res?.credentials?.access_token;
//         if (!accessToken)
//           throw new Error('Failed to obtain gmail access token');
//       } catch (err: any) {
//         console.error(
//           'Failed to refresh Gmail access token:',
//           err?.response?.data || err.message
//         );
//         return NextResponse.json(
//           {
//             status: false,
//             message: 'Failed to refresh gmail access token',
//             error: err?.response?.data || err.message,
//           },
//           { status: 500 }
//         );
//       }

//       try {
//         const ccHeader = parseEmails(body.cc).join(', ');
//         const headers: any = {};
//         if (ccHeader) headers.Cc = ccHeader;

//         const res = await sendEmailUsingGmail(
//           accessToken,
//           body.to,
//           body.subject,
//           body.message,
//           headers
//         );
//         return NextResponse.json(
//           {
//             status: true,
//             message: 'Email sent successfully',
//             data: res.data || res,
//           },
//           { status: 200 }
//         );
//       } catch (err: any) {
//         console.error('Gmail send error:', err?.response?.data || err.message);
//         return NextResponse.json(
//           {
//             status: false,
//             message: 'Failed to send via Gmail',
//             error: err?.response?.data || err.message,
//           },
//           { status: 500 }
//         );
//       }
//     } else if (connectedEmail.type === 'outlook') {
//       // validate recipients and require env vars for client credentials
//       if (
//         !process.env.OUTLOOK_CLIENT_ID ||
//         !process.env.OUTLOOK_CLIENT_SECRET
//       ) {
//         console.error('Missing Outlook client id/secret env vars');
//         return NextResponse.json(
//           { status: false, message: 'Email provider misconfigured' },
//           { status: 500 }
//         );
//       }

//       const invalidTo = findInvalidEmail(body.to);
//       const invalidCc = body.cc ? findInvalidEmail(body.cc) : null;
//       if (invalidTo || invalidCc) {
//         const bad = invalidTo || invalidCc;
//         console.error('Invalid email address detected:', bad);
//         return NextResponse.json(
//           { status: false, message: `Invalid recipient or cc address: ${bad}` },
//           { status: 400 }
//         );
//       }

//       const tokenEndpoint =
//         'https://login.microsoftonline.com/common/oauth2/v2.0/token';

//       const params = new URLSearchParams();
//       params.append('client_id', process.env.OUTLOOK_CLIENT_ID);
//       params.append('client_secret', process.env.OUTLOOK_CLIENT_SECRET);
//       params.append('grant_type', 'refresh_token');
//       params.append('refresh_token', connectedEmail.outlookRefreshToken);
//       params.append('scope', 'https://graph.microsoft.com/.default');

//       let access_token: string | undefined;
//       try {
//         const tokenResponse = await axios.post(tokenEndpoint, params, {
//           headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         });
//         if (tokenResponse.data.error) {
//           console.error('Outlook token error:', tokenResponse.data);
//           return NextResponse.json(
//             { status: false, error: tokenResponse.data.error_description },
//             { status: 400 }
//           );
//         }
//         access_token = tokenResponse.data.access_token;
//       } catch (err: any) {
//         console.error(
//           'Failed to get Outlook token:',
//           err?.response?.data || err.message
//         );
//         return NextResponse.json(
//           {
//             status: false,
//             message: 'Failed to refresh outlook token',
//             error: err?.response?.data || err.message,
//           },
//           { status: 500 }
//         );
//       }

//       try {
//         const toRecipients = parseEmails(body.to).map((addr) => ({
//           emailAddress: { address: addr },
//         }));
//         const ccRecipients = parseEmails(body.cc).map((addr) => ({
//           emailAddress: { address: addr },
//         }));

//         const emailResponse = await axios.post(
//           'https://graph.microsoft.com/v1.0/me/sendMail',
//           {
//             message: {
//               subject: body.subject,
//               body: { contentType: 'HTML', content: body.message },
//               toRecipients,
//               ccRecipients,
//             },
//             saveToSentItems: 'true',
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${access_token}`,
//               'Content-Type': 'application/json',
//             },
//           }
//         );

//         return NextResponse.json(
//           {
//             status: true,
//             message: 'Email sent successfully',
//             data: emailResponse.data,
//           },
//           { status: 200 }
//         );
//       } catch (err: any) {
//         return NextResponse.json(
//           {
//             status: false,
//             message: 'Failed to send via Outlook',
//             error: err?.response?.data || err.message,
//           },
//           { status: 500 }
//         );
//       }
//     } else if (connectedEmail.type === 'gmail-app-password') {
//       const res = await sendEmailUsingAppPassword(
//         connectedEmail,
//         body.to,
//         body.subject,
//         body.message
//       );

//       if (res.status) {
//         return NextResponse.json(
//           {
//             status: true,
//             message: 'Email sent successfully',
//             data: res.data,
//           },
//           { status: 200 }
//         );
//       } else {
//         return NextResponse.json(
//           {
//             status: false,
//             message: 'Failed to send email',
//           },
//           { status: 500 }
//         );
//       }
//     } else if (connectedEmail.type === 'custom') {
//       const res = await sendEmailUsingCustomSmtp(
//         connectedEmail,
//         body.to,
//         body.subject,
//         body.message
//       );

//       if (res.status) {
//         return NextResponse.json(
//           {
//             status: true,
//             message: 'Email sent successfully',
//             data: res.data,
//           },
//           { status: 200 }
//         );
//       } else {
//         return NextResponse.json(
//           {
//             status: false,
//             message: 'Failed to send email',
//           },
//           { status: 500 }
//         );
//       }
//     } else {
//       return NextResponse.json(
//         {
//           status: false,
//           message: `Unsupported email type: ${connectedEmail.type}`,
//         },
//         { status: 400 }
//       );
//     }
//   } catch (error: any) {
//     console.error('Error sending email:', error);

//     return NextResponse.json(
//       { status: false, message: 'Error sending email', error: error.message },
//       { status: 500 }
//     );
//   }



// }
