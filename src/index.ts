// const express = require('express');
import express from 'express'


const app = express();
const PORT = 8000;


app.get("/", (req, res) => {
    res.send("<h2>Hello TS Node Dev</h2>");
})

app.listen(PORT, () => {
    console.log("App is Listening on Port " + PORT);
})