// normal functions
function myFunction(){
    // console.log("Hello world!");
}
// myFunction();


// const student = {
//     name: 'Adong Salume',
//     age: 24,
//     school: 'PTC'
// }
let name = 'Daniel'
name = 'Salume'
name = "Oba Fredrick"


// arrow functions
const App = () => {
    // const student = {
    //     name: 'Okumu Daniel',
    //     age: 24,
    //     school: 'Empowering Ugandans'
    // }
    
    // console.log("Local Varaible", name);
}
App();
// console.log("Global Varaible", student);


const lists = ["Daniel", 4, "Empowering", "Salume", 10, "Ugandans"]


const data = () => {
    lists.map(value => (
        console.log(value)
    ))
}
data();