import { Request, Response, NextFunction } from "express"
import {AnyZodObject} from 'zod';

//middleware
//when a req comes in, we're gonna provide a schema in the middleware, and then its going to validate the requests against that schema
//for example email and password, we are going to make sure they are going to be present and they are both strings
//and along with that email is actually email


//technique is called currying 
const validate =(schema: AnyZodObject) => (
    req: Request, 
    res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      return res.status(400).send(e.errors);
    }
  };

export default validate;
