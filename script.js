//define varaible to tarck user and computer score

let userscore=0
let computerscore=0

const Choices=  document.getElementsByClassName('choice')
const msgcontainer=document.getElementById('msg')
const userScorepara=document.getElementById('user-Score')
const computerScorepara=document.getElementById('computer-Score')
// console.log(choices)

for(let choice of Choices){
    choice.addEventListener('click',function(){
    //  console.log("user click something------ ")
    let userChoice= choice.getAttribute('id')
    // console.log(`user clicked: ${   userchoice}`)
    playgame(userChoice)
    })
}
function playgame(userChoice){
    // console.log(`user clicked: ${userChoice}`)
    const ComputerChoice=gencompchoice()//rock,paper,scissor
    // console.log(`Computer Chose:${ComputerChoice}`)
    if(userChoice==ComputerChoice){
        draw()
    }else{
        // console.log("should be a win or lose")
        let userwin=true
        //userchoice=rock,system have=paper or scissor
        if(userChoice=="rock"){
           userwin=ComputerChoice =="scissor"? true:false
        }else if(userChoice=="paper"){
           userwin=ComputerChoice =="rock"? true:false
        
    }else{
        userwin=ComputerChoice =="paper"? true:false
    }
    showWinner(userwin,ComputerChoice,userChoice)
}}

function gencompchoice(){
    const options=['rock','paper','scissor']
    const randomindex=Math.floor(Math.random()*3)//0,1,2
    return options[randomindex]
}
function draw(){
    console.log("draw")
    msgcontainer.innerText= "draw,play again!"
    msgcontainer.style.backgroundColor='rgb(5,5,36)'
}
function showWinner(userwin,ComputerChoice,userChoice){
    if(userwin==true){
        userscore++
        userScorepara.innerText=userscore
        // console.log(`you win:Computer Chose:${ComputerChoice} |User Choice:${userChoice}`)
        msgcontainer.innerText=`you win:Computer Chose:${ComputerChoice} |User Choice:${userChoice}`
        msgcontainer.style.backgroundColor='green'
    }else{
        computerscore++
        computerScorepara.innerText=computerscore
    //    console.log(`you lose:Computer Chose:${ComputerChoice} |User Choice:${userChoice}`)
       msgcontainer.innerText=`you lose:Computer Chose:${ComputerChoice} |User Choice:${userChoice}`
       msgcontainer.style.backgroundColor='red'
    }
}