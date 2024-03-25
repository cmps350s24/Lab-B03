const person = {
    name: "Ali",
    age: 25,
    address: "Karachi",
    gender: "Male"
}

const updatedObject = {
    name: "Ali 2",
    age: 254,
    address: "Karachi TT",
    gender: "Male"
}

keys = ['name', 'age', 'address', 'gender']

console.log(`document.querySelector("#${keys[1]}").value = person[${keys[1]}]`)