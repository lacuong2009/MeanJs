"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes/routes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.mongoUrl = "mongodb://localhost:27017";
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        const options = {
            native_parser: true,
            keepAlive: true,
            dbName: 'demo',
            poolSize: 5,
            user: 'root',
            pass: 'root',
            promiseLibrary: global.Promise,
            autoIndex: false,
            reconnectTries: 30,
            reconnectInterval: 500,
            bufferMaxEntries: 0,
            connectWithNoPrimary: true,
            useUnifiedTopology: true,
            family: 4,
            useNewUrlParser: true
        };
        mongoose.connect(this.mongoUrl, options);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map