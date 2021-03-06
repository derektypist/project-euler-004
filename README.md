# Project Euler 004 - Largest Palindrome Product

A palindromic number reads the same both ways.  The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.

The aim is to find the largest palindrome made from the product of two 3-digit numbers as well as other n-digit numbers using HTML Forms and JavaScript.

Information is at [Project Euler 004](https://projecteuler.net/problem=4)

## UX

**Getting Started**

Enter a whole number between 1 and 4 and click on the Submit Button.  You will see the number entered as well as the largest palindrome product for that n-digit number, unless you have made an invalid input.  For example, the largest palindrome made from the product of two 3-digit numbers is 906609.  Click on the Reset Button to clear that information or to start again.

**User Stories**

As a user, I expect to get an error message, If I do any of:

    * Not entering anything in the input field
    * Entering text that is not a number (e.g. bus)
    * Entering a number less than 1 or greater than 4
    * Entering a number, but it is not an integer

As a user, I expect `largestPalindromeProduct(2)` to return a number.

As a user, I expect `largestPalindromeProduct(2)` to return 9009.

As a user, I expect `largestPalindromeProduct(3)` to return 906609.

**Information Architecture**

The function `largestPalindromeProduct(n)` returns a number (integer), where `n` is between 1 and 4.

## Features

Allows the user to enter the number as well as the largest palindrome product of that n-digit number.  For example, if the number was 2, the largest palindrome is 9009.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Google Fonts and Bootstrap 5.1.3.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-004) at the main branch.

## Credits

### Content

Written be me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)