import { dbConnect } from "../../utils/db";
import bcrypt from "bcrypt";
import User from "../../models/user";
import valid from "../../utils/valid";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  dbConnect();
  const { username, email, password } = req.body;
  if (username && email && password) {
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          msg: "User Already Exists",
        });
      }
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user = new User({
        username,
        email,
        password: hashedPassword,
      });
      const createdUser = await user.save();
      return res.status(200).send(createdUser);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send("data incomplete");
  }
};
