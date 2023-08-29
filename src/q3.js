/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

const dog = {
    petName:"Bobby"
}

// Task 1: Add code here
//Add new property
dog["breed"] = "Poodle";
// Task 2: Add code here
//Use ForIn loop to cycle through object
//Declare string variable
let txt = "";
for (let x in dog) {
    txt = dog[x];
    //Print in console each key
    console.log(txt);
}