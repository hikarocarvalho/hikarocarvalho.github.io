var direction = "";
let move = false;
var oldx = 0;
var oldy = 0;
const obj = document.getElementById("world");
const mousemovemap = (e) => {
    const rotateX = (parseInt(obj.getAttribute("rotatex")))+e.pageX/100;
    const rotateY = (parseInt(obj.getAttribute("rotatey")))+e.pageY/100;
    if(move){
        if (e.pageY == oldy) {
            obj.style.transform = "rotate3d(0,1,0,"+rotateX+"deg)";
        }
        else if (e.pageX == oldx) {
            obj.style.transform = "rotate3d(1,0,0,"+rotateY+"deg)";
        }
        oldx = e.pageX;
        oldy = e.pageY;
        obj.setAttribute("rotatex",rotateX);
        obj.setAttribute("rotatey",rotateY);
    }
        
}
document.addEventListener('auxclick',(e)=>{
    if(move){
        move = false;
    }else{
        document.addEventListener('mousemove', mousemovemap);
        move = true;
    }
})

