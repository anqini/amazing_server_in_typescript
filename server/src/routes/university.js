"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// mongoose model
var university_1 = __importDefault(require("../models/university"));
/**
 * @class UAPI
 */
var UAPI = /** @class */ (function () {
    function UAPI() {
    }
    /**
     * Create the api
     *  @static
     */
    UAPI.create = function (router) {
        // GET
        router.get("/uni", function (req, res, next) {
            new UAPI().list(req, res, next);
        });
        router.get("/uni/:id([0-9a-f]{24})", function (req, res, next) {
            new UAPI().get(req, res, next);
        });
        router.get("/uniByCountry/:country", function (req, res, next) {
            new UAPI().getByCountry(req, res, next);
        });
    };
    /**
     * get a university
     * @param req
     * @param res
     * @param next
     */
    UAPI.prototype.get = function (req, res, next) {
        // verify the id parameter exists
        var PARAM_ID = "id";
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }
        // get id
        var id = req.params[PARAM_ID];
        // get university
        university_1.default.findById(id).then(function (university) {
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
    };
    /**
     * List all unversity
     * @param req
     * @param res
     * @param next
     */
    UAPI.prototype.list = function (req, res, next) {
        // get universities
        university_1.default.find().then(function (universities) {
            res.json(universities.map(function (university) { return university.toObject(); }));
            next();
        }).catch(next);
    };
    /**
     * get by country
     * @param req
     * @param res
     * @param next
     */
    UAPI.prototype.getByCountry = function (req, res, next) {
        // verify the country parameter
        var PARAM_CNTRY = "country";
        if (req.params[PARAM_CNTRY] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }
        // get id
        var country = req.params[PARAM_CNTRY];
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // ~~~~~~~~~~~~~ Check country input further ~~~~~~~~~~~~
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // get universities
        university_1.default.find({ country: country }).then(function (universities) {
            res.json(universities.map(function (university) { return university.toObject(); }));
            next();
        }).catch(next);
    };
    return UAPI;
}());
exports.UAPI = UAPI;
//# sourceMappingURL=university.js.map