import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";





createConnection().then(async connection => {

    // create express app 
    const app = express();
    app.use(bodyParser.json());
    var cors = require('cors');
    app.use(cors({
        credentials: true,
      }));
    app.use(function (req, res, next) {
        /*var err = new Error('Not Found');
         err.status = 404;
         next(err);*/



        // Website you wish to allow to connect
        res.header('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        res.header('Access-Control-Allow-Headers', 'Content-Type');

        // Request headers you wish to allow
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

        //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
        // Pass to next layer of middleware
        if ('OPTIONS' === req.method) {
            res.send(200);
          } else {
            next();
          }
    });

    
    app.use(bodyParser.urlencoded({ extended: true }));
    // register express routes from defined application routes 
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
            } else if (result !== null && result !== undefined) {
                result
            }
        });
    });


    // setup express app here 
    // ... 

    // start express server 
    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
}).catch(error => console.log(error));