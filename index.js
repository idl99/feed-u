// https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));