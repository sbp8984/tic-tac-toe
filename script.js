const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
let circleTurn

const cellElements = document.querySelectorAll('[data-cell]')

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
})

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    //place Mark
    // Check for Win
    // Check for Draw
    // Switch Turns
}

function placeMark (cell, c)