/**
 * Alayna Johnston
 * created on: 4/27/2021
 * 
 * part 1:  calculator app via cmd 
 * 
 * =================================== Part 1 =========================================================
 * Calculator app using CMD to get input/output. Use of passing single arguments
 */
var a = parseInt(process.argv[2]); //parseInt() parses a string and returns an integer. By default, arguments are strings
var oper = process.argv[3]; //oper is short for math operator
var c = parseInt(process.argv[4]); //process.argv is used to get the arguments from command prompt. [4] is the position of the argument being passed
answer = 0; 

if(oper == '+'){
    answer = a + c;
}else if(oper == '-'){
    answer = a - c;
}else if(oper == '/'){
    answer = a / c;
}else if(oper == '*'){
    answer = a * c;
}

console.log('The answer is : ' + answer);

/**
 * to run: 
 *      in cmd type (for examples): 
 *          node calculation.js 4 + 5
 *          node calculation.js 34 * 3
 */


