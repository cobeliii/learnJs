//while loop

const names = ['Jamila', 'Ahmed', 'Nelson']

let i = 0

while(i < names.length){
    console.log(`Name = ${names[i]}`)
    i++
}

console.log("-------------//--------------")

// for loop
for(let i = 0; i < names.length; i++){
    console.log(`Name = ${names[i]}`)
}

console.log("-------------//--------------")

// for ...of
for(const name of names){
    console.log(`Name = ${name}`)
}

