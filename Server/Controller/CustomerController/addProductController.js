import ProductDb from "../../Model/CustomerModel/addProductModel.js";

const ImageModel = require('../../Model/CustomerModel/image');
const ImageService = require('../../service/image')

export async function createProduct(req, res, next) {
  try {
    const data = req.body;
    const details = {
      name: data.name,
      price:data.price,
      description:data.description,
      cgst:data.cgst,
      igst:data.igst,
      sgst:data.sgst,
      vat:data.vat,
    };
    const createProduct = await ProductDb.create(details);
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
    const id = req.params.id;
    const details = {
        name: data.name,
        price:data.price,
        description:data.description,
        cgst:data.cgst,
        igst:data.igst,
        sgst:data.sgst,
        vat:data.vat,
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

    export async function singleImageUpload  (req, res) {

    if(req.body.images){
        const imageService = new ImageService()
        req.body.images = imageService.singleImageUpload('image', req.body.images)
    }
        console.log(req.body.images)
        //assign the value
        const image = new ImageModel()
        image.images = req.body.images
        //save the user
        await image.save();

        res.status(200).send({
            status: 200,
            message: "Single Image Uploaded!"
        })
}

