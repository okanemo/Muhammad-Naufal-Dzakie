import mongoose from "mongoose";

export async function dbConnect() {
  try {
    if (mongoose.connection.readyState >= 1) return;
    return mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export const jsonify = (object) => {
  return JSON.parse(JSON.stringify(object));
};
