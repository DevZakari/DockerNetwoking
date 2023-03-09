# DockerNetwoking
 Communicate with two container Use Case : TODO



Premièrement :

j'ai créer deux applications nodeJs :

-> application qui va récupérer les données à partir du Container qui est exécuté dans le PORT: 2000 à l'aide de l'url : "http://c_mongo:27017/submit" -> application qui fait la connexion avec la base de donnée Mongo DB ATLAS qui est exécutée dans le PORT : 27017

Deuxièment :

pour exécuter tout cela il nous faut un bridge pour que les deux containers communiquent entre eux :

-> docker network create zacknet ;

les deux containers doivent se connecter au BRIDGE :

-> docker network connect zacknet c_mongo -> docker network connect zacknet c_api

pour inspecter le Bridge qu'on a créer :

-> docker network inspect zacknet

   voilà : (https://user-images.githubusercontent.com/75742235/222173307-fd08bc76-fb66-4d87-bc64-5ab353cf4603.PNG)
