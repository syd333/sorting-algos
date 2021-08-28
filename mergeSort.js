// MERGE SORT
// better when working with arrays with LOTS of elements 
// faster sortings 
// reduces time complexity from O(N2) to O(N LOG N)

//TIME COMPLEXITY
//BEST && AVERAGE && WORST = O(n log n)

//SPACE COMPLEXITY ::: O(n)


// in order to implement merge sort, its useful to first implement a function responsible for merging two sorted arrays
// given two arrays which are sorted, this helper function should create a new array which is also sorted & consists 
//      of all the elements in the two input arrays
// this function should run in O(n + m)time and O(n + m)space and should not modify the parameters passed to it
// (visit each item in array one time)

// PSEUDOCODE
// create an empty array, take a look at the smallest values in each input array
// while there still values we havent looked at... 
    // if the value in the first array is smaller than the value in second array,
    // push the value in the first array into our results
    // move on to the next value in the first array
        // if the value in the first array is larger than the value in second array,
        // push the value in the second array into our results
        // move on to the next value in second array
// once we exhaust one array, push in all remaining values from other array

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++;
    }
    return results;
}

// merge([1,10,50], [2,14,99,100])


// MERGESORT PSEUDOCODE
// break up the array into halves until you have arrays that are empty or have one element
// once you have smaller sorted arrays, merge those arrays with other sorted arrays 
    // until you are back at the full length of the array
// once the array has been merged back together
// return the merged (and sorted) array

//using recursion 
// using function from above to merge sorted arrays
function mergeSort (arr){
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right)
}

mergeSort([10,24,76,73,72,1,9])