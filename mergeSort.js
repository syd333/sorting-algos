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