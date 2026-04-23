const express = require("express")

const app = express()

app.get("/", (req,res) => {
    return.send("Hello")
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on prot ${PORT}`)
});

