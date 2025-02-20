// This is one way of creating arrays in js
const a = [];

//Another way of accomplishing the same 

const b = Array(10);

//Creating an array and pre-filling it 
const c = [1, 2, 3]

const d = Array.of(1, 2, 3)

for(let i = 0; i < b.length; i++){
    b[i] = i + 1;
}

for(let i = 0; i < b.length; i++){
   console.log(b[i]);
}

a.push(4)

console.log("a[0] content is " + (a[0] + b[0]))

//joining two arrays
