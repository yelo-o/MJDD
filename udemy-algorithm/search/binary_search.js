function binarySearch(arr, target){
  // initialize
  let left = 0;
  let right = arr.length - 1; // 5 - 1
  let pointer = Math.floor((left + right) / 2);

  while (arr[pointer] !== target && left <= right) {
    if (arr[pointer] < target) {
      left = arr[pointer] + 1;
    } else {
      right = arr[pointer] - 1;
    }
    pointer = Math.floor((left + right) / 2);
  }
  if (arr[pointer] === target) {
    return target;
  }
  return -1;
}
let answer = binarySearch([1,2,3,4,5],6);
console.log(answer);