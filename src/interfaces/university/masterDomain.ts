import mongoose from "mongoose";

export default interface IMasterDomain {
    // AF means Agriculture & Forestry
    AF: Array<mongoose.Schema.Types.ObjectId>,
    // ASP means Applied Sciences & Professions
    ASP: Array<mongoose.Schema.Types.ObjectId>,
    // ADA means Arts, Design & Architecture,
    ADA: Array<mongoose.Schema.Types.ObjectId>,
    // BM means Business & Management
    BM: Array<mongoose.Schema.Types.ObjectId>,
    // CSIT means computer science & IT
    CSIT: Array<mongoose.Schema.Types.ObjectId>,
    // ET means Education and Training
    ET: Array<mongoose.Schema.Types.ObjectId>,
    // ET2 means Engineering and Technology 
    ET2: Array<mongoose.Schema.Types.ObjectId>,
    // ESES means Environment Studies and Earth Sciences
    ESES: Array<mongoose.Schema.Types.ObjectId>,
    // HLS means Hospitality, Leisure and Sports
    HLS: Array<mongoose.Schema.Types.ObjectId>,
    // Hum means Humanities
    Hum: Array<mongoose.Schema.Types.ObjectId>,
    // JM means Journalism & Media
    JM: Array<mongoose.Schema.Types.ObjectId>,
    Law: Array<mongoose.Schema.Types.ObjectId>,
    // MH means Medicine & Health
    MH: Array<mongoose.Schema.Types.ObjectId>,
    // NSM means Natural Sciences & Mathematics
    NSM: Array<mongoose.Schema.Types.ObjectId>,
    // SS means Social Sciences
    SS: Array<mongoose.Schema.Types.ObjectId>

}