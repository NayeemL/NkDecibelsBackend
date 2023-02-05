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

// Admin Routers
import addCustomer from "./Server/Routes/CustomerRoute/addCustomerRoute.js";


// Admin app.use
app.use("/addCustomer", addCustomer);

export default app;