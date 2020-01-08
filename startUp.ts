import * as bodyParser from "body-parser";
import * as express from "express";

import routes from "./routes";
import Db from "./infra/db";

class StartUp {
  public app: express.Application;
  private _db: Db;

  constructor() {
    this.app = express();
    this._db = new Db();
    this._db.createConnection();
    this.middler();
    this.routes();
  }

  middler() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use(routes);
  }
}

export default new StartUp();
