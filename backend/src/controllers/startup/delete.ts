import mongoose from "mongoose";
import Startup from "../../models/mongoose/startup";

export const deleteStartup = async (req: any, res: any) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Startup with id: ${id}`);

  await Startup.findByIdAndRemove(id);

  res.json({ message: "Startup deleted successfully." });
};