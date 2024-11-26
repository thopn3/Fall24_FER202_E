// Định nghĩa 1 hàm với tham số rest
const sum = (...numbers) => {
    let total = 0;
    for (const element of numbers) {
        total += element;
    }
    console.log(`Sum numbers = ${total}`);
};

// Gọi hàm với tham số rest để tính tổng các phần tử
sum(1, 2);
sum(4, 5, 6);
sum(10, 20, 30, 40, 50);

// const prices = [10.5, 20, 3.5];
// sum(prices);