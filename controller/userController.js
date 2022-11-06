const userModel = require("../models/userModel");
const appError = require("../Utils/appError");
const catchAsync = require("../Utils/catchAsync");

exports.createUser = catchAsync(async (req, res, next) => {
  const create = await userModel.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      create,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const allUser = await userModel.find();

  res.status(200).json({
    status: "success",
    results: allUser.length,
    data: {
      allUser,
    },
  });
});

exports.getSingleUser = catchAsync(async (req, res, next) => {
  // console.log("......................");
  const singleUser = await userModel.findById(req.params.id);

  if (!singleUser) {
    return next(new appError("no doc found with this id", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      singleUser,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const update = await userModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!update) {
    return next(new appError("no doc found with this id", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      update,
    },
  });
});

exports.deleteSingleUser = catchAsync(async (req, res, next) => {
  const deleteUser = await userModel.findByIdAndDelete(req.params.id);
  if (!deleteUser) {
    return next(new appError("No document found with this id", 404));
  }

  res.status(204).json({
    status: "success",
    data: {
      data: {},
    },
  });
});
