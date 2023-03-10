import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Registration = new Schema({
    companyType: String,
    companyName: String,
    email: String,
    aadharNo: String,
    panNo: String,
    service: String,
    amount: String,
});

Registration.set("autoIndex", true);

const RegistrationDb = model("Registration", Registration);
RegistrationDb.createIndexes();

export default RegistrationDb;
