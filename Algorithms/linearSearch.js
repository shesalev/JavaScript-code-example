"use strict";
import chkNoUndefind from "./utils/chkNoUndefind";
/**
 * Linear search in array
 * Выполняет n итераций и n+1 проверку
 * Неэффективен. Процедура продолжает поиск в массиве даже после того, ка индекс i
 * i, для которого A[i]=x, уже найден.
 * @param  {Object[]} A - Array
 * @param  {any}      x - Value for search
 * @return {number}     - Array index of an element or -1 if not found
 */
export default (A, x) => {
     // set not found value
     let answer = -1;

     // check input variable
     if (!chkNoUndefind(A, x)) {
          return answer;
     }

     // linear search x in array     
     for (let i = 0; i < A.length; i++) {
          if (A[i] === x) {
               answer = i;
          }
     }

     return answer;
}