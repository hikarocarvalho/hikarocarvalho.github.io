const elements = [
    document.querySelector("#hour"),
    document.querySelector("#minute"),
    document.querySelector("#second")
]
const buttons = [
    document.querySelector("#start"),
    document.querySelector("#reset"),
    document.querySelector("#finish")
];
let startState = false;
let count ={
    maxHour : 0,
    maxMinute : 5,
    maxSecond : 0
}
const timer = ()=>{
    if(parseInt(elements[2].innerHTML.trim())<60 || parseInt(elements[2].innerHTML.trim())<count.maxSecond && parseInt(elements[2].innerHTML.trim())>0){
        if(parseInt(elements[2].innerHTML.trim())<9){
            elements[2].innerHTML = "0"+String(parseInt(String(elements[2].innerHTML).trim())+1);
        }else{
            elements[2].innerHTML = parseInt(String(elements[2].innerHTML).trim())+1;
        }
    }else if(parseInt(elements[1].innerHTML.trim())<60 || parseInt(elements[1].innerHTML.trim())<count.maxMinute  && parseInt(elements[1].innerHTML.trim())>0){
        elements[2].innerHTML = "00";
        if(parseInt(elements[1].innerHTML.trim())<9){
            elements[1].innerHTML = "0"+String(parseInt(String(elements[1].innerHTML).trim())+1);
        }else{
            elements[1].innerHTML = parseInt(elements[1].innerHTML.trim())+1;
        }
    }else if(parseInt(String(elements[0].innerHTML).trim())<3 && parseInt(elements[1].innerHTML.trim())<count.maxHour){
        elements[2].innerHTML = "00";
        elements[1].innerHTML = "00";
        if(parseInt(elements[0].innerHTML.trim())<9){
            elements[0].innerHTML = "0"+String(parseInt(String(elements[0].innerHTML).trim())+1);
        }else{
            elements[0].innerHTML = parseInt(elements[0].innerHTML.trim())+1;
        }
    }else {
        startState = false;
    }
}
const stop = (event)=>{
    event.preventDefault();
    startState = false;
}
const makeSecond = ()=>{
    if(!startState){
        return 0;
    }
    timer();
    setTimeout(makeSecond, 1000);
}
const start = (event)=>{
    event.preventDefault();
    startState = true;
    makeSecond();
}
const reset = (event)=>{
    event.preventDefault();
    elements.forEach(element=>{
        element.innerHTML = "00";
    })
}

buttons[0].addEventListener("click",start);
buttons[1].addEventListener("click",reset);
buttons[2].addEventListener("click",stop);