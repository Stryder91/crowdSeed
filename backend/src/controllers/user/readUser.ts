import User from "../../models/user";

export const getUserByWallet = async (req: any, res: any) => {
  const { wallet } = req.query;
  
  try {
    const user = await User.find({ wallet });
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};