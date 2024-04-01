import _ from "lodash";


export function add(){
    //this could be the addition function that will accept some parameters and return the sum of them 
}


//the element is any char that is a part of the mathematical expression
export function expressionCalculator(expression,element){
    //create conditions
    //cannot add two operators in sequence
    //if expression ends with an operator, cannot add another
    //separate the elements with a space
    //cannot only have operators
    //cannot end with an operator

    let operators = ["X","-","+","÷"];
    console.log(expression.split(""));


    
    if(operators.includes(element) && expression =="") return "";
    
    if(operators.includes(expression.split("")[expression.length-1])){
        console.log("helfasdfa");
        
        if( operators.includes(element)){
            return expression;
        }else{
            if(element =="=") return expression;
            return expression+" "+element;
        }
        

    }else{
        if(operators.includes(element)){
            return expression+" "+element;
        }
        if(element == "="  ) return equals(expression);
        return expression+element;
    }
    
}
//this function will get the calculator's expression and transform it into a result 
function equals(expression){
    //first: create an array that stores the numbers and operators
    //second, find the first operation to transform 
    //third: make a loop that goes finding operations and solves them 
    //fourth: repeate this for the + and - operations 
    // display the result 
    console.log(expression.split(" "));
    let expressionItems = expression.split(" ");
    
    //find if the expression contains any operator 
    //find if the expresson contains any multiplication or division
    let firstOperators = ["X","÷"];
    let secondOperators = ["+","-"];
    let hasFirst = false;
    let hasSecond = false;
    let hasBoth = false;
    //filter through the expressionItems until you find any of them 

    //find the certain conditions:
    //only firstO
    //only second
    //both

    expressionItems.forEach(item => {
        if(firstOperators.includes(item)){
            hasFirst = true;
        }
        if(secondOperators.includes(item)){
            hasSecond = true;
        }
        if(hasFirst && hasSecond ){
            hasBoth = true;
        }
    });
    if(hasFirst==false && hasSecond == false){
        return expression;
    }
    let result;
    if(hasBoth){
        //both operators
        result = bothExpression(expressionItems);
    }
    if(hasFirst == true && hasSecond == false){
        //only first
        result = multiplyExpression(expressionItems);
    }
    if(hasSecond == true && hasFirst == false){
        //only second
        result = addExpression(expressionItems);
    }

    //create a function for each of the 3 cases and then figure the rest out


    return result;
}


function multiplyExpression(expressionArr){
    //make a loop.
    //find the operator, then find the numbers around that operator
    //repeat until there is only one number
    let leftNum;
    let rightNum;
    while(expressionArr.includes("X") || expressionArr.includes("÷")){
    
        
        for (let i = 0; i < expressionArr.length; i++) {
            //find the operator
            //remove 3: the operator and the two numbers around
            //add in the same spot the result
            if(expressionArr[i]=="X"){
                expressionArr.splice(i-1,3,expressionArr[i-1]*expressionArr[i+1]);
            };
            if(expressionArr[i]=="÷"){
                if(expressionArr[i-1]==0){
                    alert("Warning! The results may not be accurate, cannot divide by 0");
                }
                expressionArr.splice(i-1,3,expressionArr[i-1]/expressionArr[i+1]);
            };
            
        }
    }
    return expressionArr[0];
}

function addExpression(expressionArr){
    let leftNum;
    let rightNum;
    while(expressionArr.includes("+") || expressionArr.includes("-")){
    
        
        for (let i = 0; i < expressionArr.length; i++) {
            //find the operator
            //remove 3: the operator and the two numbers around
            //add in the same spot the result
            if(expressionArr[i]=="+"){

                expressionArr.splice(i-1,3,parseInt(expressionArr[i-1])+parseInt(expressionArr[i+1]));
            };
            if(expressionArr[i]=="-"){
                
                expressionArr.splice(i-1,3,parseInt(expressionArr[i-1])-parseInt(expressionArr[i+1]));
            };
            
        }
    }
    return expressionArr[0];
}
 
function bothExpression(expressionArr){
    let leftNum;
    let rightNum;

    while(expressionArr.includes("X") || expressionArr.includes("÷")){
    
        
        for (let i = 0; i < expressionArr.length; i++) {
            //find the operator
            //remove 3: the operator and the two numbers around
            //add in the same spot the result
            if(expressionArr[i]=="X"){
                expressionArr.splice(i-1,3,expressionArr[i-1]*expressionArr[i+1]);
            };
            if(expressionArr[i]=="÷"){
                if(expressionArr[i-1]==0){
                    alert("Warning! The results may not be accurate, cannot divide by 0");
                }
                expressionArr.splice(i-1,3,expressionArr[i-1]/expressionArr[i+1]);
            };
            
        }
    }
    while(expressionArr.includes("+") || expressionArr.includes("-")){
    
        
        for (let i = 0; i < expressionArr.length; i++) {
            //find the operator
            //remove 3: the operator and the two numbers around
            //add in the same spot the result
            if(expressionArr[i]=="+"){

                expressionArr.splice(i-1,3,parseInt(expressionArr[i-1])+parseInt(expressionArr[i+1]));
            };
            if(expressionArr[i]=="-"){
                
                expressionArr.splice(i-1,3,parseInt(expressionArr[i-1])-parseInt(expressionArr[i+1]));
            };
            
        }
    }
    return expressionArr[0];
}