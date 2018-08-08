    hasRowConflictAt: function(rowIndex) {
      var counter = 0;
      for (var i = 0; i < this.rows()[rowIndex].length; i++){
      //for (var i = 0; i < this.get('n'); i++){
      //for (var i = 0; i < 2; i++){
        if (this.rows()[rowIndex][i] === 1) {
          counter++;
          if (counter > 1) {
            return true;
          }
        }
      }
        return false;
    },
    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {
      for (var j = 0; j < this.rows().length; j++){
        if (this.hasRowConflictAt(j)) {
          return true;
        }
      }
      return false; // fixme
    },
    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex) {
      var counter = 0;
      for (var i = 0; i < this.rows().length; i++){
        if (this.rows()[i][colIndex] === 1) {
          counter++;
          if (counter > 1) {
            return true;
          }
        }
      }
      return false; // fixme
    },
    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
      for (var j = 0; j < this.rows().length; j++){
        if (this.hasColConflictAt(j)) {
          return true;
        }
      }
      return false; // fixme
    },