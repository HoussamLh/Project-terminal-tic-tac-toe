/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

function validateMove(move, board) {
    const regex = /^[1-3],[1-3]$/;
    if (!regex.test(move)) {
        console.log("Try again...");
        return false;
    }

    const [rowStr, colStr] = move.split(",");
    const row = parseInt(rowStr) - 1;
    const col = parseInt(colStr) - 1;

    if (board[row][col] !== "_") {
        console.log("Try again...");
        return false;
    }

    return true;
}

export function makeMove(board, move, player) {
    if (!validateMove(move, board)) {
        return false;
    }

    const [rowStr, colStr] = move.split(",");
    const row = parseInt(rowStr) - 1;
    const col = parseInt(colStr) - 1;

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
