interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  yearsOfExperience: 6,
  location: "Washington",
};

console.log(teacher3);

interface Directors {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  yearsOfExperience: 6,
  location: "London",
  numberOfReports: 17,
};
console.log(director1);

// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface describing the class structure
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Class implementation
class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName()); // Output: Alice
console.log(student.workOnHomework()); // Output: Currently working