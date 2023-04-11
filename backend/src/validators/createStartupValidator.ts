import { body } from "express-validator";

export const createStartupValidator = [
  body("name")
    .not()
    .isEmpty()
    .withMessage("name is required")
    .trim()
    .escape()
    .isLength({ min: 2 })
    .withMessage("name is too shot"),
  body("category")
    .not()
    .isEmpty()
    .withMessage("category is required")
    .escape()
    .toLowerCase()
    .default("others"),
  body("location")
    .trim()
    .escape(),
  body("numberOfEmployes").isNumeric(),
  body("amountToRaise").isNumeric().withMessage("amountToRaise must be greater than 0"),
  body("amountRaised").isNumeric().withMessage("amountRaised must be float"),
];