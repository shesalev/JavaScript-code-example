/**
 * Checking parameters on undefined
 * @param  {Object[]} A - Array
 * @param  {any}      x - Value for search
 * @return {boolean}    - true - if variables valid; false - when others
 */
export default (A, x) => {
     // Check count arguments and first argument is object
     if (arguments.length < 2 /*|| typeof A !== "object"*/) {
          return false;
     }

     return !((A === void (0)) || (x === void (0)));
}