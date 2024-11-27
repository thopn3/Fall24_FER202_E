// Hàm mũi tên với nhiều tham số
let print = (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
};

// Gọi hàm
print("HoangNN", 19);

// Hàm mũi tên với 1 tham số
let area = side => side * side; // {return side * side}
// Tính diện tích của HV
console.log(`Area of square: ${area(10)}`);

//Hàm mũi tên không có tham số
let display = () => console.log("Hello World!");
display();

// Hàm trong một Object literal
let student = {
    name: "Hoang Tuan Dat",
    age: 20,
    showInfo: function(){
        console.log(`Student details: ${this.name} - ${this.age}`);
    }
};

student.showInfo();

// Hàm mũi tên trong hoạt động xử lý bất đồng bộ
function fetchDataFromServer(){
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dataResponse = "This data return from DB";
            resolve(dataResponse);
        }, 2000);
   });
}

fetchDataFromServer()
    .then(result => console.log(result))
    .catch(err => console.error(`Errors: ${err.message}`))
    .finally(() => console.log("Close connection!"));
