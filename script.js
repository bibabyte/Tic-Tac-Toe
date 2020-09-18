// === Minimize global code === \\
// -- use factory functions and modules

// Gameboard - 3D array
const gameboard = () => {
	let box = document.querySelector('#container');
	// Create a 2D array of divs
	let rows = 3;
	
	box.style.gridTemplateColumns.gridTemplateRows = `repeat(${rows}, 1fr)`;
	
	// Dynamic sizing
	/*if (window.innerHeight > window.innerWidth) {
		box.style.width = 70vw;
	} else {
		box.style.width = 70vh;
	}*/
	for (rows; rows > 0; rows--) {
		let board = document.createElement('div');
		box.appendChild(board);	
			let count = 0;
			console.log(count);
			count++;
	}
}
gameboard();
/*function setGrid() {

	

	// Place divs in the etch-a-sketch
	for(let i = gridWidth * gridHeight; i > 0; i--){
		let etchGrid = document.createElement('div');
		etchGrid.className = 'etchGridBox';
		
		etchGrid.addEventListener("touchstart", touchStart);
	
		gridContainer.appendChild(etchGrid);
	}
} 
*/



//3D array

let board = [
	['x', '0', 'x'],
	['0', 'x', '0'],
	['x', '0', 'x']
]
console.log(board);

// Players
const player = (name, symbol) => {
	var player = Object.create(player.prototype);
	return { name, symbol };
}


/*function createBook(title, author, pages, read, index, color) {
	var book = Object.create(createBook.prototype);
	return {title, author, pages, read, index, color};
}*/

// Gameflow
