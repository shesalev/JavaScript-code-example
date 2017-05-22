/**
 * Linear search in array
 * @param  {array}  arr - Array
 * @param  {any}    x   - Value for search
 * @return {number}     - Array index of an element
 */
export default (arr, x) => {
     let idx = -1;

     if (arr === void (0)) {
          return idx;
     }

     for (var i = 0; i < arr.length; i++) {
          if (arr[i] === x) {
               idx = i;
          }
     }

     return idx;
}