/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n}); 

  // console.dir(solution.__proto__.togglePiece);
  for (var i = 0; i < n; i++) {
    solution.togglePiece(i,i);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n': n});
  var placeRooks = function(row) {
  //var placeRooks = function(row,column) {
    if(n === row) {
      solutionCount++;
      return;
      //return 
    } else {
      for (var col = 0; col < n; col++) {
        board.togglePiece(row,col);
        if(!board.hasColConflictAt(col)) {
        // if(!board.hasAnyRooksConflicts()) {
          placeRooks(row+1);
        }
        board.togglePiece(row,col);
      }
    }  
  } 
  placeRooks(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutionCount; //fixme
  var solution = new Board({'n': n});
 
  var result;
 
  if (n === 2 || n === 3) {return solution.rows()};

  var placeQueen = function(row) {
  //var placeRooks = function(row,column) {
    if(n === row) {
      solutionCount = JSON.stringify(solution.rows());
      result = JSON.parse(solutionCount);
    } else {
      for (var col = 0; col < n; col++) {
        solution.togglePiece(row,col);
        if(!solution.hasAnyQueenConflictsOn(row, col)) {
        // if(!board.hasAnyRooksConflicts()) {
          placeQueen(row+1);
        }
        solution.togglePiece(row,col);
      }
    }  
  } 
  placeQueen(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(result));
  return result;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var solution = new Board({'n': n});

  if (n === 2 || n === 3) {return solutionCount};

  var placeQueen = function(row) {
  //var placeRooks = function(row,column) {
    if(n === row) {
      solutionCount++; 
    } else {
      for (var col = 0; col < n; col++) {
        solution.togglePiece(row,col);
        if(!solution.hasAnyQueenConflictsOn(row, col)) {
        // if(!board.hasAnyRooksConflicts()) {
          placeQueen(row+1);
        }
        solution.togglePiece(row,col);
      }
    }  
  } 
  placeQueen(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solutionCount;
};
