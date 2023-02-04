import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addProduct = new Schema({
    name: String,
    price:String,
    description:String,
    cgst:String,
    igst:String,
    sgst:String,
    vat:String,
    images:[{type:String}]
});

addProduct.set("autoIndex", true);

const ProductDb = model("addProduct", addProduct);
ProductDb.createIndexes();

export default ProductDb;
