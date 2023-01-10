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

// truyền obj vào obj 
restaurant.oderDelivery({
  time: '10:00',
  address: 'ha noi',
  mainIndex: 0,
  starterIndex: 1
})
// lấy thuốc tính từ 1 mảng
const {location1} = restaurant;
console.log(location1);

// thay tên thuộc tính
const{name:nameRes , openingHours:hours,categories:tags} = restaurant;
console.log(nameRes,hours,tags);

// Đặt giá trị mặc định nú nó k tồn tại
const {menu=[],starterMenu=[]} = restaurant;
console.log(menu,starterMenu);

// thay đổi giá trị biến
let a  = 100;
let b  = 50;
const obj = {a:20 , b:10, c:50};
({a,b} = obj);
console.log(a,b);

// obj lồlồng obj
const {fri:{open:o,close:c}}= restaurant.openingHours;
console.log(o,c);


