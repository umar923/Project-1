let boxes = document.querySelectorAll(".box");
// console.log(boxes);

let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //playerX, player0

const winPatterns = [[0,1,2],
                     [0,3,6],
                     [0,4,8],
                     [1,4,7],
                     [2,5,8],
                     [2,4,6],
                     [3,4,5],
                     [6,7,8]];


const resetGame = () => {
    turnO = true;
    enableBoxes();//function call for enable boxes 
    msgContainer.classList.add("hide");
}

    

                     



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){  //turnO === true
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;

        }
        box.disabled = true;


        checkWinner();
        checkDraw();

    });

});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;

    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
};


const showWinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);

        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
            if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    // console.log("winner",pos1Val);
                    showWinner(pos1Val);

                }
                
                

            }
           
    }

};
const checkDraw = () => {
    let isDraw = true;
    for (let box of boxes) {
      if (box.innerText === "") {
        isDraw = false;
        break;
      }
    }
    if (isDraw) {
      msg.innerText = "It's a draw!";
      msgContainer.classList.remove("hide");
      disableBoxes();
    }
  };







newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);








/*
let arr = ["apple","bana","litchi"];

// 2D Array
let arr2=[["apple","litchi"],["potato","mushroom"],["pants","shirts"]];

console.log(arr2);
*/






