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