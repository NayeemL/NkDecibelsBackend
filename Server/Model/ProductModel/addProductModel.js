import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addProduct = new Schema({
<<<<<<< HEAD
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
=======
    productName: {type:String},
    price:{type:String},
    description:{type:String},
    cgst:{type:String},
    igst:{type:String},
    sgst:{type:String},
    vat:{type:String},
    productImage:{type:String},
>>>>>>> b3d797ab2c00b0099b82700122a7612b3a6b80a5
});

addProduct.set("autoIndex", true);

const ProductDb = model("addProduct", addProduct);
ProductDb.createIndexes();

export default ProductDb;
