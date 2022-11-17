const app = require('./app');
const config = require('./config');

app.listen(config.port)
console.log(`App Running on Port ${config.port}`)