import UserDb from "../../Model/userModel/userModel.js";
import { generateToken } from "../../middleware/auth.js";
import bcrypt from "bcryptjs";

export async function createUser(req, res, next) {
  try {
    const data = req.body;
    const salt = await bcrypt.genSaltSync(10);
    const password = await data.password;
    const existUser = await UserDb.findOne({ email: data.email });
    const details = {
      username: data.username,
      email: data.email,
      password: bcrypt.hashSync(password, salt),
      cnfpassword: bcrypt.hashSync(password, salt),
      role: data.role,
    };
    if (existUser) {
      res.status(409).json({
        message: "user already exist",  
        data: existUser,
      });
    } else {
      
      const createUser = await UserDb.create(details);
      await UserDb.create({
        email: data.email,
        password: bcrypt.hashSync(password, salt),
        role: data.role,
        userId: createUser._id,
        forgetPasswordCode: 0,
      });
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
export async function getUser(req, res, next) {
  try {
    const getUser = await UserDb.find();
    res.status(200).json({
      message: "get successfully",
      data: getUser,
    });
  } catch (err) {
    next();
  }
}

export async function getoneUser(req, res) {
  try {
    const data = req.params;
    const userId = data.id;
    const usergetoneid = await UserDb.findById(userId);
    res.status(200).json({
      message: "get Successfully",
      data: usergetoneid,
    });
  } catch (e) {
    throw e;
  }
}


export async function updateUser(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;
    const details = {
      username: data.username,
      email: data.email,
      password: data.password,
      cnfpassword: data.cnfpassword,
      userRole: data.userRole,
    };
    const updateUser = await UserDb.findByIdAndUpdate(id, details, {
      new: true,
    });
    res.status(200).json({
      message: "create successfully",
      data: updateUser,
    });
  } catch (err) {
    next();
  }
}

export async function deleteUser(req, res, next) {
  try {
    const data = req.params;
    const UserId = data.id;
    const deleteUser = await UserDb.findByIdAndDelete(UserId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: deleteUser,
    });
  } catch (error) {
    next();
  }
}


export async function userLogin(req, res, next) {
  try {
    const data = req.body;

    const existUser = await UserDb.findOne({
      email: data.email,
    });

    if (existUser) {
      const checkPassword = bcrypt.compare(existUser.password, data.password);
      if (checkPassword) {
        generateToken({ email: existUser.email }).then((token) => {
          res.status(200).json({
            message: "user login successfully",
            data: existUser,
            token: token,
            status: "Successfully",
          });
        });
      } else {
        res.status(400).json({
          message: "password not matched",
          status: "failed",
        });
      }
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
