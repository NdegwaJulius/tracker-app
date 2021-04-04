require('./models/User');
const express = require  ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app =  express ();

app.use(bodyParser.json());
app.use(authRoutes);



const mongoUri = 'mongodb+srv://admin:plun@cluster0.paes2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    
   useNewUrlParser: true,
   useCreateIndex: true 
}); 


mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance');
});
mongoose.connection.on('error', err => {
    console.error('error connceting to mongo', err);
});
app.get('/', (req, res) => {
    res.send('Hi there !');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});