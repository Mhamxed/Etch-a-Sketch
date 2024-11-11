function creategrid(size){
    let board = document.getElementById("board")
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i=0; i < size * size; i++){
        let color = "black"
        const cell = document.createElement("div")
        board.insertAdjacentElement("beforeend", cell)
        cell.addEventListener('mouseover', colorSqare)
    }
}

creategrid(16)

function changeSize(input){
    if (input >=2 || input <= 100){
        creategrid(input)
    } else {
        console.log("TOO MANY SQUARES!")
    }
}

function colorSqare(){
    if (color == 'random'){
        this.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
    } else {
        this.style.backgroundColor = color
    }
}

function changeColor(choice){
    color = choice
}

function reset(){
    let board = document.getElementById("board")
    let divs = board.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}