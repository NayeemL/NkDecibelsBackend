import mongoose from "mongoose";

const { Schema, model } = mongoose;

const user = new Schema({
  email: String,
  password: String,
  forgetPasswordCode: Number,
  role: String,
  userId: mongoose.Schema.Types.ObjectId,
});

user.set("autoIndex", true);

const Userdb = model("user", user);
Userdb.createIndexes();

export default Userdb;
