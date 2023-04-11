import { validationResult } from "express-validator";
import User from "../../models/user";

export const createProduct = async (req: any, res: any) => {
  const { wallet, firstname, lastname, address, description, numberOfSales = 0, selectedFile, ratesOfSales = 0, sold = false, country, city } = req.body;

  console.log("body", req.body);
  const newUser = new User({
    wallet,
    firstname,
    lastname,
    address,
    description,
    numberOfSales,
    selectedFile,
    ratesOfSales,
    sold,
    country, 
    city
  });

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Errors", errors.array());
    // throw new Error('Error Validation');
  }

  try {
    const saved = await newUser.save();
    if (saved) {
      console.log("OK ", saved);
      res.status(201).json(newUser);
    }
  } catch (error) {
    console.log("Error", error);
    res.status(409).json({ message: errors.array() });
  }
};

