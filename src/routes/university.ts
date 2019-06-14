// express
import { NextFunction, Response, Request, Router } from "express";
// interface
import IU from "../interfaces/university";
// mongoose model
import University from "../models/university";

/**
 * @class UAPI
 */
export class UAPI {
    /**
     * Create the api
     *  @static
     */
    public static create(router: Router) {
        // GET
        router.get("/uni", (req: Request, res: Response, next: NextFunction) => {
            new UAPI().list(req, res, next);
        })
        router.get("/uni/:id([0-9a-f]{24})", (req: Request, res: Response, next: NextFunction) => {
            new UAPI().get(req, res,next);
        })
        router.get("/uniByCountry/:country", (req: Request, res: Response, next: NextFunction) => {
            new UAPI().getByCountry(req, res, next);
        })
    }
    /**
     * get a university
     * @param req 
     * @param res
     * @param next
     */
    public get(req: Request, res: Response, next: NextFunction) {
        // verify the id parameter exists
        const PARAM_ID: string = "id";
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }

        // get id
        const id: string = req.params[PARAM_ID];

        // get university
        University.findById(id).then((university: IU | null) => {
            // verify university is found
            if (university == null) {
                res.sendStatus(404);
                next();
                return;
            }

            // send json
            res.json(university.toObject());
            next();
        }).catch(next);
    }

    /**
     * List all unversity
     * @param req 
     * @param res
     * @param next
     */
    public list(req: Request, res: Response, next: NextFunction) {
        // get universities
        University.find().then((universities: Array<IU>) => {
            res.json(universities.map((university: IU) => university.toObject()));
            next();
        }).catch(next);
    }

    /**
     * get by country
     * @param req
     * @param res
     * @param next
     */
    public getByCountry(req: Request, res: Response, next: NextFunction) {
        // verify the country parameter
        const PARAM_CNTRY: string = "country";
        if (req.params[PARAM_CNTRY] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }

        // get id
        const country: string = req.params[PARAM_CNTRY];

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // ~~~~~~~~~~~~~ Check country input further ~~~~~~~~~~~~
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        const cntryRange: Array<string> = ["US", "UK", "AU", "EU", "HK"];
        if (!cntryRange.includes(country)) {
            res.sendStatus(404);
            next();
            return;
        }
        
        // get universities
        University.find({country: country}).then((universities: Array<IU>)  => {
            res.json(universities.map((university: IU) => university.toObject()));
            next();
        }).catch(next);
    }
}