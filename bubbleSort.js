// BUBBLE SORT

//sorting algo where the largest values bubble up to the top

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