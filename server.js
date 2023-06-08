const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();
const router = require('./routes/router')
const port = Number(process.env.PORT) || 3000;

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use("/random-joke", router);

app.get("/", (req, res) => {
    res.json("Elite Dad Jokes")
});

app.use((req,res, next) => {
    const err = new Error("Failed");
    err.status = 404;
    return next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
        message: err.message,
        error: app.get("env") === "development" ? err : {}
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})