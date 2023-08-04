function sort(arr) {
 
  return arr.sort((a, b) => a - b);
}

const unsorted = [3, 2, 1, 5, 4];
const sorted = sort(unsorted);
console.log(sorted);
