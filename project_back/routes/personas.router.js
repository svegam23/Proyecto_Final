const express = require("express");
const router = express.Router();
const personasController = require("../controllers/personas.controller");

router.post("/", personasController.create);
router.get("/", personasController.find);
router.get("/:id", personasController.findOne);
router.put("/:id", personasController.update);
router.delete("/:id", personasController.remove);

module.exports = router