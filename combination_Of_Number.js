let finalResultSet = [];
function combos(n) {
  finalResultSet = [];
  let arr = []
  permutations(arr, 0, n, n);
  return finalResultSet;
}


function permutations(arr, index, num, reducedNum) {
  if (reducedNum < 0)
    return;
  if (reducedNum == 0) {
    finalResultSet.push(arr.slice(0, index));
    return;
  }
  let prev = (index == 0) ? 1 : arr[index - 1];
  for (let k = prev; k <= num; k++) {
    arr[index] = k;
    permutations(arr, index + 1, num, reducedNum - k);
  }
}