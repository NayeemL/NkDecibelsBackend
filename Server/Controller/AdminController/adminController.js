import { generateToken } from "../../middleware/auth.js";
import bcrypt from "bcrypt";
import adminLoginDB from "../../Model/AdminModel/adminModel.js";

export async function userSignup(req, res, next) {
  try {
    const data = req.body;
    const salt = await bcrypt.genSaltSync(10);
    const password = await data.password;
    const existUser = await adminLoginDB.findOne({ email: data.email });
    const details = {
      role: "admin",
      email: data.email,
      password: bcrypt.hashSync(password, salt)
    };
    if (existUser) {
      res.status(409).json({
        message: "user already exist",
        data: existUser,
      });
    } else {
      const createUser = await adminLoginDB.create(details);
      console.log("createUser", createUser);

      res.status(201).json({
        message: "User Created Successfully",
        data: createUser,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
export async function getList(req, res, next) {
  try {
    const getemployeelist = await adminLoginDB.find();
    generateToken({ data: getemployeelist }).then((data) => {
      res.status(200).json({
        message: "get successfully",
        data: data,
      });
    });
  } catch (err) {
    next();
  }
}

export async function updateEmployee(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;

    const details = {
      role: "admin",
      email: data.email,
      password: data.password,
    };
    const updateList = await adminLoginDB.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateList,
    });
  } catch (err) {
    next();
  }
}

export async function deleteEmployee(req, res, next) {
  try {
    const data = req.params;
    const employeeId = data.id;
    const employeeDelete = await adminLoginDB.findByIdAndDelete(employeeId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: employeeDelete,
    });
  } catch (error) {
    next();
  }
}

export async function adminLogin(req, res, next) {
  try {
    const data = req.body;
    const existUser = await adminLoginDB.findOne({
      email: data.email,
      role: data.role,
    });
    console.log("existUser", existUser);

    if (existUser) {
      bcrypt
        .compare(data.password, existUser.password)
        .then((checkPassword) => {
          if (checkPassword) {
            generateToken({ email: existUser.email }).then((token) => {
              res.status(200).json({
                message: "Admin login successfully",
                userName: existUser.role,
                data: existUser,
                token: token,
                status: "Successful",
              });
            });
          } else {
            res.status(400).json({
              message: "password not matched",
              status: "Failed",
            });
          }
        });
    } else {
      res.status(400).json({
        message: "user not found",
        status: "failed",
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
