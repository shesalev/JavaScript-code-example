# JavaScript code examples

## Алгоритмы

#### linearSearch - линейный поиск в массиве
### Ассимптотическая функция O(n)

Выполняет n итераций и n+1 проверку
Неэффективен. Процедура продолжает поиск в массиве даже после того, как индекс i, для которого A[i]=x, уже найден.

```javascript
let answer = -1;

for (let i = 0; i < A.length; i++) {
     if (A[i] === x) {
          answer = i;
     }
}

return answer;  
``` 

#### betterLinearSearch - линейный поиск в массиве
### Ассимптотическая функция O(n)

Выполняет <= n итераций и <= n+1 проверку
Более эффективет. Процедура прекращает поиск в массиве, как только она находит индекс i, для которого A[i]=x.

```javascript
let answer = -1;

for (let i = 0; i < A.length; i++) {
     if (A[i] === x) {
          return i;
     }
}

return answer;  
```