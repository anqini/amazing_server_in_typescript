import { Document } from "mongoose";

export default interface IProgram extends Document {
    diplomaType: string,
    domain: string,
    name: string,
    school: string,
    deadline: Date,
    duration: number,  // in years
    tuition: number,  // currently in euro
    uniRanking: number,
    detail: string
}