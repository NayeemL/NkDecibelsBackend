import SignUpDb from "../../model/signupModel/SignupModel.js";
import Userdb from "../../model/userModel.js";
import { generateToken } from "../../middleware/auth.js";

export async function userSignup(req, res, next) {
  try {
    const data = req.body;
    const salt = await bcrypt.genSaltSync(10);
    const password = await data.password;
    const existUser = await SignUpDb.findOne({ email: data.email });
    const details = {
      role: "User",
      firstName: data.firstName,
      LastName: data.LastName,
      email: data.email,
      gender: data.gender,
      maritalStatus: data.maritalStatus,
      phone: data.phone,
      dob: data.dob,
      password: bcrypt.hashSync(password, salt),
      country: data.country,
      state: data.state,
      district: data.district,
      city: data.city,
      area: data.area,
    };

    if (existUser) {
      res.status(409).json({
        message: "user already exist",
        data: existUser,
      });
    } else {
      const createUser = await SignUpDb.create(details);
      await Userdb.create({
        email: data.email,
        password: bcrypt.hashSync(password, salt),
        role: "User",
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
export async function getList(req, res, next) {
  try {
    const getemployeelist = await SignUpDb.find();
    generateToken({ data: getemployeelist }).then((data) => {
      res.status(201).json({
        message: "get successfully",
        data: data,
      });
    });
  } catch (err) {
    next();
  }
}
export async function getoneUser(req, res, next) {
  try {
    const data = req.params;
    const studentId = data.id;
    const studentgetoneid = await SignUpDb.findById(studentId);
    res.status(200).json({
      message: "get Successfully",
      data: studentgetoneid,
    });
  } catch (e) {
    next();
  }
}

export async function updateEmployee(req, res, next) {
  try {
    const data = req.body;
    const id = req.params.id;

    const details = {
      firstName: data.firstName,
      LastName: data.LastName,
      email: data.email,
      gender: data.gender,
      maritalStatus: data.maritalStatus,
      phone: data.phone,
      age: data.age,
      password: data.password,
      country: data.country,
      state: data.state,
      district: data.district,
      city: data.city,
      area: data.area,
    };
    const updateList = await SignUpDb.findByIdAndUpdate(id, details, {
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
    const employeeDelete = await SignUpDb.findByIdAndDelete(employeeId);
    res.status(200).json({
      message: "Deleted Successfully",
      data: employeeDelete,
    });
  } catch (error) {
    next();
  }
}

export async function uploadResume(req, res, next) {
  try {
    console.log("req.file", req.file);
    const path = req.file.path;
    res.status(201).json({
      message: "added Successfully",
      path: path,
    });
  } catch (error) {
    next();
  }
}

export async function userLogin(req, res, next) {
  try {
    const data = req.body;

    const existUser = await Userdb.findOne({
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
            status: "Successful",
          });
        });
      } else {
        res.status(400).json({
          message: "password not matched",
          status: "Failed",
        });
      }
    } else {
      res.status(400).json({
        message: "user not found",
        status: "Failed",
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}
