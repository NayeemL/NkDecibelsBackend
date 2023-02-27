import mongoose from "mongoose";

const { Schema, model } = mongoose;

const user = new Schema({
    username: String,
    email:String,
    password:String,
    cnfpassword:String,
    role:String,
    userId: mongoose.Schema.Types.ObjectId,
});

user.set("autoIndex", true);

const UserLoginDb = model("user", user);    
UserLoginDb.createIndexes();

export default UserLoginDb;
