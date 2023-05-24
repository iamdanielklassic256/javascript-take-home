// arrays, objects, data types, functions, etc..
const name = "Salume"
const age = 30
const number = 3.2  // float value, integer value, or long or short value

// console.log(name)
// console.log(age)
// console.log("Hello world!",  name)
console.log(`Hello world, my name is ${name} and ${age} years old`)

// objects in javascript
const names = {
    name: "Okumu Daniel Comboni",
    age: 30,
    school: "Gulu University",
    status: "finalist"
}
console.log(names.age)
console.log(names["name"])

console.log(`My name is ${names.name} and i am ${names.age} years old, i do go to ${names.school}`)

// arrays in javascript
const data = [
    {
        name: 'Okumu Daniel Comboni',
        age: 24,
        course: [
            {
                name: 'Mobile App',
                code: 'GCS3205',
                test: 6,
                assignment: 4,
                presentation: 1
            },
            {
                name: 'Mobile App',
                code: 'GCS3205',
                test: 6,
                assignment: 4,
                presentation: 1
            }
        ]
    },
    {
        name: 'Adong Salume Oliver',
        age: 26,
        course: {
            name: 'Business Intelligence',
            code: 'GIT3205',
            test: 6,
            assignment: 4,
            presentation: 1
        }
    },
    {
        name: 'Oba Fredrick',
        age: 25,
        course: {
            name: 'Emerging Trends in COmputer Science',
            code: 'GCS3208',
            test: 6,
            assignment: 4,
            presentation: 1
        }
    },
    {
        name: 'Gizamba Derrick',
        age: 26,
        course: {
            name: 'Information Retrieval',
            code: 'GCS3209',
            test: 6,
            assignment: 4,
            presentation: 1
        }
    }
]

console.log(data[0].course)
// console.log(data.length)

// const role = ['salume', 'user', 'comboni', 'oba']
// console.log(role[3])