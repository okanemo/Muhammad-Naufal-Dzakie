import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "Market";

const schema = Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  deposit: {
    type: Number,
  },
  unit: {
    type: Number,
  },
});

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, "markets");
