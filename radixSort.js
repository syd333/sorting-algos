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