import getBoardFromFile from "./inputFile.js";
import getRandomNum from "./utils.js";

const getRandomLifeStatus = () => Math.floor(Math.random() * 2);

const generateBoard = (row, col) => {
	const board = [];
	for (let x = 0; x < row; x += 1) {
		board[x] = [];
		for (let y = 0; y < col; y += 1) {
			board[x][y] = getRandomLifeStatus();
		}
	}
	return board;
};

const getAliveNeighbours = (board, row, col) => {
	const neighbours = [
		board[row - 1] ? board[row - 1][col - 1] || false : false,
		board[row - 1] ? board[row - 1][col] || false : false,
		board[row - 1] ? board[row - 1][col + 1] || false : false,
		board[row] ? board[row][col - 1] || false : false,
		board[row] ? board[row][col + 1] || false : false,
		board[row + 1] ? board[row + 1][col - 1] || false : false,
		board[row + 1] ? board[row + 1][col] || false : false,
		board[row + 1] ? board[row + 1][col + 1] || false : false
	];
	
	return neighbours.reduce((acc, neighbour) => neighbour ? acc + 1 : acc, 0);
};

const iter = (board) => {
	let newBoard = [];
	for (let row = 0; row < board.length; row += 1) {
		newBoard[row] = [];
		for (let col = 0; col < board[0].length; col += 1) {
			const aliveNeighbours = getAliveNeighbours(board, row, col);

			if (board[row][col]) {
				if (aliveNeighbours === 2 || aliveNeighbours === 3) {
					newBoard[row][col] = 1;
				} else {
					newBoard[row][col] = 0;
				}
			} else {
				if (aliveNeighbours === 3) {
					newBoard[row][col] = 1;
				} else {
					newBoard[row][col] = 0;
				}
			}
		}
	}
	return newBoard;
};

const outputToConsole = (board) => {
	console.clear();
	let output = '';
	for (let i = 0; i < board.length; i += 1) {
		output += `${board[i].join('')}\n`;
	}
	console.log(output);
};

const getStartBoard = () => {
	if (process.argv.length === 3) {
		return getBoardFromFile();
	}
	return generateBoard(row, col);
};

const runApp = (startBoard) => {
	let board = startBoard;
	setInterval(() => {
		outputToConsole(board);
		board = iter(board);
	}, 1000)
};

const row = getRandomNum();
const col = getRandomNum();
const startBoard = getStartBoard(row, col);
// const startBoard = generateBoard(10, 10);

export default () => runApp(startBoard);
