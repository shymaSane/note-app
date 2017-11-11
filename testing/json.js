var obj = {
    name: "shyma",
    age: 25
}

var person = JSON.stringify(obj)

console.log(typeof person)
console.log(person)

var person1 = JSON.parse(person)

console.log(typeof person1)
console.log(person1)