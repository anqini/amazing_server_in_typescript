import { Document } from "mongoose";
import IMasterDomain from "./university/masterDomain";
import IAbout from "./university/about";
import IUniRanking from "./university/uniRanking";
import IServ from "./university/serv";
import IStudentLife from "./university/studentLife";
import IOtherPrograms from "./university/otherPrograms";

export default interface IU extends Document {
    name: string,
    logo: string,
    location: string,
    country: string,
    description: string,
    ranking: number,
    masterCnt: number,
    studentCnt: number,
    reason2study: Array<string>,
    masterDomain: IMasterDomain,
    about: IAbout,
    rankingDetails: Array<IUniRanking>,
    service: IServ,
    studentLife: IStudentLife,
    toefl?: number,
    ielts?: number,
    mapLocation: string,
    otherPrograms: IOtherPrograms
}