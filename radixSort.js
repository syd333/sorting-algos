// RADIX SORT
// SPECIAL SORTING ALGO THAT WORKS ON LISTS OF NUMBERS
// NEVER MAKES COMPARISONS BETWEEN ELEMENTS
// EXPLOITS THE FACT THAT INFO ABOUT SIZE OF A NUMBER IS ENCODED
    // IN THE NUMBER OF DIGITS
// MORE DIGITS MEANS A BIGGER NUMBER

// ** RADIX SORT HELPER METHODS

// getDigit(num, place) - returns the digit in num @ the given place value
function getDigit (num, i) {
    return Math.floor(Math.abs(num)/ Math.pow(10, i)) % 10;
}
getDigit(7323, 2)
// 7323/100 = 73.23 (Math.floor = 73)
// 73 % 10 = 3


// digitCount(num) - returns the number of digits in num
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// log10 asks 10 to what power gives us this number then math.floor takes away decimal then add 1 (for actual # of digits not index)
// math.abs takes away negative
digitCount(423)


// mostDigits(nums) - given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}
maxDigits([23, 567, 89, 12234324, 90]) //max number = 8


// **  RADIX SORT PSEUDOCODE
// define a function that accepts list of numbers
// figure out how many digits the largest number has (mostDigits)
// loops from k=0 up to this largest number of digits
// for each iteration of the loop:
    // create buckets for each digit (0 to 9) (an empty array with subarrays for 0, 1, 2 etc)
    // place each number in the corresponding bucket based on its kth (0th, 1st, 2nd etc) digit
// replace our existing array w values in our buckets, starting w 0 and going up to 9
// return list at end

