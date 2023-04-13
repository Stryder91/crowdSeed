import { validationResult } from "express-validator";
import Startup from "../../models/mongoose/startup";
import { IStartup } from "../../models/types/interfaces";

export const createStartup = async (req: any, res: any) => {
  const { 
    name, 
    numberOfEmployes,
    category,
    amountToRaise,
    amountRaised,
    location
  } = req.body;
  
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Errors", errors.array());
    throw new Error("Error Validation");
  }

  const startupDto : IStartup = {
    name,
    numberOfEmployes,
    category,
    amountToRaise,
    amountRaised,
    location,
  }

  const newStartup = new Startup(startupDto);

  try {
    const saved = await newStartup.save();
    if (saved) {
      res.status(201).json(newStartup);
    }
  } catch (error) {
    console.log("Error", error);
    res.status(409).json({ message: errors.array() });
  }
};

