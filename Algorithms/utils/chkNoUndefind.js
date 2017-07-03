"use strict";
/** Checking parameters on undefined
 * @param  {...any} - Value for checking
 * @return {number} - true - if variables valid; false - when others
 */
export default (a, b) => {
     // Check count arguments and first argument is object
     if (arguments.length < 2 /*|| typeof A !== "object"*/) {
          return false;
     }

     return !((a === void (0)) || (b === void (0)));
}