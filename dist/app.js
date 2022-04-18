"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_model_1 = require("./app.model");
var express = require("express");
var app = express();
var port = 8000;
app.use(express.json());
app.get("/", function (req, res) {
    res.send({ test: "heelo" });
});
app.get("/cats/:id", function (req, res) {
    try {
        var params_1 = req.params;
        var cats = app_model_1.Cat.find(function (cat) {
            return cat.id === params_1.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.post("/test", function (req, res) {
    res.send({ person: "yoon" });
});
app.use(function (req, res, next) {
    console.log("EEROR");
    res.send({ error: "404 not found error" });
});
app.listen(port, function () {
    console.log("Example App Listening at http://localhost:" + port);
});
//# sourceMappingURL=app.js.map