const router = require("express").Router();
const TodoController = require("./todo.controller");

router.post("/", async (req, res, next) => {
  try {
    const {title} = req.body;
    if(!title) throw new Error("Title is missing!");
    const result = await TodoController.create({title});
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await TodoController.list();
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TodoController.getById(id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TodoController.updateById(id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TodoController.updateStatus(id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TodoController.removeById(id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
