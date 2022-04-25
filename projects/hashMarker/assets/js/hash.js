const player = ["o","x"];

const elements = {
    button: document.getElementById('new-game'),
    gradBox: document.getElementById('table'),
    currentPlayer: document.getElementById('current-player'),
    winner: document.getElementById('selected-winner')
}

function getPositions(){
    const positionsList = [];
    for(let x=0;x<3;x++){
        for(let y=0;y<3;y++){
            positionsList.push(elements.gradBox.children[x].children[y]);
        }
    }
    return positionsList;
}

function changePlayer(){
    let currentPlayer = elements.currentPlayer.innerHTML;
    if(currentPlayer === player[0]){
        currentPlayer = player[1];
    }else{
        currentPlayer = player[0];
    }
    elements.currentPlayer.innerHTML = currentPlayer;
    return 0;
}

function verifyLine(startPos,finalPos,increment,positionsList,positions){
    let positionRange = [];
    for(let pos=startPos;pos<finalPos;pos+=increment){
        positionRange.push(pos);
    }
    console.log(positionRange);
    if((positionsList[positionRange[0]]===positionsList[positionRange[1]] && 
        positionsList[positionRange[1]]===positionsList[positionRange[2]]) &&
        (positionsList[positionRange[0]] !== ""))
    {
        elements.winner.innerHTML = elements.currentPlayer.innerHTML;
        for(let count=startPos; count<finalPos; count+=increment){
            positions[count].style.backgroundColor="green";
        }
        return 0;
    }
    positionRange = [];
    console.log(positionRange);
}

function verifyWinner(){
    const positionsList = [];
    const positions = getPositions();
    positions.forEach(item=>{
        positionsList.push(item.innerHTML);
    });

    let startPos = 0;
    
    for(let line=0;line<3;line++){
        let final = 3*(line+1);
        verifyLine(startPos,final,1,positionsList,positions);
        startPos +=3;
    }
    startPos = 0;
    for(let line=0;line<3;line++){
        let final = startPos+(7);
        verifyLine(startPos,final,3,positionsList,positions);
        startPos ++;    
    }

    if ((positionsList[0]===positionsList[4] && positionsList[4]===positionsList[8]) &&
        (positionsList[0] !== ""))
    {
        elements.winner.innerHTML = elements.currentPlayer.innerHTML;
        for(let count=0; count<9; count+=4){
            positions[count].style.backgroundColor="green";
        }
        return 0;
    }
    
    if((positionsList[2]===positionsList[4] && positionsList[4]===positionsList[6]) &&
        (positionsList[2] !== ""))
    {
        elements.winner.innerHTML = elements.currentPlayer.innerHTML;
        for(let count=2; count<7; count+=2){
            positions[count].style.backgroundColor="green";
        }
        return 0;
    }
    
    const hasFinish = positionsList.filter(position=>{return position === ""});
    if(hasFinish.length === 0){
        elements.winner.innerHTML = "Finished without a winner!";
    }
    
    return 0;
}

function selectedBox(event){
    event.preventDefault();
    let selectedElement = event.target;
    if(selectedElement.tagName.toUpperCase()==="ARTICLE" && selectedElement.innerHTML==="" && elements.winner.innerHTML===""){
        selectedElement.innerHTML = elements.currentPlayer.innerHTML;
        verifyWinner();
        changePlayer();
    }
    return 0;
}

function nextGame(event){
    event.preventDefault();
    const childrenList = getPositions();
    childrenList.forEach(item=>{
        item.innerHTML = "";
        item.style.backgroundColor = "rgb(196, 196, 196)";
    })
    elements.winner.innerHTML = "";
    return 0;
}

elements.button.addEventListener('click',nextGame);
elements.gradBox.addEventListener('click',selectedBox);
elements.winner.innerHTML="";

changePlayer();