const resolution = document.querySelector("#resolution");
const finalDisplay = document.querySelector("#display");

function evil(fn) {
    return new Function('return ' + fn)();
}

const sumPart = (value,start,finish)=>{
    let partValue = "";
    for(start;start<finish;start++){
        partValue = partValue+value[start];
    }
    return evil(partValue);
}

const percentage = (value,count) =>{
    let firstValue = "";
    let countDefault = count;
    for(let i=count; i> 0; i--){
        if(['+','-','*','/'].includes(value[i])){
            firstValue = sumPart(value,0,i);
            count = i;
        }
    }
    delete value[countDefault];
    let secondValue = value.splice(count+1,value.length-1);
    let newValue = "";
    for(let i=0;i<secondValue.length;i++){
        if(secondValue[i]){
            newValue = newValue + secondValue[i];
        }
    }
    return (parseFloat(firstValue)+(parseFloat(firstValue)*parseFloat(newValue)/100.00));
}
const verifyCalc = ()=>{
    let value = String(finalDisplay.innerHTML).trim();
    if(value.includes('X')){
        value = value.replace(/X/gi,'*');
    }
    if(value.includes('√')){
        const verify = value.split("");
        let newValue = "";
        for(let count=0; count < verify.length;count++){
            if(verify[count]==='√'){
                count ++;
                newValue = newValue + String(Math.sqrt(verify[count])).trim();
            }else{
                if(verify.length > count){
                    newValue = newValue + verify[count];
                }
            }
        }
        value = newValue;
    }
    if(value.includes('%')){
        const verify = value.split("");
        let newValue = "";
        let values = [];
        for(let count=0; count < verify.length;count++){
            if(verify[count]==='%'){
                
                newValue = percentage(verify,count);
                
            }
        }
        value = newValue;
    }
    finalDisplay.innerHTML = evil(value);
}

resolution.addEventListener("click",verifyCalc);