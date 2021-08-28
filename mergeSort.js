// MERGE SORT
// better when working with arrays with LOTS of elements 
// faster sortings 
// reduces time complexity from O(N2) to O(N LOG N)


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

merge([1,10,50], [2,14,99,100])