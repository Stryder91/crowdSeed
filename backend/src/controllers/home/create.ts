import { validationResult } from "express-validator";
import Home from "../../models/mongoose/home";
import { IHome } from "../../models/types/interfaces";

export const createHome = async (req: any, res: any) => {
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
  
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Errors", errors.array());
    throw new Error("Error Validation");
  }

  const homeDto : IHome = {
    address, 
    city,
    state,
    zipcode,
    bedrooms,
    bathrooms, 
    squareFeet,
    price
  }

  const newHome = new Home(homeDto);

  try {
    const saved = await newHome.save();
    if (saved) {
      res.status(201).json(newHome);
    }
  } catch (error) {
    console.log("Error", error);
    res.status(409).json({ message: errors.array() });
  }
};

