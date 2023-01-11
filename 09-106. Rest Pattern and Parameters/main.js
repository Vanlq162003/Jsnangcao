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
//sử dụng toán tử spread
const arr = [1,2,3,4,5];
const newArr = [1,2,...[3,4]];
console.log(newArr);
const [a,b,...orthers] = arr;
console.log(a,b,orthers);

const [x,, y , ...mn] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(x,y,mn);

// obj
const{thu,...weekdays} = restaurant.openingHours;
console.log(weekdays);

