// Toán tử spread (Toán tử rải)
const number1 = [1, 2, 3];
const number2 = [5, 6, 7, 8];

// Sử dụng toán tử spread để gộp 2 mảng trên -> Tạo thành 1 mảng mới
const number3 = [...number1, true, "Hello", ...number2];

console.log(number3);

// Kết hợp giữa hàm với tham số rest và truyền 1 mảng sử dụng toán tử spread
const sum = (...numbers) => {
    let total = 0;
    for (const element of numbers) {
        total += element;
    }
    console.log(`Sum numbers = ${total}`);
};

sum(...number2);