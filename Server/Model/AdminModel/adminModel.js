import mongoose from "mongoose";

const { Schema, model } = mongoose;

const adminSchema = new Schema({
  role: String,
  email: String,
  password: String
},
{ timestamps: true },
);

const adminLoginDB = model("adminSignup", adminSchema);

export default adminLoginDB;
