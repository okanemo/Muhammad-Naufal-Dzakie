import { dbConnect } from "../../../utils/db";
import bcrypt from "bcrypt";
import User from "../../../models/user";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../utils/generateToken";
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

const login = async (req, res) => {
  dbConnect();
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ err: "This User does not Exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ err: "Wrogn Password" });

    const access_token = createAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });

    res.status(200).json({
      msg: "Login Success",
      refresh_token,
      access_token,
      user: {
        id: user._id,
        name: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error.toString() });
  }
};
