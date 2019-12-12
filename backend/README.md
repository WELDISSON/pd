# Backend
## prerequisites:
- Nodejs
- npmjs
- Mysql running

---
## write .env:
- options:
  ```
    DB_HOST 
    DB_USER
    DB_PASSWORD
    DB_DATABASE_PORT
    PORT
  ```
  example:
  ```
    DB_HOST='localhost'
    DB_USER='root'
    DB_PASSWORD='weldisson'
    DB_DATABASE= 'pd'
    PORT=3001
  ```
## install:
```
$ npm i
```

---
## Running dev: 
```
$ npm run dev
```

---
## Running prod: 
```
$ npm start
```

---
## Usage:
### Create a collection
```
    POST http://localhost:{APP_PORT}/api/collection
     body = {
                name: CollectionName
            }

```
---
### Create a disc
```
    POST http://localhost:{APP_PORT}/api/disc
     body = {
                name: discName,
                artist: artistName,
                year: releaseYear,
                info: info, 
            }

```
#### info is optional.
---
### Insert discs in Collection
```
    POST http://localhost:{APP_PORT}/api/discollection
    body = {
                discName: discName,
                collectionName: collectionName
            }
```
---
### delete Disc From Collection
```
    DELETE http://localhost:{APP_PORT}/api/planets/discollection?discName=VALUE

    params: discName
```

---
### get discs from collection
```
    GET http://localhost:{APP_PORT}/api/discollection?collectionName=VALUE

    params: collectionName
```
---
#### Support: 
- Weldisson Araujo
- email: weldisson.araujo@gmail.com

---
