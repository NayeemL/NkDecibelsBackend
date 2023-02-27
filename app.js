import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(
  express.json({
    limit: "25MB",
  })
);

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join("./", "/public")));
import path from "path";
// app.use(bodyParser.json());

// Admin Routers
import addCustomer from "./Server/Routes/CustomerRoute/addCustomerRoute.js";
import addProduct from "./Server/Routes/ProductRoute/addProductRoute.js";
import addUser from "./Server/Routes/userRoute/userRoute.js";
import admin from "./Server/Routes/AdminRoute/adminRoute.js";
import addProposal from "./Server/Routes/proposalRoute/proposalRoute.js";

// Admin app.use
app.use("/addCustomer", addCustomer)
app.use("/addProduct", addProduct)
app.use("/addUser", addUser)
app.use("/admin", admin)
app.use("/addProposal", addProposal);

export default app;
