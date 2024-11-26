// Khai báo 1 mảng rỗng -> Chứa dữ liệu từ REST API
let data = [];

fetch("https://dummyjson.com/users")
    .then(res => res.json())    // res: response
    .then(result => {
        const {users} = result;
        for(const {id, firstName, age} of  users){
            console.log(`${id}\t${firstName}\t${age}`);
        }
    })
    .catch(err => console.error(err.message));