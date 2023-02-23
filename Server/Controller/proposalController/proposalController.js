import ProposalDb from "../../Model/proposalModel/proposalModel.js";
import ProposalTableDb from "../../Model/proposalModel/addProductTable.js";

export async function createProposal(req, res, next) {
  try {
    const data = req.body;
    const details = {
      proposalNumber: data.proposalNumber,
      customerId:data.customerId,
      customerName: data.customerName,
      customerAddress: data.customerAddress,
      gstin: data.gstin,
      length: data.length,
      width: data.width,
      depth: data.depth,
      puropose: data.puropose,
      quotationTitle: data.quotationTitle,
      date: data.date,
      place: data.place,
      quotationTitle:data.quotationTitle,
      productItems: [
        {
          subheader: data.subheader,
          description: data.description,
          quantity: data.quantity,
          price: data.price,
          amount: data.amount,
          mrp: data.mrp,
        },
      ],
      subTotal: data.subTotal,
      discountvalue: data.discountvalue,
      afterDiscount: data.afterDiscount,
      gst: data.gst,
      shipping: data.shipping,
      grandTotal: data.grandTotal,  
      note: data.note,
      terms: data.terms,
      status:data.status,
    };
    const createProposal = await ProposalDb.create(details);
    res.status(200).json({
      message: "Proposal Created Successfully",
      data: createProposal,
    });
  } catch (err) {
    console.log(err);
    next();
  }
}



export async function createProposalTable (req, res, next){
  try{
    const data = req.body;
    const Tabledetails = {
      subheader: data.subheader,
      description: data.description,
      quantity: data.quantity,
      price: data.price,
      amount: data.amount,
      mrp: data.mrp,
  };
  const createProposalTable = await ProposalTableDb.create(Tabledetails);
    res.status(200).json({
      message: "Proposal Table Created Successfully",
      data: createProposalTable,
  });
  } catch (err) {
  console.log(err);
  next();
  }
}

export async function getProposal(req, res, next) {
  try {
    const getProposal = await ProposalDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getProposal,
    });
  } catch (err) {
    next();
  }
}

export async function updateProposal(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      proposalNumber: data.proposalNumber,
      customerName: data.customerName,
      customerAddress: data.customerAddress,
      gstin: data.gstin,
      length: data.length,
      width: data.width,
      depth: data.depth,
      puropose: data.puropose,
      quotationTitle: data.quotationTitle,
      date: data.date,
      place: data.place,
      productItems: [
        {
          id: data.id,
          subheader: data.subheader,
          description: data.description,
          quantity: data.quantity,
          price: data.price,
          amount: data.amount,
          mrp: data.mrp,
        },
      ],
      subTotal: data.subTotal,
      discountvalue: data.discountvalue,
      afterDiscount: data.afterDiscount,
      gst: data.gst,
      shipping: data.shipping,
      grandTotal: data.grandTotal,
      note: data.note,
      terms: data.terms,
      status:data.status
    };
    const updateProposal = await ProposalDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "updated successfully",
      data: updateProposal,
    });
  } catch (err) {
    next();
  }
}

export async function deleteProposal(req, res, next) {
  try {
    const data = req.params;
    const ProductId = data.id;
    const deleteProposal = await ProposalDb.findByIdAndDelete(ProductId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteProposal,
    });
  } catch (error) {
    next();
  }
}

// export async function getProductData(req, res, next) {
//   try {
//     const data = req.body;
//     const productId = data.id;
//     const getoneProductid = await ProposalDb.findById(productId);
//       res.status(200).json({
//         message: "get Customer Successfully",
//         data: getoneProductid,
//       });
//   } catch (err) {
//     console.log(err);
//     next();
//   }
// }

export async function getoneProposal (req, res, next){
  try {
    const data = req.params;
    const proposalId = data.id;
    const ProposalgetOneid = await ProposalDb.findById(proposalId);
    res.status(200).json({
      message: "get Successfully",
      data: ProposalgetOneid,
    });
  } catch (e) {
    throw e;
  }
}

