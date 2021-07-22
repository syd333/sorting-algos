// SELECTION SORT
// SIMILAR TO BUBBLE SORT BUT INSTEAD OF FIRST PLACING LARGE VALUES INTO SORTER POSITION (@ END OF ARRAY)
// IT PLACES SMALL VALUES INTO SORTED POSITION

// PSEUDOCODE
// store the first element as the smallest value youve seen so far.
// compare this item to the next item in the array until you find a smaller number
// if a smaller number is found, designate that smaller number to be the new "minimum"
// and continue until the end of array.
// if the "minimum" is not the value (index) you initially began with, swap the two values
// repeat this with the next element until the array is sorted

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    console.log("******************");
    console.log(arr);
    console.log("swapping: ");
    let temp = arr[i];
    arr[i] = lowest;
    arr[lowest] = temp;
    console.log("******************");
  }
  return arr;
}

selectionSort([34, 22, 10.19, 17]);
