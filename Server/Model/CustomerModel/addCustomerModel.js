import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addCustomer = new Schema({
  fullName: String,
  addressWithPincode: String,
  landLine: String,
  mobile: String,
  whatsappNumber: String,
  email: String,
  gstinDetails: String,
});

addCustomer.set("autoIndex", true);

const CustomerDb = model("addCustomer", addCustomer);
CustomerDb.createIndexes();

export default CustomerDb;
