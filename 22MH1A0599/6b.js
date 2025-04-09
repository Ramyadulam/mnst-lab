const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Adventure Trails!');
});

app.listen(port, () => {
    console.log(`Adventure Trails welcomes you! Server is listening on port ${port}`);
});
