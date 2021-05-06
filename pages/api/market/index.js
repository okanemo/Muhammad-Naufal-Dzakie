import Market from "../../../models/market";
import { dbConnect } from "../../../utils/db";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getMarket(req, res);
      break;
    case "POST":
      await handleMarket(req, res);
      break;
  }
};

const getMarket = async (req, res) => {
  try {
    dbConnect();
    let query = await Market.find({});
    if (!query) return res.status(400).json({ err: "No Portfolio Found" });
    res.status(200).json({
      result: query,
    });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};
const handleMarket = async (req, res) => {
  switch (req.body.type) {
    case "BUY":
      await handleBuy(req, res);
      break;
    case "SELL":
      await handleSell(req, res);
      break;
  }
};
const handleBuy = async (req, res) => {
  try {
    dbConnect();
    const { user, balance } = req.body;
    console.log(user, balance, "HOITTT");
    let transac = new Market({
      user,
      type: "BUY",
      transaction: balance,
      unit: balance / 1,
    });
    transac = await transac.save();
    return res.status(200).json({ msg: "Buy Success" });
  } catch (error) {
    return res.status(500).json({ err: error.toString() });
  }
};
