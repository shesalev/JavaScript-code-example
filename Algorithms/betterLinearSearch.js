"use strict";
/** @module color/mixer */
import chkNoUndefind from "./utils/chkNoUndefind";
/** @description Better linear search in array
 * when x found then return
 * Выполняет <= n итераций и <= n+1 проверку
 * Более эффективет. Процедура прекращает поиск в массиве,
 * как толко она находит индекс i, для которого A[i]=x.
 * @param  {Object[]} A - Array
 * @param  {any}      x - Value for search
 * @return {number}     - Array index of an element or -1 if not found
 */
export default (A, x) => {
     // set not found value
     let answer = -1;

     /**
 * And arrow functions expressions 123
 * 456
 * @param {number} x - A multiplier
 * @return {boolean}- 123 
 */
     let myArrow = x => x * x;

     myArrow();

     // check input variable
     if (!chkNoUndefind(A, x)) {
          return answer;
     }

     // linear search x in array
     for (let i = 0; i < A.length; i++) {
          if (A[i] === x) {
               return i;
          }
     }

     return answer;
}