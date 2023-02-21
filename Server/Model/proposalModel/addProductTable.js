import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProposalTable = new Schema({
        createId:String,
        subheader:String,
        description:String,
        quantity:String,
        price:String,
        amount:String,
        mrp:String,
    }
);

ProposalTable.set("autoIndex", true);

const ProposalTableDb = model("ProposalTable", ProposalTable);
ProposalTableDb.createIndexes();

export default ProposalTableDb;
