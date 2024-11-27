// Định nghĩa 1 class trong JS
class Rectangle{
    // Khai báo hàm khởi tạo (constructor)
    constructor(w, h){
        // Định nghĩa các thuộc tính của đối tượng
        this.width = w;
        this.height = h;
    }

    // Định nghĩa 1 phương thức (method) tính diện tích của HCN
    area(){
        return this.width * this.height;
    }
}

// Kế thừa trong JS
class Square extends Rectangle{
    constructor(side){
        super(side, side);
    }
}

// Khởi tạo 2 đối tượng: HCN và HV để in ra diện tích của 2 hình
const rect = new Rectangle(20, 10);
const square = new Square(15);

console.log(`Rectangle area = ${rect.area()}`);
console.log(`Square are = ${square.area()}`);

