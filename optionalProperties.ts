//* Optional Properties -> is commonly used to declare that a specific value is optional

//For instance

type FamilyBackground = {
  familyName: string;
  isComplete: boolean;
};

type Student = {
  name: string;
  age: number;
  isEnrolled: boolean;

  //Here we set the optional property (?) means this value can be optional
  family?: FamilyBackground;
};

//We can now then set the properties to optional for instance we dont want any student to have a famiBackground

const student1: Student = {
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
const student2: Student = {
  name: "Jhon Monton",
  age: 19,
  isEnrolled: true,
};
