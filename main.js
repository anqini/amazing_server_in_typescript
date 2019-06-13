"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
require('./startup/db')();
// Middleware
app.use(body_parser_1["default"].json());
app.use(cors_1["default"]());
// const category = require('./routes/category');
// const search = require('./routes/search');
// const detail = require('./routes/detail');
// app.use('/api/category', category);
// app.use('/api/search', search);
// app.use('/api/detail', detail);
var port = Number(process.env.PORT) || 5001;
app.listen(port, function () { return console.log("Server started on port " + port); });
