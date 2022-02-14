import User from "../models/User.js";
import mongoose from "mongoose";
const users = [{ name: "tweed" }, { name: "brian" }];

const first_get_callback = function (req, res, next) {
  console.log("Hello from A!");
  next();
};

const second_get_callback = async function (req, res) {
  console.log("Hello from B!");
  try {
    const users = await User.find();
    return res.json({
      success: true,
      data: users,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

const create_user = async function (req, res) {
  const user = new User({
    name: req.body.name,
    has_a_job: req.body.has_a_job,
    username: req.body.username,
    date_employed: req.body.date_employed,
  });
  try {
    await user.save();
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};
const delete_user = async function (req, res) {
  try {
    await req.user.remove();
    return res.status(200).json({
      success: true,
      message: "deleted user succcesfully",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

const get_user = function (req, res) {
  console.log(req.user);
  return res.status(200).json({
    success: true,
    data: req.user,
  });
};

const get_user_callback = async (req, res, next, userId) => {
  let user;

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        error: "user id is not valid",
      });
    }
    user = await User.findById(userId);
    if (user === null) {
      return res.status(400).json({
        success: false,
        error: "user with that id does not exist",
      });
    }
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
  req.user = user;
  next();
};

const update_user = async function (req, res) {
  try {
    
    let updated_user =  await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: req.body,
        },
        { new: true }
      );

    return res.json(updated_user);
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};

export default {
  create_user,
  delete_user,
  update_user,
  get_user,
  get_user_callback,
  first_get_callback,
  second_get_callback,
};
