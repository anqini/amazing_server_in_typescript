"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var errorHandler = require("errorhandler");
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
// api
var university_1 = require("./routes/university");
var program_1 = require("./routes/program");
/**
 * The server.
 *
 * @class Server
 */
var Server = /** @class */ (function () {
    /**
     * @constructor
     */
    function Server() {
        //create expressjs application
        this.app = express_1.default();
        //configure application
        this.config();
        //add api
        this.api();
    }
    /**
     * Bootstrap the application.
     * @static
     */
    Server.bootstrap = function () {
        return new Server();
    };
    /**
     * REST API endpoints.
     */
    Server.prototype.api = function () {
        var router = express_1.default.Router();
        // // configure CORS
        // const corsOptions: cors.CorsOptions = {
        //     allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
        //     credentials: true,
        //     methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        //     // origin: "http://localhost:4200",
        //     preflightContinue: false
        // };
        router.use(cors_1.default());
        // root request
        router.get("/", function (req, res, next) {
            res.json({ announcement: "Welcome to our API." });
            next();
        });
        // create API routes
        university_1.UAPI.create(router);
        program_1.PAPI.create(router);
        // wire up the REST API
        this.app.use("/api", router);
        // enable CORS pre-flight
        router.options("*", cors_1.default());
    };
    /**
     * Configure application
     *
     * @class Server
     */
    Server.prototype.config = function () {
        // morgan middleware to log HTTP requests
        this.app.use(morgan_1.default("dev"));
        //use json form parser middlware
        this.app.use(body_parser_1.default.json());
        //use query string parser middlware
        this.app.use(body_parser_1.default.urlencoded({
            extended: true
        }));
        // connect to mongoose
        mongoose_1.default.connect("mongodb://localhost:27017/masterPortal", { useNewUrlParser: true })
            .then(function () { console.log("connected to database..."); })
            .catch(function (err) { return console.error(err); });
        mongoose_1.default.connection.on("error", function (error) {
            console.error(error);
        });
        //catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        //error handling
        this.app.use(errorHandler());
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map