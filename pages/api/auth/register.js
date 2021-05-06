import { dbConnect } from "../../../utils/db";
import bcrypt from "bcrypt";
import User from "../../../models/user";
import valid from "../../../utils/valid";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  dbConnect();
  try {
    const { username, email, password, cf_password } = req.body;
    const errMessage = valid(username, email, password, cf_password);

    if (errMessage) {
      return res.status(666).json({ err: errMessage });
    }

    let user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ err: "This Email is Already Used" });

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    user = new User({
      username,
      email,
      password: hashedPassword,
    });
    user = await user.save();
    return res.status(200).json({ msg: "Register Success" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error.toString() });
  }
};
