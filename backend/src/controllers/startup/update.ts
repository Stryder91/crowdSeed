import { validationResult } from "express-validator";
const mongoose = require('mongoose');

import Startup from "../../models/startup";

// TODO update
export const updateStartup = async (req: any, res: any) => {
  const { id } = req.params;
  const { title, category, subcategory, creator, description, selectedFile, tags, sold } =
    req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Startup with id: ${id}`);

  const updatedStartup = {
    title,
    category,
    subcategory,
    creator,
    description,
    selectedFile,
    tags,
    sold,
    _id: id,
  };

  await Startup.findByIdAndUpdate(id, updatedStartup, { new: true });

  res.json(updatedStartup);
};

export const buyStartup = async (req: any, res: any) => {
  const { id, buyer, price } = req.query;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Errors", errors.array());
    // throw new Error('Error Validation');
  }

  const product = await Startup.findById(id);

  if (product.buyer){
    console.log("Already a buyer!");
    throw new Error();
  }

  if (product.status !== "IN_SALE" || product.sold !== false){
    console.log("Startup not in sale!");
    throw new Error();
  }

  if (product.price !== price){
    console.log("Price incorrect!");
    throw new Error();
  }

  const newStartup = {
    status: 'PENDING',
    buyer,
    _id: id,
  };

  await Startup.findByIdAndUpdate(id, newStartup, { new: true });

  res.json(newStartup);
}

export const confirmStartup = async (req: any, res: any) => {
  const { id, buyer } = req.query;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Errors", errors.array());
    // throw new Error('Error Validation');
  }

  const product = await Startup.findById(id);
  if (!product.buyer || product.buyer !== buyer){
    throw new Error();
  }

  const newStartup = {
    status: 'SOLD',
    sold: true,
    _id: id,
  };

  await Startup.findByIdAndUpdate(id, newStartup, { new: true });

  res.json(newStartup);
}