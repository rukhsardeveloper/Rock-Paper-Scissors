//define varaible to tarck user and computer score

let userscore=0
let computerscore=0

const Choices=  document.getElementsByClassName('choice')
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
    console.log(`user clicked: ${userChoice}`)
    const ComputerChoice=gencompchoice()//rock,paper,scissor
    console.log(`Computer Chose:${ComputerChoice}`)
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
    showWinner(userwin)
}}

function gencompchoice(){
    const options=['rock','paper','scissor']
    const randomindex=Math.floor(Math.random()*3)//0,1,2
    return options[randomindex]
}
function draw(){
    console.log("draw")
}
function showWinner(userwin){
    if(userwin==true){
        console.log("you win")
    }else{
       console.log("you lose") 
    }
}