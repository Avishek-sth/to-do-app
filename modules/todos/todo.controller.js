const TodoModel = require("./todo.model");


const create = async (payload) => {
    return await TodoModel.create(payload);
};

const list = async () => {
    return await Model.find();
}

const getById = async (id) => {
    return await Model.findOne({_id: id});
}

const updateById = async (id, payload) => {
    return await Model.findOneAndUpdate({_id: id}, payload, { new: true});
};

const updateStatus = async (id, payload) => {
    const {status} = payload;
    if (!status) throw new Error("Status is required.");
    return await Model.findOneAndUpdate({_id: id}, {status}, {new: true});
};

const removeById = async (id) => {
    return await Model.deleteOne({_id: id});
};

module.exports = {create, list, getById, updateById, updateStatus, removeById};