import express from "express";

const port = 5000;

const app = express();

app.listen(5000, () => console.log(`server listening on ${port}`));

app.get("/", (req, res) => {
    if (req.headers["user-agent"]?.includes("Android") || req.headers["user-agent"]?.includes("IOS"))
        res.send("seu celular foi hackeado");
    else
        res.send("seu pc foi hackado");
});