import jwt from "jsonwebtoken";
import { dbConnect } from "../../../utils/db";
import User from "../../../models/user";
import { createAccessToken } from "../../../utils/generateToken";
export default async (req, res) => {
  dbConnect();
  try {
    const rf_token = req.cookies.refreshToken;
    if (!rf_token) return res.status(400).json({ err: "Please Login" });

    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
    if (!result)
      return res
        .status(400)
        .json({ err: "Your Token is Incorrect or has Expired" });

    const user = await User.findById(result.id);
    if (!user) return res.status(400).json({ err: "User does not exist" });

    const access_token = createAccessToken({ id: user._id });
    res.json({
      access_token,
      user: {
        name: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
