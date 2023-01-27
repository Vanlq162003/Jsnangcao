

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase()); // viết thường chuỗi
console.log(airline.toUpperCase()); // viết hoa chuỗi

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail) ;

// replace: thay thế lần xuất hiện đầu tiên
const name = 'vandeptrai ha ha';
const name2 = name.replace('deptrai','handsome');
console.log(name2);

// thay thế tất cả
const name3 = name.replace(/ha/g,'he');
console.log(name3);

// phuongw thức trả về giá trị booleans

console.log(name.includes('handsome'));
console.log(name.startsWith('van'));


