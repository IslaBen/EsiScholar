# EsiScholar

 easy-to-use research web app that helps you gather, organize, and analyze ESI SBA researchers , using Zotero.
 
 ## API
 
 - you will find inside `app/doc` all endpoints to make your queries.
 
 - make sure that `mongod` service is started .
 
 - import `articles.json & teachers.json` in mongodb :
  1- `mongoimport --db scholar_esi --collection articles articles.json`
  2- `mongoimport --db scholar_esi --collection teachers teachers.json`
  
  - run the app `npm start` or `nodemon app/bin/www` .
