// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>4 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 4.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Largest Palindrome Product is ${largestPalindromeProduct(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to Return the largest palindrome made from the product of
    two n-digit numbers.
    largestPalindromeProduct(2) returns 9009
    largestPalindromeProduct(3) returns 906609

*/
function largestPalindromeProduct(n) {
    const numReverse = (num) => {
        return Number(num.toString().split('').reverse().join(''));
    };

    const isPalindrome = (num) => {
        return numReverse(num) === num ? true : false;
    };

    let product = 0;
    for (let i=10**(n-1);i<10**(n);i++) {
        for (let j=10**(n-1);j<10**(n);j++) {
            // Check if the product is a palindrome
            if (isPalindrome(i*j) && i*j > product) product = i*j;
        }
    }

    return product;

}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}