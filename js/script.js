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

*/
function largestPalindromeProduct(n) {
    let max = +[...Array(n)].reduce((a,c) => (a+=9),"");
    let min = (max+1)/10;
    let res = [];
    for (let i=max;i>=min;i--) {
        for (let j=max;j>=min;j--) {
            let num = i*j;
            let numReverse = [...String(num)].reverse().join('');
            if (num == numReverse) {
                res.push(num);
                break;
            }
        }
    }
    return Math.max(...res);

}