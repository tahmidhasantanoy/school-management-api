/* 
    This function, validateBody, is a middleware designed to validate the body of an incoming 
    HTTP request using class-validator. It ensures that the request data conforms to the rules 
    defined in a Data Transfer Object (DTO) class.
*/
/* 
    The function's sole purpose is to validate the structure and types of an HTTP request 
    body using class-validator. 
*/
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { RequestHandler } from "express";

export function validateBody<T>(dtoClass: new () => T): RequestHandler {
  return async (req, res, next) => {
    const instance = plainToInstance(dtoClass, req.body);
    const errors = await validate(instance, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });
    if (errors.length) {
      return res.status(400).json({
        message: "Validation failed",
        details: errors.map((e) => ({
          property: e.property,
          constraints: e.constraints,
        })),
      });
    }
    (req as any).validated = instance;
    next();
  };
}
