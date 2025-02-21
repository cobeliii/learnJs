const student = {}

const jamila = {
    name : "Jamila",
    age : 28,
    gender : 'F'
}

console.log(jamila.name)
console.log(jamila.age)
console.log(jamila.gender)

delete jamila.gender

// console.log(jamila.gender)


//Object Methods

const car = {
    brand : 'Mercedes-Benz',
    model : 'GLE 450',
    start : function(){
        console.log(`${this.brand} ${this.model} started.`)
    }
}

car.start()