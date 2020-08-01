'use strict';

const simpleSum = (arr) => {
  return arr.reduce((acc, val, idx) => acc+=val, 0);
};

module.exports= simpleSum;