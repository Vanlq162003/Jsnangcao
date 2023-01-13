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
// Set bỏ qua các phẩn tử trùng lặp
const set = new Set( [
    'van',
    'van2',
    'van3',
    'van4',
    'van2',
    

]);
console.log(set);
// has : kiểm trả xem mảng có chưa phẩn tử k 
console.log(set.has('van3'));
// add: them vào mảng
set.add('van5');
console.log(set)
// delete: xóa
set.delete('van5');
console.log(set);  

// sử dụng spread để chuyển thành mảng
console.log([...set]);