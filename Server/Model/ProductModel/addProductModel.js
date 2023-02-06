import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addProduct = new Schema({
    name: {type:String, required:true},
    price:{type:String, required:true},
    description:{type:String, required:true},
    cgst:{type:String, required:true},
    igst:{type:String, required:true},
    sgst:{type:String, required:true},
    vat:{type:String, required:true},
    productImage:{type:String, required:true},
});

addProduct.set("autoIndex", true);

const ProductDb = model("addProduct", addProduct);
ProductDb.createIndexes();

export default ProductDb;
