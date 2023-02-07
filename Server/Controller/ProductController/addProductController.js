import ProductDb from "../../Model/ProductModel/addProductModel.js";

export async function createProduct(req, res, next) {
  try {
    const data = req.body
    const Path = req.file.path
    const details = {
      productName: data.productName,
      price:data.price,
      description:data.description,
      cgst:data.cgst,
      igst:data.igst,
      sgst:data.sgst,
      vat:data.vat,
<<<<<<< HEAD
      productImage:Path.productImage,
    }

    const createProduct = await ProductDb.create(details);
=======
      productImage:data.productImage
    };
    const createProduct = await ProductDb.create(details); 
>>>>>>> b3d797ab2c00b0099b82700122a7612b3a6b80a5
    res.status(201).json({
      message: "Product Created Successfully",
      data: createProduct,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getProduct(req, res, next) {
  try {
    const getProduct = await ProductDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getProduct,
    });
  } catch (err) {
    next();
  }
}

export async function updateProduct(req, res, next) {
  try {
    const data = req.body;
<<<<<<< HEAD
    const Path = req.file.Path
=======
    const file = req.body.file
>>>>>>> b3d797ab2c00b0099b82700122a7612b3a6b80a5
    const id = req.params.id;
    const details = {
        productName: data.productName,
        price:data.price,
        description:data.description,
        cgst:data.cgst,
        igst:data.igst,
        sgst:data.sgst,
        vat:data.vat,
<<<<<<< HEAD
        productImage:Path.productImage,
=======
        productImage:file.productImage
>>>>>>> b3d797ab2c00b0099b82700122a7612b3a6b80a5
    };
    const updateProduct = await ProductDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateProduct,
    });
  } catch (err) {
    next();
  }
}

export async function deleteProduct(req, res, next) {
  try {
    const data = req.params;
    const ProductId = data.id;
    const deleteProduct = await ProductDb.findByIdAndDelete(ProductId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteProduct,
    });
  } catch (error) {
    next();
  }
}