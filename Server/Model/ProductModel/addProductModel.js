import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addProduct = new Schema({
    productName: {type:String},
    price:{type:String},
    description:{type:String},
    cgst:{type:String},
    igst:{type:String},
    sgst:{type:String},
    vat:{type:String},
    productImage:{type:String},
});

addProduct.set("autoIndex", true);

const ProductDb = model("addProduct", addProduct);
ProductDb.createIndexes();

export default ProductDb;
