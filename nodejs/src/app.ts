import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = "mongodb://localhost:27017";

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        const options = {
            native_parser: true,
            keepAlive: true,
            dbName: 'demo',
            poolSize: 5,
            user: 'root',
            pass: 'root',
            promiseLibrary: global.Promise,
            autoIndex: false, // Don't build indexes
            reconnectTries: 30, // Retry up to 30 times
            reconnectInterval: 500, // Reconnect every 500ms
            bufferMaxEntries: 0,
            connectWithNoPrimary: true,
            useUnifiedTopology: true,
            family: 4,
            useNewUrlParser: true
        };

        mongoose.connect(this.mongoUrl, options);
    }
}

export default new App().app;