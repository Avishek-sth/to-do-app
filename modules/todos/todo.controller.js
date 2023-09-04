const TodoModel = require("./todo.model");


const create = (payload) => {
    return TodoModel.create(payload);
};


module.exports = {create};