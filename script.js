// === Minimize global code === \\
// use factory functions and modules
//let container = document.querySelector('#container');

// Gameboard - 3D array
const gameboard = () => {
	let container = document.querySelector('#container');
	// Create a 2D array of divs
	let boxes = 9;
	
	/*container.style.gridTemplateColumns = `repeat(${boxes}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${boxes}, 1fr)`;*/
	
	// Dynamic sizing
	if (window.innerHeight > window.innerWidth) {
		container.style.width = '75vw';
	} else {
		container.style.width = '75vh';
	}
	for (boxes; boxes > 0; boxes--) {
		let board = document.createElement('div');
		board.classList.add('boxes');
		board.textContent = boxes;
		container.appendChild(board);	

	}
}
gameboard();






/*function setGrid() {
	const gridContainer = document.createElement('div');
	container.appendChild(gridContainer);
	let gridWidth = 16;
	let gridHeight= Math.floor(gridWidth * 0.75);
	
	// Set dynamic rows and columns (CSS grid)
	gridContainer.className = 'boxes';
	gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`;*/

	/*// Set etch-a-sketch window size dependent on browser orientation
	//------to learn: how to change if viewport changes after load-----
	if(window.innerHeight > window.innerWidth){
		gridContainer.style.width = `70vw`;
		gridContainer.style.height = `52.5vw`;
		
	}
	else {
		gridContainer.style.width = `70vh`;
		gridContainer.style.height = `52.5vh`;
		
	}
*/
	// Place divs in the etch-a-sketch
	/*for(let i = gridWidth * gridHeight; i > 0; i--){
		let etchGrid = document.createElement('div');
		etchGrid.className = 'boxes';
		
	//	etchGrid.addEventListener("touchstart", touchStart);
	
		gridContainer.appendChild(etchGrid);
	}
	console.log('hi');
} */





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

/*let board = [
	['x', '0', 'x'],
	['0', 'x', '0'],
	['x', '0', 'x']
]
console.log(board);*/

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
