function listProduct(productData = [], categoryData = []){
    console.log("List of Products");
    if(productData.length > 0){
        console.log("Id\tName\t\tPrice\tCategory");
        for (const {id, name, price, cat} of productData) {
            const category = categoryData.find(c=>c.id == cat)
            if(category)
                console.log(`${id}\t${name}\t${price}\t${category?.name}`);
            else
                console.log(`${id}\t${name}\t${price}\t Not category`);
        }
    }else{
        console.log("Product not found");
    }
}

export default listProduct;