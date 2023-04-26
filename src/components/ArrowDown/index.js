import './style.css'

function ArrowDown(currentPlayer = 1) {
    return `
        
        <img class="arrow-down" src="images/IconArrowDown.png" alt="icone de uma seta para baixo" data-currentPlayer="${currentPlayer}">      

    `;
}           

export default ArrowDown;