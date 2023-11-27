function customMap(arr, callbackFunction) {
  // Check if the provided argument is an array
  if (!Array.isArray(arr)) {
    // Throw an error or return early to handle the invalid input
    throw new Error("Argument is not an array!");
  }

  // Initialize an empty array to store the results of the mapping operation
  let resultArray = [];

  // Loop through each element of the array
  for (let i = 0; i < arr.length; i++) {
    // Push the result of the callback function to the resultArray
    resultArray.push(callbackFunction(arr[i], i, arr));
  }

  return resultArray;
}
