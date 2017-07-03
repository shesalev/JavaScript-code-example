"use strict";
/** Factorial calculation 
 * @param  {number} n - n>=0
 * @return {number | undefined}     - Factorial n
 */
let factorial = (n) => {
    return (n > 0) ? n * factorial(n - 1) : 1;
};

export default factorial;
