import { query } from "express-validator";

export const readMatchValidator = [
  query("eventId")
    .isInt().withMessage("Must be an integer")
    .not().isEmpty().withMessage("eventId is required"),
];

export const readMatchIdValidator = [
  query("id")
    .isInt().withMessage("Must be an integer")
    .not().isEmpty().withMessage("Id is required"),
];