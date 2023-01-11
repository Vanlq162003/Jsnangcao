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
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
      },
};
// toán tử || (trả về th có giá trị đúng)
console.log(4 || 3);

// toán tử ? (giống với if else)
restaurant.numGuets = 20;
const guets1 =  restaurant.numGuets ? restaurant.numGuets:10;
console.log(guets1);


const guets2 =  restaurant.numGuets || 10;
console.log(guets2);

// toán tử && (trả về th có giá trị sai )
console.log('van3' && 'van3' && 0);

if(restaurant.orderPizza){
    restaurant.orderPizza('haha', 'hehe');
}
console.log(restaurant.orderPizza && 1);


