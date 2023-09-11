# Тестовое задание для отклика google-books-search

### Инструкция по установке на локальный компьютер

Клонировать репозиторий и перейти в папку проекта

```
git clone https://github.com/otr-web-study/feature-test.git && cd feature-test
```

Запустить проект

```
npm run dev
```

Google api позволяет делать запросы к общедоступным ресурсам без указания ключа api, однако для таких запросов существует суточное ограничение.
Если поиск завершается ошибкой, создайте файл .env.local в папке с проектом со следующим содержимым:

```
VITE_KEY=YOUR_APIKEY
```

Где YOUR_APIKEY - ваш api ключ полученный в гугл аккаунте.

### Запуск из Docker образа

В проекте добавлен Dockerfile, что позволяет собрать докер образ локально.
Так же собранный образ опубликован на Dockerhub.
Для запуска опубликованного адреса воспользуйтесь командой:

```
sudo docker run --name google-books-search -it -p 5173:5173 otrstudy/google-books-search
```

для передачи api ключа в контейнер, используйте команду:

```
sudo docker run --name google-books-search --env-file [your-env-file-path] -it -p 5173:5173 otrstudy/google-books-search
```

Где your-env-file-path - путь до вашего файла с переменной окружения VITE_KEY.
