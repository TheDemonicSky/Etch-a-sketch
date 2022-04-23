const gameBoard = document.getElementById('grid');
const button = document.getElementById('new');
const lines = document.getElementsByClassName('cell');
const rainbow = document.getElementById('rainbow');
new Grid(gameBoard)

function Grid(gridElement) {
	const GRID_SIZE = playerInput();
	const CELL_SIZE = 70 / GRID_SIZE;
	gridElement.style.setProperty('--grid-size', GRID_SIZE);
	gridElement.style.setProperty('--cell-size', `${CELL_SIZE}vh`);
	createCellElements(gridElement);
	function createCellElements(gridElement) {
		const cells = [];
		for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
			const cell = document.createElement('div');
			cell.classList.add('cell');
			cells.push(cell);
			gridElement.append(cell);
		}
	}
}


function playerInput() {
	while (true) {
		let userInput = Number(prompt('How big would you like the game board to be? Has to be 100 or less', 16));
		
		if (userInput <= 100 && userInput > 0) {
			return userInput;
			break;
		} else {
			alert('Not a valid Input try again')
		}
	}
};

gameBoard.addEventListener('mouseover', function(event) {
	event.target.style.backgroundColor = 'black';
}, false)

button.addEventListener('click', function() {
	for (var i = 0; i < lines.length; i++) {
		lines[i].style.backgroundColor = '#AAA'
	}
	new Grid(gameBoard);
})

rainbow.addEventListener('click', function() {
	
})