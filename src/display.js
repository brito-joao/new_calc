import _, { forEach } from "lodash"
import { add, expressionCalculator } from "./calculations";


export function runDisplay(){

    //generateButtons();
    loadElements();
}
function loadElements(){
    //this will load to the page all of the elements that the page will know of
    const body = document.querySelector("body");
    let display = createDisplayScreen();
    let buttons = generateButtons();
    
    
    body.append(display);
    body.append(buttons);
    buttonEvent(display);

    //idea : just create anything and finish as fast as possible
}
function createDisplayScreen(){
    const display = document.createElement("input");
    display.style.color="white";
    display.style.fontSize="1.5em";
    display.style.backgroundColor="black";
    display.setAttribute("text-align","right");
    display.setAttribute("readonly","readonly");
    display.setAttribute("text-shadow","0 0 0");
    
    display.style.width="20em";
    display.style.height="5em";
    display.innerText="hello world";
    
    return display;
}
function generateButtons(){
    //this will create all of the buttons and store them inside an array, that later can be passed to buttonEvent
    const numberButtons = document.createElement("div");
    numberButtons.className = "numpad";
    let tempButton;
    let numbclass = "numb"
    
    let operators = ["X","-","+","÷","="];
    operators.forEach(operator=>{
        tempButton = createButton(`${operator}`,"3.5em","black","white",`${numbclass}`);
        numberButtons.append(tempButton);        
    });

    for (let i = 9; i >= 0; i--) {
        tempButton = createButton(`${i}`,"3.5em","black","white",`${numbclass}`);
        
        numberButtons.append(tempButton);        
        //create a special condition for the 0
        if(i==0){
            tempButton.className+=" zero";
        }
    }
    return numberButtons;
    
}
function createButton(text,width,bColor,lColor,id){
    //will return a button object

    const button  = document.createElement("button");
    
    button.innerText=text;
    button.className = id;
    
    button.style.fontSize="3em";
    button.style.width=width;
    button.style.backgroundColor=bColor;
    button.style.color=lColor;
    return button;
}
function buttonEvent(display){
    //will handle the event listeners for the buttons
    const buttons = document.querySelectorAll(".numb");
    console.log(buttons);
    buttons.forEach(button =>{
        button.addEventListener("click",()=>{
            
            display.value = expressionCalculator(display.value,button.innerText);
        })
    })
}
