import UserDb from "../../Model/userModel/userModel.js";

export async function createUser(req, res, next) {
  try {
    const data = req.body;
    const details = {
      username: data.username,
      email: data.email,
      password: data.password,
      cnfpassword: data.cnfpassword,
      userRole: data.userRole,
    };
    const createUser = await UserDb.create(details);
    res.status(200).json({
      message: "User Created Successfully",
      data: createUser,
    });
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
