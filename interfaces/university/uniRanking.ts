import IRank from "./rank";

export default interface IUniRanking extends IRank {
    provider: string,
    r2019: number,
    r2018: number,
    r2017: number
}