"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8000;
app.get("/", (req, res) => {
    res.send("<h2>Hello TS Node Dev</h2>");
});
app.listen(PORT, () => {
    console.log("App is Listening on Port " + PORT);
});
