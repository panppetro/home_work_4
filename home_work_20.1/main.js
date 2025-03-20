// #1
// Створюємо об'єкт userObj з полями firstName, lastName і age.
const userObj = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  console.log(userObj); // { firstName: 'John', lastName: 'Doe', age: 30 }
  
  // #2
  // Додаємо до об'єкта userObj метод fullName(), який повертає повне ім'я.
  userObj.fullName = function() {
    return this.firstName + ' ' + this.lastName;
  };
  
  console.log(userObj.fullName()); // 'John Doe'
  
  // #3
  // Функція defUpperStr, що повертає рядок у верхньому регістрі.
  // Якщо параметр не передано або він falsy, повертає 'DEFAULT TEXT'.
  function defUpperStr(str) {
    // Використовуємо логічний оператор || для задання значення за замовчуванням.
    return (str || 'default text').toUpperCase();
  }
  
  console.log(defUpperStr('My text')); // 'MY TEXT'
  console.log(defUpperStr());          // 'DEFAULT TEXT'
  
  // #4
  // Функція evenFn(n) повертає масив парних чисел від 1 до n (0 не включається).
  function evenFn(n) {
    const result = [];
    // Використовуємо цикл for від 1 до n включно.
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        result.push(i);
      }
    }
    return result;
  }
  
  console.log(evenFn(10)); // [2, 4, 6, 8, 10]
  console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]
  console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  
  // #5
  // Функція weekFn(n) повертає назву дня тижня українською за номером.
  // Якщо параметр не ціле число в діапазоні 1...7, повертає null.
  function weekFn(n) {
    switch (true) {
      case (typeof n !== 'number' || n % 1 !== 0 || n < 1 || n > 7):
        return null;
      case (n === 1):
        return 'Понеділок';
      case (n === 2):
        return 'Вівторок';
      case (n === 3):
        return 'Середа';
      case (n === 4):
        return 'Четвер';
      case (n === 5):
        return "Пʼятниця";
      case (n === 6):
        return 'Субота';
      case (n === 7):
        return 'Неділя';
    }
  }
  
  console.log(weekFn(1));   // 'Понеділок'
  console.log(weekFn(3));   // 'Середа'
  console.log(weekFn(7));   // 'Неділя'
  console.log(weekFn(9));   // null
  console.log(weekFn(1.5)); // null
  console.log(weekFn('2')); // null
  
  // #6
  // Функція ageClassification(n) повертає рядок за віковою категорією згідно з умовами,
  // використовуючи лише тернарний оператор.
  function ageClassification(n) {
    return n < 0 || n === 0 ? null :
           n > 122 ? null :
           n > 0 && n <= 24 ? 'Дитинство' :
           n > 24 && n <= 44 ? 'Молодість' :
           n > 44 && n <= 65 ? 'Зрілість' :
           n > 65 && n <= 75 ? 'Старість' :
           n > 75 && n <= 90 ? 'Довголіття' :
           n > 90 && n <= 122 ? 'Рекорд' : null;
  }
  
  console.log('    -1 :', ageClassification(-1));    // null
  console.log('     0 :', ageClassification(0));      // null
  console.log('     1 :', ageClassification(1));      // 'Дитинство'
  console.log('    24 :', ageClassification(24));     // 'Дитинство'
  console.log(' 24.01 :', ageClassification(24.01));    // 'Молодість'
  console.log('    44 :', ageClassification(44));     // 'Молодість'
  console.log(' 44.01 :', ageClassification(44.01));    // 'Зрілість'
  console.log('    65 :', ageClassification(65));     // 'Зрілість'
  console.log('  65.1 :', ageClassification(65.1));    // 'Старість'
  console.log('    75 :', ageClassification(75));     // 'Старість'
  console.log(' 75.01 :', ageClassification(75.01));    // 'Довголіття'
  console.log('    90 :', ageClassification(90));     // 'Довголіття'
  console.log(' 90.01 :', ageClassification(90.01));    // 'Рекорд'
  console.log('   122 :', ageClassification(122));    // 'Рекорд'
  console.log('122.01 :', ageClassification(122.01));  // null
  console.log('   150 :', ageClassification(150));    // null
  
  // #7
  // Функція oddFn(n) повертає масив непарних чисел від 1 до n (0 не включається)
  // із використанням лише циклу while.
  function oddFn(n) {
    const result = [];
    let i = 1;
    while (i <= n) {
      if (i % 2 !== 0) {
        result.push(i);
      }
      i++;
    }
    return result;
  }
  
  console.log(oddFn(10)); // [1, 3, 5, 7, 9]
  console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
  console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  
  // #8
  // Основна функція mainFunc(a, b, callback) приймає два числа та функцію,
  // яка виконує обчислення над цими числами. Якщо третій параметр не функція,
  // повертає false.
  function mainFunc(a, b, callback) {
    return typeof callback === 'function' ? callback(a, b) : false;
  }
  
  // Callback функції:
  function cbRandom(a, b) {
    // Повертає випадкове ціле число в діапазоні [a, b]
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  
  function cbPow(a, b) {
    return Math.pow(a, b);
  }
  
  function cbAdd(a, b) {
    return a + b;
  }
  
  console.log(mainFunc(2, 5, cbRandom)); // випадкове число від 2 до 5, наприклад, 3
  console.log(mainFunc(2, 5, cbPow));    // 2^5 = 32
  console.log(mainFunc(2, 5, cbAdd));    // 2+5 = 7
  console.log(mainFunc(2, 5, 'not a func')); // false