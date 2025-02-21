function greeting(){
    console.log("Hello there")
}

function greetingWithName(name){
    console.log(`Hello, ${name}`)
}

function getData(){
    return ['Jamila', 28]
}

let [name, age] = getData()

console.log(`${name}, ${age}`)
greeting()
greetingWithName("John")