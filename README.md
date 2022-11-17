
sudo docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=usp mongo
mongodb://admin:usp@localhost:27017/admin

MONGO_URL=Mongo-Url
NODE_ENV=production
