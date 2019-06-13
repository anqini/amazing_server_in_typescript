import { Schema, Model, model } from "mongoose";
import IU from "../interfaces/university";

const USchema: Schema = new Schema({
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
            AF: [Schema.Types.ObjectId],
            // ASP means Applied Sciences & Professions
            ASP: [Schema.Types.ObjectId],
            // ADA means Arts, Design & Architecture,
            ADA: [Schema.Types.ObjectId],
            // BM means Business & Management
            BM: [Schema.Types.ObjectId],
            // CSIT means computer science & IT
            CSIT: [Schema.Types.ObjectId],
            // ET means Education and Training
            ET: [Schema.Types.ObjectId],
            // ET2 means Engineering and Technology 
            ET2: [Schema.Types.ObjectId],
            // ESES means Environment Studies and Earth Sciences
            ESES: [Schema.Types.ObjectId],
            // HLS means Hospitality, Leisure and Sports
            HLS: [Schema.Types.ObjectId],
            // Hum means Humanities
            Hum: [Schema.Types.ObjectId],
            // JM means Journalism & Media
            JM: [Schema.Types.ObjectId],
            Law: [Schema.Types.ObjectId],
            // MH means Medicine & Health
            MH: [Schema.Types.ObjectId],
            // NSM means Natural Sciences & Mathematics
            NSM: [Schema.Types.ObjectId],
            // SS means Social Sciences
            SS: [Schema.Types.ObjectId]
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
    ielts: { type: Number, required: false},
    mapLocation: String,
    otherPrograms: {
        onelineCourse: Number,
        bachelors: Number,
        phds: Number
    }
});


export default model<IU>("University", USchema);