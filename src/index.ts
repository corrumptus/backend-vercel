import express from "express";

const port = 5000;

const app = express();

app.listen(5000, () => console.log(`server listening on ${port}`));

app.get("/", (_, res) => {
    res.send("hello");
});