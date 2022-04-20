let movePlayer = false ;
var playerX = 0;
var playerY = 0;
const player = document.getElementById("player");
const mousemoveplayer = (e) => {
    if(movePlayer){
        if (e.pageY == playerY) {
            const x = parseInt(player.getAttribute("x"));
            const y = parseInt(player.getAttribute("y"));
            const z = parseInt(player.getAttribute("z"));
            const rotate = (parseInt(player.getAttribute("rotate")))+e.pageX/100;
            if((parseInt(playerX/10)+rotate/100)>=360){
                rotate = 0;
            }
            player.style.transform = "rotate3d(0,1,0,"+rotate+"deg) translate3d("+x+"px,26px,"+y+"px)";
            player.setAttribute("rotate",rotate);
        }
            playerX = e.pageX;
            playerY = e.pageY;
    }
        
}
document.addEventListener('click',(e)=>{
    if(movePlayer){
        movePlayer = false;
        console.log(false);
    }else{
        document.addEventListener('mousemove', mousemoveplayer);
        console.log(true);
        movePlayer = true;
    }
})

const velocity = 10;
        // verify the key pressed value
document.addEventListener("keydown", function (e) {
    switch(e.key){
        case "a":
        case "ArrowLeft":
            moveToLeft();
            break;
        case "w":
        case "ArrowUp":
            moveToUp();
            break;
        case "d":
        case "ArrowRight":
            moveToRight();
            break;
        case "s":
        case "ArrowDown":
            moveToDown();
            break;
        default:
            console.log("Comand Not Found");
    }
});
// move action
function setPos(posValue){
    const playerPos = [
        player.style.left,
        player.style.top
    ];
    const x = parseInt(player.getAttribute("x"))+parseInt(posValue[0]);
    const y = parseInt(player.getAttribute("y"))+parseInt(posValue[1]);
    const z = parseInt(player.getAttribute("z"))+parseInt(posValue[2]);
    const rotate = parseInt(player.getAttribute("rotate"))
    player.style.transform="rotate3d(0,1,0,"+rotate+"deg) translate3d("+x+"px,26px,"+y+"px)";
       
    player.setAttribute("x",x);
    player.setAttribute("y",y);
    player.setAttribute("z",z);
}
// move comands
function moveToRight(){
    setPos([velocity,0,0]);
}
function moveToLeft(){
    setPos([-velocity,0,0]);
}
function moveToUp(){
    setPos([0,-velocity,0]);
}
function moveToDown(){
    setPos([0,velocity,0]);
}