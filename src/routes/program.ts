// express
import { NextFunction, Response, Request, Router } from "express";
// interface
import IProgram from "../interfaces/program";
// model
import Program from "../models/program";

/**
 * @class PAPI
 */
export class PAPI {
    /**
     * Create the api
     *  @static
     */
    public static create(router: Router) {
        // GET
        router.get("/prog", (req: Request, res: Response, next: NextFunction) => {
            new PAPI().list(req, res, next);
        })
        router.get("/prog/:id([0-9a-f]{24})", (req: Request, res: Response, next: NextFunction) => {
            new PAPI().get(req, res,next);
        })
        router.get("/progByDomain/:domain", (req: Request, res: Response, next: NextFunction) => {
            new PAPI().getByDomain(req, res, next);
        })
    }
    /**
     * get a program
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

        // get program
        Program.findById(id).then((program: IProgram | null) => {
            // verify program is found
            if (program == null) {
                res.sendStatus(404);
                next();
                return;
            }

            // send json
            res.json(program.toObject());
            next();
        }).catch(next);
    }

    /**
     * List all programs
     * @param req 
     * @param res
     * @param next
     */
    public list(req: Request, res: Response, next: NextFunction) {
        // get universities
        Program.find().then((programs: Array<IProgram>) => {
            res.json(programs.map((program: IProgram) => program.toObject()));
            next();
        }).catch(next);
    }

    /**
     * get by domain
     * @param req
     * @param res
     * @param next
     */
    public getByDomain(req: Request, res: Response, next: NextFunction) {
        // verify the domain parameter
        const PARAM_DMN: string = "domain";
        if (req.params[PARAM_DMN] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }

        // get domain param
        const domain: string = req.params[PARAM_DMN];

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // ~~~~~~~~~~~~~ Check domain input further ~~~~~~~~~~~~~
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        // get programs
        Program.find({domain: domain}).then((programs: Array<IProgram>)  => {
            res.json(programs.map((program: IProgram) => program.toObject()));
            next();
        }).catch(next);
    }
}