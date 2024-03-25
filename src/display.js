import _, { forEach } from "lodash"
import { add } from "./calculations";


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
    
}
function createDisplayScreen(){
    const display = document.createElement("input");
    display.style.backgroundColor="black";
    display.style.width="38.5em";
    display.style.height="5em";
    return display;
}
function generateButtons(){
    //this will create all of the buttons and store them inside an array, that later can be passed to buttonEvent
    const numberButtons = document.createElement("div");
    numberButtons.className = "numpad";
    let tempButton;
    let numbclass = "numb"
    for (let i = 9; i >= 0; i--) {
        tempButton = createButton(`${i}`,"4em","black","white",`${numbclass}`);
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
function buttonEvent(buttons){
    //will handle the event listeners for the buttons
}
