import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addUser = new Schema({
    username: String,
    email:String,
    password:String,
    cnfpassword:String,
    userRole:String
});

addUser.set("autoIndex", true);

const UserDb = model("addUser", addUser);
UserDb.createIndexes();

export default UserDb;
