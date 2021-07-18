// BUBBLE SORT
//sorting algo where the largest values bubble up to the top
//PSEUDOCODE
// start loopin from with a varable called i the end of the array towards the beginning
// start an inner loop with a variable called j from beginning until i-1 
// if arr[j] is greater than arr[j+1], swap these two values

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