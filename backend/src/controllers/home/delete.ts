import mongoose from "mongoose";
import Home from "../../models/mongoose/home";

export const deleteHome = async (req: any, res: any) => {
  const { id } = req.params;
    
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Home with id: ${id}`);

  await Home.findByIdAndRemove(id);

  res.json({ message: "Home deleted successfully." });
};