// Khai báo 1 đối tượng kiểu Promise để kiểm soát giá trị được sinh ra ngẫu nhiên từ 0 - 1
const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const number = Math.random();
        if(number >= 0.5) 
            resolve(number);
        else
            reject("Error: The number is not greater than or equal to 0.5");
    }, 2000);
});

// myPromise
//     .then(result => console.log(`Success: ${result}`))
//     .catch(error => console.log(error));

// Định nghĩa 1 hàm cho các chức năng hoặc ứng dụng khác có thể thực thi được đối tượng promise
async function randomNumber(){
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

randomNumber();