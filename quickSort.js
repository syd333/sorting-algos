// QUICK SORT
// like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// works by selecting one element (called the 'pivot') & finding the index where the pivot should end up in sorted array


//PIVOT HELPER
// implement a function responsible arranging elements in an array on either side of pivot
// given an array, this helper function should designate an element as the pivot
// it should then rearrange elements in the array so that all values less than the pivot are moved
    // to the left of pivot and all values greater than the pivot are moved to the right of pivot
// the order of elements on either side of the pivot doesnt matter
// the helper should do this in place, not create a new array
// when complete, the helper should return the index of the pivot

//PICKING A PIVOT
// the runtime of quick sort depends in part on how one selects the pivot
// ideally, pivot should be chosen so that its roughly the median value in the data set youre sorting
// for simplicity, well always choose the pivot to be the first element 

//PIVOT PSEUDOCODE
// helps to accept three arguments: an array, a start index, & end index (these can default to 0 & the array length minus 1)
// grab the pivot from the start of the array
// store the current pivot index in an variable (this will keep track of where the pivot should end up)
// loop through the arrray from the start until the end
    // if the pivot is greater than the current element, increment the pivot index variable
    // and then swap the current element wih the element at the pivot index
// swap the starting element (i.e. the pivot) with the pivot index
// return the pivot index