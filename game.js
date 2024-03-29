let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winnings = [[0,1,2],
                [3,4,5], 
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]];


boxes.forEach((box) =>{ 
  box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO)
    {
        box.innerText="O";
        turnO = false; // for next turn it should be false
        box.disabled = true ;
    }
    else
    {
        box.innerText = "X"
        turnO = true ;
        box.disabled = true ;
    }

    winner();

    let isWinner = winner();
    count++;
    if(count === 9 && !isWinner)
draw();
  })
});

const winner = () =>{
    for (let pattern of winnings)
    {
            let pos1= boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
            if(!(pos1=="" && pos2=="" && pos3==""))
            {
                if(pos1 == pos2 &&  pos2 == pos3)
                {
                    console.log("winner",pos1);
                    showWinner(pos1);
                    disableBoxes();
                }
            }


    }
}

const showWinner = (winner) =>{
msg.innerText = `Congratulations , Winner is ${winner}`;
msgContainer.classList.remove("hide");

}

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}



const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText = "";
    }
}
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };


const draw = () =>{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();    

}


newGame.addEventListener("click" ,resetGame );
reset .addEventListener("click" ,resetGame );
