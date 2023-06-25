const express = require("express");
const app = express()
const Router = express.Router();
var bodyParser = require('body-parser')

 const {
  getExercises,
  getExerciseById,
  getbodyParts,
  getTargetMuscle,
  getEquipment,
  getExercisesByBodyPart,
} = require("../controller/exerciseController"); 

app.use(bodyParser.json());
Router.route("/").get(getExercises);

Router.route("/bodyParts").get(getbodyParts);


Router.route("/:id").get(getExerciseById);

Router.route("/target/:target").get(getTargetMuscle);

Router.route("/equipment/:equipment").get(getEquipment);

module.exports = Router;
