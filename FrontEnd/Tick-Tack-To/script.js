let mainMusic = new Audio("Audio/alex.mp3")
let turnMusic = new Audio("Audio/ting.mp3")
let gameOverMusic = new Audio("Audio/gameover.mp3") 
let turn = "X"
let gameover = false

// function to change turn

const changeTurn = () =>{
    return turn === "X"?"0":"X" 
}

// function to check win

const checkWin = () => {
    let text = document.getElementsByClassName('test');
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e => {
        if((text[e[0]].innerText === text[e[1]].innerText) && (text[e[1]].innerText === text[e[2]].innerText) &&
        (text[e[0]].innerText !== "")){
            document.querySelector('.gameinfo').innerText = text[e[0]].innerText +" Won"
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"    // display image at win
        }
    })
}

// logic

mainMusic.play();    // main music if want can use continue in background 
let box = document.getElementsByClassName("box"); // select box(div)
Array.from(box).forEach(element => // this event lissner will return html collection to make it array apply foreach method
{ 
    let text = element.querySelector('.test');  // to change contain of box(span)
    element.addEventListener('click', () => {
        if (text.innerText === '') {
            text.innerText = turn;
            turn = changeTurn();        // to change the turn of x and 0
            turnMusic.play();           // it will make ting sound
            checkWin();
            if (!gameover) {              
                document.getElementsByClassName('gameinfo')[0].innerText = "Turn for " + turn;
            }
        }
    })
})


// reset button 

reset.addEventListener('click',() =>{
    let text = document.querySelectorAll('.test');
    Array.from(text).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false
    document.getElementsByClassName('gameinfo')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"      // remove image at reset
    gameOverMusic.play();
})