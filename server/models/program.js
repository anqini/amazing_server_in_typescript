"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var programSchema = new mongoose_1.Schema({
    diplomaType: String,
    domain: String,
    name: String,
    school: String,
    deadline: Date,
    duration: Number,
    tuition: Number,
    uniRanking: Number,
    detail: String
});
exports.default = mongoose_1.model("Program", programSchema);
//# sourceMappingURL=program.js.map