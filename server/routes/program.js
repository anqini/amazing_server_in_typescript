"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// model
var program_1 = __importDefault(require("../models/program"));
/**
 * @class PAPI
 */
var PAPI = /** @class */ (function () {
    function PAPI() {
    }
    /**
     * Create the api
     *  @static
     */
    PAPI.create = function (router) {
        // GET
        router.get("/prog", function (req, res, next) {
            new PAPI().list(req, res, next);
        });
        router.get("/prog/:id([0-9a-f]{24})", function (req, res, next) {
            new PAPI().get(req, res, next);
        });
        router.get("/progByDomain/:domain", function (req, res, next) {
            new PAPI().getByDomain(req, res, next);
        });
    };
    /**
     * get a program
     * @param req
     * @param res
     * @param next
     */
    PAPI.prototype.get = function (req, res, next) {
        // verify the id parameter exists
        var PARAM_ID = "id";
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }
        // get id
        var id = req.params[PARAM_ID];
        // get program
        program_1.default.findById(id).then(function (program) {
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
    };
    /**
     * List all programs
     * @param req
     * @param res
     * @param next
     */
    PAPI.prototype.list = function (req, res, next) {
        // get universities
        program_1.default.find().then(function (programs) {
            res.json(programs.map(function (program) { return program.toObject(); }));
            next();
        }).catch(next);
    };
    /**
     * get by domain
     * @param req
     * @param res
     * @param next
     */
    PAPI.prototype.getByDomain = function (req, res, next) {
        // verify the domain parameter
        var PARAM_DMN = "domain";
        if (req.params[PARAM_DMN] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }
        // get domain param
        var domain = req.params[PARAM_DMN];
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // ~~~~~~~~~~~~~ Check domain input further ~~~~~~~~~~~~~
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // get programs
        program_1.default.find({ domain: domain }).then(function (programs) {
            res.json(programs.map(function (program) { return program.toObject(); }));
            next();
        }).catch(next);
    };
    return PAPI;
}());
exports.PAPI = PAPI;
//# sourceMappingURL=program.js.map