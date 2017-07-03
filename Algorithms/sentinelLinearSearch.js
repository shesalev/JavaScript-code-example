"use strict";
/** @module color/mixer */
import chkNoUndefind from "./chkNoUndefind";
/** Better linear search in array
 * when x found then return
 * Выполняет <= n итераций и 1 проверку
 * Более эффективет. Процедура прекращает поиск в массиве,
 * как толко она находит индекс i, для которого A[i]=x.
 * @param  {Object[]} A - Array
 * @param  {any}      x - Value for search
 * @return {number}     - Array index of an element or -1 if not found
 */
export default (A, x) => {
    // set not found value
    let answer = -1,
        last = A.length,
        i = 0;

    // check input variable
    if (!chkNoUndefind(A, x)) {
        return answer;
    }

    // Add search value to array 
    A[last] = x;

    // linear search x in array
    while (A[i] !== x) {
        i += 1;
    }

    // if finded element is not last
    if (i !== last) {
        answer = i;
    }

    return answer;
}