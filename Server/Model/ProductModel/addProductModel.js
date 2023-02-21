import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addProduct = new Schema({
    productName: {type:String},
    price:{type:Number},
    description:{type:String},
    cgst:{type:Number},
    igst:{type:Number},
    sgst:{type:Number},
    vat:{type:Number},
    productImage:{type:String},
});

addProduct.set("autoIndex", true);

const ProductDb = model("addProduct", addProduct);
ProductDb.createIndexes();

export default ProductDb;
