class SmallestIntegerFinder {
  findSmallestInt(args) {
    const R = require('ramda');
    return R.reduce(R.min, Infinity, args); 
  }
}