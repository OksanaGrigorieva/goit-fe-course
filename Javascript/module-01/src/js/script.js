`use strict`;
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




const adminLogin = prompt ('Введит логин');

if (adminLogin === 'admin'){const adminPassword = prompt ('Введите пароль');
if (adminPassword === 'm4ngo1zh4ackz0r'){alert('Добро пожаловать!');}
else if (adminPassword){alert('Доступ заперещен!');} 
else{alert('Отменено пользователем!');}    
}

else if (adminLogin){alert('Доступ заперещен!');} 
else{alert('Отменено пользователем!');}