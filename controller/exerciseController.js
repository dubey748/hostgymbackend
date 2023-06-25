const exerciseModel = require("../model/exerciseModel")
const bodyPartsModel = require("../model/bodyPartsModel");
const mongoose = require('mongoose');

exports.getExercises = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Content-Type", "application/json");

    const dataDoc = await exerciseModel.find();

    res.status(200).json(dataDoc);
  } catch (err) {
    console.log(err.message);
  }
};

exports.getExerciseById = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Content-Type", "application/json");

    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid id' });
    }

    const dataDoc = await exerciseModel.findById(id);
    if (!dataDoc) {
      return res.status(404).json({ error: 'Data not found' });
    }

    res.status(200).json(dataDoc);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};



exports.getbodyParts = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Content-Type", "application/json");

   
    const dataDoc = await bodyPartsModel.find({}, { data: 1, _id: 0 });

    res.status(200).json(dataDoc[0].data);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.getExercisesByBodyPart = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Content-Type", "application/json");

    const { bodyPart } = req.params;
    const dataDoc = await exerciseModel.find({ bodyPart });

    res.status(200).json(dataDoc);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.getTargetMuscle = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Content-Type", "application/json");

    const dataDoc = await exerciseModel.find({ target: req.params.target });
    if (dataDoc.length == 0) {
      throw new Error("error");
    } else {
      res.status(200).json(dataDoc);
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "The Endpoint does not exist",
    });
  }
};

exports.getEquipment = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Content-Type", "application/json");

    const dataDoc = await exerciseModel.find({
      equipment: req.params.equipment,
    });
    if (dataDoc.length == 0) {
      throw new Error("error");
    } else {
      res.status(200).json(dataDoc);
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "The Endpoint does not exist",
    });
  }
};
