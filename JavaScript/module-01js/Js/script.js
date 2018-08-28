'use strict';
/*
  Напишите скрипт, для авторизации администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен!'   
    - Если был введен логин совпадающий со значением константы adminLogin, спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
        const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
        
  PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/


const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const opened = ('Добро пожаловать')
const blocked = ('Доступ заперещен!');
const cancel = ('Отменено пользователем!');

const userLogin = prompt ('Введитe логин');

 if (userLogin === adminLogin){
     const userPassword = prompt ('Введите пароль'); 
  if (userPassword === adminPassword){
     alert ( opened );
 } else if (userPassword === null){
     alert ( cancel );
 } else {
    alert ( blocked );
 } 

}else if ( userLogin === null ){ 
     alert ( cancel );
 } else{
    alert ( blocked );
 } 