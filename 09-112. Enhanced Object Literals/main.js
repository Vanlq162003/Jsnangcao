// tạo đối tượng 
const weeks = ['t2', 't3', 't4', 't5', 't6'];

const openingHours =  {
  [weeks[0]]: {
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
};

const restaurant = {
    name: 'Classico Italiano',
    location1: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    // đặt thuộc tính giông tên biến và có thẻ sử dụng index nếu nó là 1 mảng
    openingHours,
    oderDelivery: function (obj){
      console.log(obj);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
      },
};


