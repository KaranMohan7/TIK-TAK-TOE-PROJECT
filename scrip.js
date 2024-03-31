let boxes = document.querySelectorAll(".box");
let resetb = document.querySelector("#reset");
let greet = document.querySelector("#greeting");
let newl = document.querySelector("#new");
let draww = document.querySelector("#draw");
let turn = true;

const arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () =>{
    if(turn){
        count = count+1;
        box.innerText = "0";
        turn = false;
        box.disabled = true;
    }
    else{
        count = count+1;
        box.innerText = "x";
        turn = true;
        box.disabled = true;
    }
    checkwinner();
  })
})
disablebtn = () =>{
    for( let boxo of boxes){
        boxo.disabled = true;
    }
}
enablebtn = () =>{
    for( let boxo of boxes){
        boxo.disabled = false;
        boxo.innerText = "";
    }
}

 const checkwinner = () => {
      for(let position of arr){
        let pos1 = boxes[position[0]].innerText;
        let pos2 = boxes[position[1]].innerText;
        let pos3 = boxes[position[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                greet.style.display = "block";
                disablebtn();
            }else if(count==9){
               draww.style.display = "block";
               count=0;
               disablebtn();
            }
        }
    }
}

resetb.addEventListener("click",() => {
    count=0;
    turn = true;
    enablebtn();
    greet.style.display = "none";
    draww.style.display = "none";
});

