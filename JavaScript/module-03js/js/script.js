'use strict';

 //массив с логинами пользователей
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"]; 
// запрос логина
const login = prompt('Введите логин от 4 до 16 символов','');


// проверка на количество введенных символов
const isLoginValid = function(login) {
    if (login.length < 4 || login.length > 16){
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
        return false;
    }
    return true;
  };
//   проверяем наличие login в массиве allLogins
  const isLoginUnique = function ( allLogins, login) {
    if (allLogins.includes(login)) {
        alert ('Такой логин уже используется!');
        return false;
    }
    return true;
  };

// проверяем на валидность 
  
  const addLogin = function( login) {
    if(isLoginValid(login) && isLoginUnique(login)){
        alert('Логин успешно добавлен!');
        logins.push(login);
    } 

  };
  addLogin(login);

addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
