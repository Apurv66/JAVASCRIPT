let a = [7, 10, 5.33, "hello"];
let b = [1, 2, 3, 4];

a[0] = 2; //array are mutable.
console.log(a);
console.log(typeof a);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);

console.log(a.toString());

a.pop();
console.log(a);

a.push(2);
console.log(a);

a.shift();
console.log(a);

a.unshift("hey");
console.log(a);

console.log(a.concat(b));

console.log(a.splice(1,3));
console.log(a);


