import mongoose from "mongoose";

const { Schema, model } = mongoose;

const addCustomer = new Schema({
  fullName:{ 
    type: String,
    required: true
  },
  addressWithPincode:{ 
    type: String,
    required: true
  },
  landLine:{ 
    type: String,
    required: true
  },
  mobile:{ 
    type: String,
    required: true
  },
  whatsappNumber:{ 
    type: String,
    required: true
  },
  email:{ 
    type: String,
    required: true
  },
  gstinDetails:{ 
    type: String,
    required: true
  },
});

addCustomer.set("autoIndex", true);

const CustomerDb = model("addCustomer", addCustomer);
CustomerDb.createIndexes();

export default CustomerDb;