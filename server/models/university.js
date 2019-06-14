"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var USchema = new mongoose_1.Schema({
    name: String,
    logo: String,
    location: String,
    country: String,
    description: String,
    ranking: Number,
    masterCnt: Number,
    studentCnt: Number,
    reason2study: [String],
    masterDomain: {
        // AF means Agriculture & Forestry
        AF: [mongoose_1.Schema.Types.ObjectId],
        // ASP means Applied Sciences & Professions
        ASP: [mongoose_1.Schema.Types.ObjectId],
        // ADA means Arts, Design & Architecture,
        ADA: [mongoose_1.Schema.Types.ObjectId],
        // BM means Business & Management
        BM: [mongoose_1.Schema.Types.ObjectId],
        // CSIT means computer science & IT
        CSIT: [mongoose_1.Schema.Types.ObjectId],
        // ET means Education and Training
        ET: [mongoose_1.Schema.Types.ObjectId],
        // ET2 means Engineering and Technology 
        ET2: [mongoose_1.Schema.Types.ObjectId],
        // ESES means Environment Studies and Earth Sciences
        ESES: [mongoose_1.Schema.Types.ObjectId],
        // HLS means Hospitality, Leisure and Sports
        HLS: [mongoose_1.Schema.Types.ObjectId],
        // Hum means Humanities
        Hum: [mongoose_1.Schema.Types.ObjectId],
        // JM means Journalism & Media
        JM: [mongoose_1.Schema.Types.ObjectId],
        Law: [mongoose_1.Schema.Types.ObjectId],
        // MH means Medicine & Health
        MH: [mongoose_1.Schema.Types.ObjectId],
        // NSM means Natural Sciences & Mathematics
        NSM: [mongoose_1.Schema.Types.ObjectId],
        // SS means Social Sciences
        SS: [mongoose_1.Schema.Types.ObjectId]
    },
    about: {
        history: String,
        edu: String,
        research: String,
        career: String
    },
    rankingDetails: [{
            provider: String,
            r2019: Number,
            r2018: Number,
            r2017: Number
        }],
    service: {
        housingServ: String,
        libServ: String
    },
    studentLife: {
        campusLife: String,
        sportsFacility: String,
        studentClub: String
    },
    toefl: { type: Number, required: false },
    ielts: { type: Number, required: false },
    mapLocation: String,
    otherPrograms: {
        onelineCourse: Number,
        bachelors: Number,
        phds: Number
    }
});
exports.default = mongoose_1.model("University", USchema);
//# sourceMappingURL=university.js.map