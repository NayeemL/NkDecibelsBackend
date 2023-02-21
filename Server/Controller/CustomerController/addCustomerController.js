import CustomerDb from "../../Model/CustomerModel/addCustomerModel.js";

export async function createCustomer(req, res, next) {
  try {
    const data = req.body;
    const details = {
      fullName: data.fullName,
      addressWithPincode:data.addressWithPincode,
      landLine:data.landLine,
      mobile:data.mobile,
      whatsappNumber:data.whatsappNumber,
      email:data.email,
      gstinDetails:data.gstinDetails
    };
    const createCustomer = await CustomerDb.create(details);
    res.status(200).json({
      message: "Customer Created Successfully",
      data: createCustomer,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getCustomer(req, res, next) {
  try {
    const getCustomer = await CustomerDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getCustomer,
    });
  } catch (err) {
    next();
  }
}

export async function getoneCustomer (req, res, next){
    try {
      const data = req.params;
      const customerId = data.id;
      const CustomergetOneid = await CustomerDb.findById(customerId);
      res.status(200).json({
        message: "get Successfully",
        data: CustomergetOneid,
      });
    } catch (e) {
      throw e;
    }
}


export async function updateCustomer(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      fullName: data.fullName,
      addressWithPincode:data.addressWithPincode,
      landLine:data.landLine,
      mobile:data.mobile,
      whatsappNumber:data.whatsappNumber,
      email:data.email,
      gstinDetails:data.gstinDetails
    };
    const updateCustomer = await CustomerDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateCustomer,
    });
  } catch (err) {
    next();
  }
}

export async function deleteCustomer(req, res, next) {
  try {
    const data = req.params;
    const CustomerId = data.id;
    const deleteCustomer = await CustomerDb.findByIdAndDelete(CustomerId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteCustomer,
    });
  } catch (error) {
    next();
  }
}


export async function getCustomerData(req, res, next) {
  try {
    const data = req.body;
    const customerId = data.id;
    const CustomergetOneid = await CustomerDb.findById(customerId);
      res.status(200).json({
        message: "get Customer Successfully",
        data: CustomergetOneid,
      });
  } catch (err) {
    console.log(err);
    next();
  }
}
