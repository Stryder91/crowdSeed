import Home from "../../models/mongoose/home";

export const getHome = async (req: any, res: any) => {
  const { id } = req.query;
  try {
    const home = await Home.findById(id);
    // Home.findById(mongoose.Types.ObjectId(id));
    res.status(200).json({ home });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// export const getHomeByCategory = async (req: any, res: any) => {
//   const { category } = req.query;
//   try {
//     const homesByCategory = await Home.find({ category });
//     res.status(200).json({homes: homesByCategory});
//   } catch (error: any) {
//     res.status(404).json({ message: error.message });
//   }
// };

export const getHomeBySearch = async (req: any, res: any) => {
  const { words } = req.query;
  try {
    const homesByCategory = await Home.find({ $text: { $search: words } });
    res.status(200).json({homes: homesByCategory});
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getHomes = async (req: any, res: any) => {
  
  try {
    const Homes = await Home.find();
    res.status(200).json(Homes);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};






