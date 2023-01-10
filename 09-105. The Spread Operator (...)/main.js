const restaurant = {
    name: 'Classico Italiano',
    location1: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
      },
    oderDelivery: function (obj){
      console.log(obj);
    }
};

//Thêm 1 mảng vào 1 mảng 
const arr = [6,2,3,4,5,6,7];
// const Narr = [10, 9 ,...arr];
// console.log(Narr);
// const newMenu = [...restaurant.mainMenu , 'Mì tôm'];
// console.log(newMenu);

// truyền tất cả tham số vào trong hàm

function sumAll(...numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        // console.log(numbers[i]);
        sum += numbers[i];
    } 
    return sum;
}
sumAll(4 ,9, 9);
console.log(sumAll( 1 , 2));