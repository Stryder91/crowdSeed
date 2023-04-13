import { body } from "express-validator";

export const createValidator = [
  body("address")
    .trim()
    .escape()
    .isLength({ min: 2 })
    .withMessage("name is too shot"),
  body("price")
    .not()
    .isEmpty()
    .withMessage("price must be greater than 0")
    .isNumeric()
];