const app = require('./App')

const mongoose = require('mongoose');
const mongoString = "mongodb+srv://rode:rode@cluster0.tchyu.mongodb.net/test";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('BD Lancer');
})


app.listen(8080, () => {
    console.log(`Server Lancer sur le port ${8080}`)
})