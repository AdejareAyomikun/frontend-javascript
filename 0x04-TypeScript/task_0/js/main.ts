interface Student{
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: "Adejare",
    lastname: "Faruk",
    age: 26,
    location: "Arepo Ogun State"
}

const student2: Student = {
    firstname: "Aderibigbe",
    lastname: "Toluwalope",
    age: 27,
    location: "Agbowo Ibadan"
}

const studentsList: Student []=[student1,student2];

// Create Table
const table = document.createElement("table");
const headRow = document.createElement("tr");
const header = ["First Name", "Location"];
header.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headRow.appendChild(th);
});
table.appendChild(headRow);

// Add Student rows
studentsList.forEach((student:Student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstname;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
});

document.body.appendChild(table);