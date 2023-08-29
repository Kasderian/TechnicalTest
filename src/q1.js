/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
    // check if x and y are numeric
    if ((isNaN(x) == true || isNaN(y) == true)) {
    //prints -1 in console informational purposes if not numeric
    console.log(-1);
    //returns -1 if not numeric
    return -1;
    } else {
    // swap values
    x = x + y;
    y = x - y;
    x = x - y;
    //Print swapped values in console
    console.log(x," ", y);
    }
}

// Task 2: Add code here
swap(1, 2);
//Using 1 and 2 as example
module.exports = swap;
