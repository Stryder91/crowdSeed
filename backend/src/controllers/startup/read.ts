import Startup from "../../models/startup";

export const getStartup = async (req: any, res: any) => {
  const { id } = req.query;
  try {
    const startup = await Startup.findById(id);
    // Startup.findById(mongoose.Types.ObjectId(id));
    res.status(200).json({ startup });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getStartupByCategory = async (req: any, res: any) => {
  const { category } = req.query;
  try {
    const startupsByCategory = await Startup.find({ category });
    res.status(200).json({startups: startupsByCategory});
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getStartupBySearch = async (req: any, res: any) => {
  const { words } = req.query;
  try {
    const startupsByCategory = await Startup.find({ $text: { $search: words } });
    res.status(200).json({startups: startupsByCategory});
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getStartups = async (req: any, res: any) => {
  try {
    const Startups = await Startup.find();
    res.status(200).json(Startups);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};






