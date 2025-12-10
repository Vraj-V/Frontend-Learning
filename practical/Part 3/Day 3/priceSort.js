console.log("connected!!");

let shopMarket = [
    {
        product :"Shampoo",
        brand: "loreally",
        price: 700
    },
    {
        product :"Face wash",
        brand: "himaliya",
        price: 1200
    },
    {
        product :"Chess Board",
        brand: "kids",
        price: 400
    },
]

let sorted = shopMarket.sort((a,b)=>{
    if (a.price >= 500 && b.price >= 500){
            return a.price - b.price
    }else{
        return 0;
    }
})

console.table(sorted);