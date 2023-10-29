const express = require('express');
const app = express();
const port = process.env.PORT || 4800;

app.get('/', (req, res) => {
    res.send("The SageStudy server is running....")
})


app.listen(port, () => {
    console.log(`The current port ${port} is running.`);
})

