import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(
  json({
    limit: "25MB",
  })
);

app.use(express.static(path.join("./", "/public")));
import path from "path";
// app.use(bodyParser.json());

// Admin Routers
import addCustomer from "./Server/Routes/CustomerRoute/addCustomerRoute.js";
import addProduct from "./Server/Routes/ProductRoute/addProductRoute.js";
import addUser from "./Server/Routes/userRoute/userRoute.js";
import admin from "./Server/Routes/AdminRoute/adminRoute.js";

// Admin app.use
app.use("/addCustomer", addCustomer)
app.use("/addProduct", addProduct)
app.use("/addUser", addUser)
app.use("/admin", admin)

export default app;
