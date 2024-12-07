let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newbtn=document.querySelector(".newgame");
let msg=document.querySelector("#msg");
let msgg=document.querySelector(".msg-container");
// let color=
let turnO = true //playerX, playerO

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach ((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was click");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });


});
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation, winner is ${winner}`;
    msgg.classList.remove("hide");
    disablebox();
}

checkWinner=()=>{
    for(pattern of winPattern){
        
        let pos1val=   boxes[pattern[0]].innerText;
        let pos2val=  boxes[pattern[1]].innerText;
        let pos3val=    boxes[pattern[2]].innerText;
      if (pos1val!=""&&pos2val!=""&&pos3val!="") {
          if (pos1val===pos2val&&pos2val===pos3val){
              console.log("winner",pos2val);
            //   alert("you won the game");
              showWinner(pos2val);
          } 
      }
    }
}
resetbtn.addEventListener("click",()=>{
    enablebox();
}
)
newbtn.addEventListener("click",()=>{
    enablebox();
    msgg.classList.add("hide");
}
)