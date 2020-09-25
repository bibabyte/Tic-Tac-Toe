// === Minimize global code === \\
// use factory functions and modules	

let squares = [
	/*['', '', ''],
	['', '', ''],
	['', '', '']*/
]
//console.log(squares);

// Gameboard - 3D array
const gameboard = () => {
	let container = document.querySelector('#container');
	// Create a 2D array of divs
	let boxes = 9;
	let cWidth = width();
	//let squares = [];
	// Dynamic sizing
	container.style.width = cWidth;
	container.style.height = cWidth;
	// Populate boxes
	for (boxes; boxes > 0; boxes--) {
		let board = document.createElement('div');
		board.classList.add('boxes');
		board.style.width = cWidth/3;
		board.style.height = cWidth/3;
			board.textContent = boxes;
		let i = 3;
		/*for(i; i > 0; i++) {
			squares[i].push(boxes);
		}*/
		board.addEventListener('click', turn);
		container.appendChild(board);	

	}
		//console.log(squares);
} 
gameboard();
 

function turn(e) {
	if (player.id = 'x'){
		e.target.textContent = 'X';
	} 
	e.target.textContent = 'O';
}






//3D array


// Players
const player = (name, id) => {
	var player = Object.create(player.prototype);
	return { name, id };
}


/*function createBook(title, author, pages, read, index, color) {
	var book = Object.create(createBook.prototype);
	return {title, author, pages, read, index, color};
}*/

// Gameflow



// Display width
function width() {
	if (window.innerHeight > window.innerWidth) {
		return '75vw';
	} 
	return '75vh';
}
// ===== NOTES ==== \\
/*
	FIRST read through TOP instructions again
	
	create players with ID x, and o
		each person inputs their name and the first chooses symbol
			eventually have player choose any key and have (turn()) input that
	input 'click' event (turn()) to the 2-d board array
	game mechanics
		how does the computer know when there's a winner?
		person v computer
		
	make it look good
	
	*/