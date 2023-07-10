const findMaxSum = (arr) => {
  let maxSum = arr[0];
  let currentSum = arr[0];
  for (let index in arr) {
    currentSum = Math.max(arr[index], currentSum + arr[index]);
    // console.log("arr[index] " + arr[index]);
    // console.log("current sum: " + currentSum);
    maxSum = Math.max(maxSum, currentSum)
    // console.log("max sum: " + maxSum);
  }

  return maxSum
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaxSum(arr)) // 6
