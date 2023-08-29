/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Add code here
//Declare array to store patient's name
const ArrayPatNam = [];

function addPatient(patientName){
    // Task 2: Add code here
    //Using push function to add patient's name to array
    ArrayPatNam.push(patientName);
}

// Task 3: Add code here
//Create function
function listPatient(){
    //Create variable to store string
    let txt = '';
    //Use ForIn loop to string all names
    for (let x in ArrayPatNam) {
      txt += ArrayPatNam[x] + ' ';
    }
    //Print in console patient's name stored in array
    console.log(txt);
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]