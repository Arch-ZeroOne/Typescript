"use strict";
//* Optional Properties -> is commonly used to declare that a specific value is optional
Object.defineProperty(exports, "__esModule", { value: true });
//We can now then set the properties to optional for instance we dont want any student to have a famiBackground
const student1 = {
    name: "Windyl Monton",
    age: 20,
    isEnrolled: true,
    family: {
        familyName: "Monton",
        isComplete: false,
    },
};
//Here for instance student2 does not wanna share family background
//now we wont receive any error at our end in here
const student2 = {
    name: "Jhon Monton",
    age: 19,
    isEnrolled: true,
};
//# sourceMappingURL=optionalProperties.js.map