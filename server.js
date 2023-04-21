const express = require('express');
const app = express();

const PORT = 3055;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

app.get('/', (req, res) => {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    res.send(`You are connected on ${date} at ${time}`)
})

app.get('/api/test', (req, res) => {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    res.send(`Health check status: ✔ working on ${date} at ${time}`)
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})