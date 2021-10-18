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


