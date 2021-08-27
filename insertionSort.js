// INSERTION SORT
// builds up the sort by gradually creating a larger left half which is always sorted

// PSEUDOCODE
// start by picking the second element in the array
// now compare the second element with the one before it & swap if necessary
// continue to the next element and if it is in the incorrect order, iterate through
//      the sorted portion (left side) to place the element in correct place
// repeat until the array is sorted

function insertionSort (arr) {
    for (let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for (let j = i -1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }

    return arr;
}

insertionSort([2,1,9,76,4])