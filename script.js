//define varaible to tarck user and computer score

let userscore=0
let computerscore=0

const choices=  document.getElementsByClassName('choice')
// console.log(choices)

for(let choice of choices){
    choice.addEventListener('click',function(){
    //  console.log("user click something------ ")
    let userchoice= choice.getAttribute('id')
    // console.log(`user clicked: ${   userchoice}`)
    playgame(userchoice)
    })
}
function playgame(userchoice){
    console.log(`user clicked: ${userchoice}`)
}
   