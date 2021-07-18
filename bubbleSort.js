// BUBBLE SORT
// sorting algo where the largest values bubble up to the top

// TIME COMPLEXITY = O(N2)
// if data is nearly sorted = O(N) linear 

//PSEUDOCODE
// start loopin from  end of arr towards beginning  with a varable called i 
// start an inner loop with a variable called j from beginning until i-1 
// if arr[j] is greater than arr[j+1], swap these two values
// return the sorted array 

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                //SWAP
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i -1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                //SWAP
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//ES2015
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i -1; j++) {
            if (arr[j] > arr[j+1]) {
                //SWAP
               swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

//OPTIMZATION
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i -1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                //SWAP
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSort([37,45,29,8]);

// SWAPING FUNCTIONALITY 
function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}''

//ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}