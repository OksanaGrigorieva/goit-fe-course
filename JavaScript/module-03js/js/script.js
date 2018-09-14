'use strict';

 //массив с логинами пользователей
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"]; 
// запрос логина
const login = prompt('Введите логин от 4 до 16 символов','');


// проверка на количество введенных символов
const isLoginValid = (login) => (login.length < 4 || login.length > 16);
//   проверяем наличие login в массиве allLogins
  const isLoginUnique = ( allLogins, login) => (allLogins.includes(login));

// проверяем на валидность 
  
  const addLogin = ( logins, login) => {
    if ( isLoginValid( login)){
      return 'Ошибка! Логин должен быть от 4 до 16 символов';
    
    } else if (!isLoginUnique( logins, login)) {
      logins.push(login);
      return 'Логин успешно добавлен!';
    }else{
      return 'Такой логин уже используется!';
    } 

  };

  console.log (addLogin( logins,  'Ajax')); // 'Логин успешно добавлен!'
  console.log (addLogin( logins, 'robotGoogles')); // 'Такой логин уже используется!'
  console.log (addLogin( logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  console.log (addLogin( logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
