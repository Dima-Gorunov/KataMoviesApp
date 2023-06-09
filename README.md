## Фильмовая база данных
[Ссылка на развернутое приложение](https://kata-movies-app-dima-gorunov.vercel.app)

Добро пожаловать в Фильмовую базу данных! Это веб-приложение, которое предоставляет информацию о фильмах и позволяет пользователю добавлять рейтинги к фильмам. Для получения данных о фильмах мы используем API от themoviedb.

### Установка и запуск проекта

#### Важно: Для корректной работы приложения в России требуется подключение через VPN.

1. Клонируйте репозиторий на свой локальный компьютер.
2. Убедитесь, что у вас установлен Node.js и npm.
3. В корневой директории проекта выполните команду npm install, чтобы установить все зависимости.
4. Создайте файл .env и добавьте в него свой API-ключ от themoviedb, например: API_KEY=your_api_key.
5. Запустите приложение с помощью команды npm start.
6. Приложение будет доступно по адресу http://localhost:3000.
### Использование
Приложение состоит из двух вкладок: Search (Поиск) и Rated (Оцененные).

#### Вкладка Search
На вкладке Search вы можете искать фильмы по названию. Введите ключевое слово в поле поиска и нажмите Enter или кнопку "Search". Будут отображены результаты поиска, включающие информацию о фильмах, такую как название, описание, рейтинг и постеры. Вы можете просмотреть подробную информацию о фильме, нажав на его карточку.

#### Вкладка Rated
На вкладке Rated отображаются фильмы, которым вы присвоили рейтинг. Здесь вы можете видеть информацию о рейтинге, которую вы добавили к каждому фильму. Вам также доступна возможность изменить рейтинг или удалить фильм из списка оцененных.

#### Гостевая сессия
Для использования API от themoviedb мы используем гостевую сессию с действием 36 часов. Это означает, что вы можете добавлять рейтинги к фильмам в течение этого периода. Однако после истечения 36 часов информация о рейтинге будет стерта. Вся информация о гостевой сессии хранится в localStorage вашего браузера.

#### Пагинация
В приложении реализована пагинация для отображения большого количества результатов поиска или оцененных фильмов. Вы можете пролистывать страницы с помощью кнопок "Previous" и "Next" внизу списка фильмов.

#### Адаптивный дизайн
Приложение разработано с учетом адаптивного дизайна, что означает, что оно должно нормально работать как на ПК с разрешением, так и на мобильных устройствах. Я обеспечил оптимальное отображение контента на разных экранах и устройствах.

### Изменения

#### Версия 1.0.0 (2023-05-29)

- Первый релиз проекта.
- Добавлены основные компоненты и функциональность.
- Исправлены некоторые изначальные проблемы и ошибки.


Наслаждайтесь использованием Фильмовой базы данных! Если у вас возникли вопросы или проблемы, не стесняйтесь обратиться.


[Ссылка на развернутое приложение](https://kata-movies-app-dima-gorunov.vercel.app)