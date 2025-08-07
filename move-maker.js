function parseMove(move) {
    // Trim whitespace and split
    const trimmedMove = move.trim();
    const regex = /^[1-3],[1-3]$/;
    if (!regex.test(trimmedMove)) {
        return null;
    }
    const [rowStr, colStr] = trimmedMove.split(",");
    const row = parseInt(rowStr, 10) - 1;
    const col = parseInt(colStr, 10) - 1;
    return { row, col };
}

function validateMove(move, board) {
    const coords = parseMove(move);
    if (!coords) {
        console.log("Invalid format. Please enter row,col with numbers 1 to 3.");
        return false;
    }
    const { row, col } = coords;
    if (board[row][col] !== "_") {
        console.log("That spot is already taken. Try again...");
        return false;
    }
    return true;
}

export function makeMove(board, move, player) {
    if (player !== "X" && player !== "O") {
        console.log("Invalid player. Must be 'X' or 'O'.");
        return false;
    }

    if (!validateMove(move, board)) {
        return false;
    }

    const { row, col } = parseMove(move);
    board[row][col] = player;
    return true;
}

// --- Test validateMove and makeMove ---
let board = [
    ['X', '_', '_'],
    ['_', 'X', '_'],
    ['O', 'O', 'X']
];

console.log("Before:", board);
console.log("Move result:", makeMove(board, "1,2", "O")); // true
console.log("After:", board);
// Invalid move (already filled)
console.log("Move result:", makeMove(board, "1,1", "X")); // false
// Invalid format
console.log("Move result:", makeMove(board, "4,2", "O")); // false
// Invalid player
console.log("Move result:", makeMove(board, "2,2", "Z")); // false

