const express = require  ('express');

const app =  express ();
'mongodb+srv://admin:admin@cluster0.r47vt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.get('/', (req, res) => {
    res.send('Hi there !');
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});