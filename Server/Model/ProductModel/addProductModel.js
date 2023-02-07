import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addProduct = new Schema({
  name: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  cgst: {
    type: String,
    required: false,
  },
  igst: {
    type: String,
    required: false,
  },
  sgst: {
    type: String,
    required: false,
  },
  vat: {
    type: String,
    required: false,
  },
  productImage: {
    type:String,
    required: true,
  },
});

addProduct.set("autoIndex", true);

const ProductDb = model("addProduct", addProduct);
ProductDb.createIndexes();

export default ProductDb;
