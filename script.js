// === Minimize global code === \\
// use factory functions and modules
//let container = document.querySelector('#container');

// Gameboard - 3D array
const gameboard = () => {
	let container = document.querySelector('#container');
	// Create a 2D array of divs
	let boxes = 9;
	// Dynamic sizing
	if (window.innerHeight > window.innerWidth) {
		container.style.width = '75vw';
	} else {
		container.style.width = '75vh';
	}
	// Populate boxes
	for (boxes; boxes > 0; boxes--) {
		let board = document.createElement('div');
		board.classList.add('boxes');
			board.textContent = boxes;
		board.addEventListener('click', turn);
		container.appendChild(board);	
	}
}
gameboard();


function turn(e) {
	if (player.id = 'x'){
		e.target.textContent = 'X';
	}
	e.target.textContent = 'O';
}






//3D array

/*let board = [
	['x', '0', 'x'],
	['0', 'x', '0'],
	['x', '0', 'x']
]
console.log(board);*/

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



// ===== NOTES ==== \\
/*
	create players with ID x, and o
		each person inputs their name and the first chooses symbol
			eventually have player choose any key and have (turn()) input that
	input 'click' event (turn()) to the 2-d board array
	game mechanics
		how does the computer know when there's a winner?
		person v computer
		
	make it look good
	
	*/