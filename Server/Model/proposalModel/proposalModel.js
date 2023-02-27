import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addProposal = new Schema({
    proposalNumber: {type:String},
    customerId:{type:String},
    customerName:{type:String},
    customerAddress:{type:String},
    gstin:{type:String},
    length:{type:String},
    width:{type:String},
    depth:{type:String},
    purpose:{type:String},
    quotationTitle:{type:String},
    date:{type:String},
    place:{type:String},
    quotationTitle:{type:String},
    productItems:[
    {
        id:String,
        subheader:String,
        description:String,
        quantity:String,
        price:String,
        amount:String,
        mrp:String,
    }
    ],
    subTotal:{type:String},
    discountvalue:{type:String},
    afterDiscount:{type:String},
    gst:{type:String},
    shipping:{type:String},
    grandTotal:{type:String},
    note:{type:String},
    terms:{type:String},
    status:{type:String},
});

addProposal.set("autoIndex", true);

const ProposalDb = model("addProposal", addProposal);
ProposalDb.createIndexes();

export default ProposalDb;
