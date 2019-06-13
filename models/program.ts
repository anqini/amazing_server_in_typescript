import { Schema, Model, model } from "mongoose";
import IProgram from "../interfaces/program";

const programSchema: Schema = new Schema({
    diplomaType: String,
    name: String,
    school: String,
    deadline: Date,
    duration: Number,  // in years
    tuition: Number,  // currently in euro
    uniRanking: Number,
    detail: String
});

export default model<IProgram>("Program", programSchema);