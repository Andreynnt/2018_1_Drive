# Code storm — "Битва умов" для программистов</h1>

## Здесь можно поиграть — [code-stom](https://code-storm.ru)
```Бэкенд долго запускается, поэтому прелоадер будет довольно долго. Если сайт недоступен, то скорее всего закончился срок аренды сервера. Попробуйте зайти на бесплатный хостинг ниже```
## А вот версия на [Heroku](https://frontend-drive.herokuapp.com)
```Посколько этот хостинг бесплатный, то при первой загрузке придется подождать, пока запуститься frontend и backend сервера```
## Описание :clipboard:
Наша игра сделана для тех, кому нравятся викторины, но никогда не хотелось вспоминать дату крещения Руси и период полураспада радия. Благодаря нам у вас есть возможность сыграть в викторину с вопросами по CSS, JS, SQL и JAVA в одиночном режиме или против других программистов. Выясните что общего у Цоя, Ленина и PHP, признайтесь всему миру, что играетесь со шрифтами и выясните наконец у кого был самый длинный код на вашем последнем проекте. 
## Что круто? :fire::fire::fire:
#### Полноценное SPA приложение без сторонних фреймворков
- Собственная реализация bus-emitor-a — key-value подписки на события (Аналог beakbone.js)
- MVC-архитектура почти как у Uber
- ES6 модули и другие прелести webpack'a
- 3 режима игры - online, offline и multiplayer
- PWA - progressive web application
``` Для этого используется Service Worker. У нас есть специальная версия игры, в которую можно играть даже без интернета. Добавляем иконку на рабочий стол телефона и gotcha! ```
- Шаблонизатор - PUG
- использование Websocket для мультиплеера
- Google Material Design в качестве вдохновителя
- Адаптивная верстка по BEM для разных платформ - компьютеры, планшеты, телефоны, утюги
- Возможность выбирать мультяшную аватарку для своего профиля
- Отдельные страницы с ошибками (в контексте SPA, конечно), например not-found. Попробуйте зайти на /abracadabra
- Бекенд, написанный нами на Java
- Continuous integration с помощью Travis
- Использование линтера


#### В игре есть несколько режимов, а именно - синглплеер (online версия и offline), и мультиплеер на двоих человек.

## Singleplayer :video_game:
В синглплеере 3 раунда, в каждом из которых 3 вопроса, на тему, выбранную игроком. Раунд считается пройденным, если в нем как минимум два из трех ответов верны. 
Онлайн версия отличается от оффлайн тем, что в ней ответы посылаются на сервер и возвращается результат. А в оффлайн версии ограниченное количество заранее подготовленных вопросов с ответами. К сожалению, пока количество вопросов в обоих версиях игры совпадает, но в будущем мы расширим количество вопросов и тем для большего разнообразия.

## Multiplayer :video_game::video_game:
Игроки открывыют комнату поиска оппонента, и после того, как это сделают два пользователя, игра начинается.
Сначала каждый из них выбирает тему. Тема игрока, который выбрал быстрее противника, будет первой. Вторая тема - выбирается случайным образом.
И последняя будет выбором оставшегося игрока. Победитель получает 1 очко, которое сразу отображается в таблице лидеров.

## Разработчики :sunglasses:
- [Андрей Бабков](https://github.com/Andreynnt)
- [Евгений Морозов](https://github.com/eugenmorozov)
