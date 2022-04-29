function findCombinationsHelper(array, index, num, reduceNumber) {
  if (reduceNumber < 0) return;

  if (reduceNumber == 0) {
    let tmp = [];
    for (let i = 0; i < index; i++) {
      tmp.push(array[i]);
    }
    console.log(tmp);
    return;
  }

  let prev = index == 0 ? 1 : array[index - 1];

  for (let j = prev; j <= num; j++) {
    array[index] = j;
    findCombinationsHelper(array, index + 1, num, reduceNumber - j);
  }
}

function findCombinations(n) {
  let arr = [];
  findCombinationsHelper(arr, 0, n, n);
}

let n = 5;
findCombinations(n);
