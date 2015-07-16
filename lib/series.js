'use strict';

var Series = function(string){
  this.digits = string.split("").map(function(num) { return parseInt(num) });
};

Series.prototype.slices = function(num) {
  if (num > this.digits.length) { throw new Error('Slice size is too big.'); }
  else {
    var slices = [], slice;
    var digitsCopy = this.digits;
    var length = this.digits.length;

    for (var i = 0; i < length; i++) {
      slice = digitsCopy.slice(i, i+num);
      slices.push(slice);
      if (i + num >= length) { break; }
    }
    return slices;    
  }

}