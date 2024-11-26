// Kỹ thuật phân rã mảng
const collection = ["John", 20, true];
const [name, age, gender] = collection;

console.log(`Name: ${name}, Age: ${age}, Gender: ${gender==true?"Male": "Female"}`);

// Kỹ thuật phân rã đối tượng
const course = {
    title: "FER202",
    credit: 3,
    pe: 4.0
};

const {title, credit, pe} = course;
console.log(`Course info - Title: ${title}, Credit: ${credit}, PE: ${pe}`);
console.log(`Course info - Title: ${course.title}, Credit: ${course.credit}, PE: ${course.pe}`);

// Exercise:
const data = {
    students: [
        {id: 1, fName: "John", lName: "Hopkin", age: 20},
        {id: 2, fName: "Marry", lName: "Smit", age: 21},
        {id: 3, fName: "Tom", lName: "Hopkin", age: 19},
        {id: 4, fName: "Jony", lName: "Beck", age: 18}
    ],
    total: 30,
    limit: 10
};

const {students, total, limit} = data;
console.log(`Total: ${total} students`);
console.log(`Limit: ${limit} per page`);

console.log("List Student");
console.log("Id\tFullname\t\tAge");
for (const {id, fName, lName, age} of students) {
    console.log(`${id}\t${fName+" "+lName}\t\t${age}`);
}


