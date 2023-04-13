import mongoose from "mongoose";
import { validationResult } from "express-validator";

import Home from "../../models/mongoose/home";
import { IHome } from "../../models/types/interfaces";

// TODO update
export const updateHome = async (req: any, res: any) => {
  const { id } = req.params;
  const { 
    address, 
    city,
    state,
    zipcode,
    bedrooms,
    bathrooms, 
    squareFeet,
    price
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Home with id: ${id}`);

  const updatedHome: IHome = {
    address, 
    city,
    state,
    zipcode,
    bedrooms,
    bathrooms, 
    squareFeet,
    price
  };

  await Home.findByIdAndUpdate(id, updatedHome, { new: true });

  res.json(updatedHome);
};