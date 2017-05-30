/**
 * Выполняет n итераций и n+1 проверку
 * Более эффективет. Процедура прекращает поиск в массиве,
 * как толко она находит индекс i, для которого A[i]=x.
 */
import checkInput from "./checkInputVariable";
/**
 * Better linear search in array
 * when x found then return
 * @param  {array}  A - Array
 * @param  {any}    x - Value for search
 * @return {number}   - Array index of an element or -1 if not found
 */
export default (A, x) => {
     // set not found value
     let answer = -1;

     // check input variable
     if (checkInput(A, x)) {
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