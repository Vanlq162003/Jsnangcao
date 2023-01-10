const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    }
};

//khai báo 1 lúc nhiều biến trong mảng
const arr =  [2,3,4];
const [x,y,z] = arr;
console.log(x,y,z);

let [a , b] = restaurant.categories;
console.log(a,b);
// Hoán vị
[a , b ] = [b ,a] ;   
console.log(a,b);

const [starter,main]=restaurant.order(3, 0);
console.log(starter,main);
// mảng lồng mảng
const nested = [2, 3, [4 ,5]];
const [d , ,[f , g]] = nested;
console.log(d,f,g);