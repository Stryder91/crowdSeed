import { validationResult } from "express-validator";

export function errorCheck(req: any){
  
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Errors", errors.array());
    // throw new Error('Error Validation');
  }
}