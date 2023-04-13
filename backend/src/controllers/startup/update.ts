import mongoose from "mongoose";
import { validationResult } from "express-validator";

import Startup from "../../models/mongoose/startup";
import { IStartup } from "../../models/types/interfaces";

// TODO update
export const updateStartup = async (req: any, res: any) => {
  const { id } = req.params;
  const { 
    name, 
    numberOfEmployes,
    category,
    amountToRaise,
    amountRaised,
    location
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Startup with id: ${id}`);

  const updatedStartup: IStartup = {
    name, 
    numberOfEmployes,
    category,
    amountToRaise,
    amountRaised,
    location
  };

  await Startup.findByIdAndUpdate(id, updatedStartup, { new: true });

  res.json(updatedStartup);
};