let element = document.querySelector(".calculator");
let display = document.getElementById("display");
let memory = "0";
let count = 0;
const printElement = (event)=>{
    const values = ['√','%','/','7','8','9','X','4','5','6','-','1','2','3','+','0','.'];
    if('0'===String(display.innerHTML).trim()){
        display.innerHTML="";
    }
    if(values.includes(String(event.target.innerHTML).trim())){
        display.innerHTML = String(display.innerHTML).trim() + String(event.target.innerHTML).trim();
    }else if('On/Ce'.includes(String(event.target.innerHTML).trim())){
        display.innerHTML="0";
    }else if('MRC'.includes(String(event.target.innerHTML).trim())){
        if(count === 0){
            display.innerHTML = String(display.innerHTML).trim() + String(memory).trim();
            count ++;
        }else{
            memory = "0";
            document.getElementById("memory").style.display = "none";
            count --;
        }
        
    }else if('M-'.includes(String(event.target.innerHTML).trim())){
        memory = "0";
        document.getElementById("memory").style.display = "none";
    }else if('M+'.includes(String(event.target.innerHTML).trim())){
        memory = parseInt(String(display.innerHTML).trim())+parseInt(memory);
        console.log(memory)
        document.getElementById("memory").style.display = "flex";
    }else if('OFF'.includes(String(event.target.innerHTML).trim())){
        display.innerHTML="";
    }
}
element.addEventListener("click",printElement);
