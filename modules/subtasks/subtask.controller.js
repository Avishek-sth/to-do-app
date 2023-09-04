const Model = require("./subtask.model");

const create = async (payload) => {
  return await Model.create(payload);
};

const list = async () => {
  return await Model.find();
};

const getById = async (id) => {
  return await Model.findOne({ _id: id });
};

const updateById = async (id, payload) => {
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const updateStatus = async (id, payload) => {
  const { status } = payload;
  if (!status) throw new Error("Status is required.");
  return await Model.findOneAndUpdate({ _id: id }, { status }, { new: true });
};

const removeById = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, list, getById, updateById, removeById, updateStatus };

//CRUD
/*
C = create (insert the data in DB)

R = 2 types
1. List (All data from DB)
2. Get One ((Read only one specific data))

U = Update
Update one specific data in DB

D = Delete
Remove only specific data
*/
