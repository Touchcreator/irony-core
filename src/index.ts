import express from "express";

import level from "./routes/level"

const app = express();

const PORT = 3000;

app.get(/\/\/*$/, (req, res) => {
    res.send('hi')
})

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(level)

app.use((req, res) => {
    console.log(req.path);
    console.log(req.method);
    console.log(req.body);
    res.send("bye")
})




app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!`)
})