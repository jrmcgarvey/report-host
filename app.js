const express = require("express");

const app = express();

app.get("/", (req,res) => {
    if (req.query) {
        console.log("name", req.query.name);
    }
    console.log("ip: ", req.ip);
    console.log("X-Forwarded-For header: ", req.get("X-Forwarded-For"));
    res.send("Hi there");
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log("listening on port ", port);
