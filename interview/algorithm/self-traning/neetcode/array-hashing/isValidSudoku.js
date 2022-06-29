// 36 -leetcode -medium

function isValidSudoku(board) {
  let hashRow = {};
  let hashColumn = {};
  let hashBox = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let item = board[r][c];
      if (board[r][c] == '.') continue;

      const square = [Math.floor(r / 3), Math.floor(c / 3)];

      if (
        (hashRow[r] && hashRow[r][item]) ||
        (hashColumn[c] && hashColumn[c][item]) ||
        (hashBox[square] && hashBox[square][item])
      )
        return false;

      if (hashRow[r] === undefined) {
        hashRow[r] = {};
      }
      hashRow[r][item] = true;

      if (hashColumn[c] === undefined) {
        hashColumn[c] = {};
      }
      hashColumn[c][item] = true;

      if (hashBox[square] === undefined) {
        hashBox[square] = {};
      }
      hashBox[square][item] = true;
    }
  }
  return true;
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
