import app from "./app.js";
import mongoose from "mongoose";
import { config } from "dotenv";

// connect is used to connect DB
mongoose.set('strictQuery', true);

const { connect } = mongoose;

connect("mongodb+srv://nayeem:555666777aA@cluster0.0pmvijn.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}).then((res) => {
  console.log("DB Connected");
});

app.listen(5000, () => {
  console.log("Connected");
});
