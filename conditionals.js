//if(condition){
//  //code to be executed if condition is true
//} else if(anotherCondition){
//  //code to be executed if condition is false
//}
// else{
//  //code to be executed if both conditions are false
//}


//else can also contain if-else statements (nested if-else)

//switch case - used when multiple conditions need to be checked against a single variable/expression
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday"); 
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");  
        break;
    default:
        console.log("Invalid day");
}
//break statement is used to exit the switch case once a match is found otherwise it will continue to execute the next cases
//default case is executed if no match is found

