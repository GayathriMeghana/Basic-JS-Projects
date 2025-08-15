// let boxes=document.querySelector(".box");
const boxes = Array.from(document.querySelectorAll('.box'));
let resetbutton=document.querySelector("#btn")
let newgamebtn=document.querySelector("#new-btn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turno= true//playerx,playery
// let arr=["apple","banana","litchi"]
// let arr2=[["apple"],["potato","tomato"],["pants","shirts"]]
// console.log(arr)
// console.log(arr2)
// console.log(arr2[0])
// console.log(arr2[1])
// console.log(arr2[0+2])
// console.log(arr2[0][0])
// console.log(arr2[1][0])
// console.log(arr2[2][0])

let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = ()=>{
    turno= true
    enableboxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        // box.innerText='abcd'
        if(turno){
            box.innerText='O';
            box.style.color="blue"
            turno=false;
        }
        else{
            box.innerText='X';
            box.style.color="red"
            turno=true;
        }
        box.disabled=true;  // to not modifying the buuton val
        checkwinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winpatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2].innerText]);

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !=""  && pos2val !="" && pos3val !=""){
            if(pos1val == pos2val && pos2val == pos3val){
                // console.log("Winner",pos1val);
                showwinner(pos1val);
                return;
            }
        }
    }
    checkDraw();
}
const checkDraw = () => {
    // If all boxes are filled and there is no winner, it’s a draw
    const allFilled = boxes.every(box => box.innerText !== "");
    if (allFilled) {
        showDraw();
    }
}
resetbutton.addEventListener("click",resetgame)
newgamebtn.addEventListener("click",resetgame)