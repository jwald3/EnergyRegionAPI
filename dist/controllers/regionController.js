"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRegion = exports.getRegionById = exports.getAllRegions = exports.deleteRegion = exports.createRegion = void 0;
var _Region = _interopRequireDefault(require("../models/Region.js"));
const getAllRegions = async (req, res) => {
  try {
    const regions = await _Region.default.findAll();
    res.json(regions);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving regions"
    });
  }
};
exports.getAllRegions = getAllRegions;
const getRegionById = async (req, res) => {
  try {
    const region = await _Region.default.findByPk(req.params.RegionID);
    if (!region) return res.status(404).json({
      message: "Region not found"
    });
    res.json(region);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving region"
    });
  }
};
exports.getRegionById = getRegionById;
const createRegion = async (req, res) => {
  try {
    const region = await _Region.default.create(req.body);
    res.status(201).json(region);
  } catch (error) {
    res.status(500).json({
      message: "Error creating region"
    });
  }
};
exports.createRegion = createRegion;
const updateRegion = async (req, res) => {
  try {
    const [updatedRows] = await _Region.default.update(req.body, {
      where: {
        RegionID: req.params.RegionID
      }
    });
    if (!updatedRows) return res.status(404).json({
      message: "Region not found"
    });
    res.json({
      message: "Region updated"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating region"
    });
  }
};
exports.updateRegion = updateRegion;
const deleteRegion = async (req, res) => {
  try {
    const deletedRows = await _Region.default.destroy({
      where: {
        RegionID: req.params.RegionID
      }
    });
    if (!deletedRows) return res.status(404).json({
      message: "Region not found"
    });
    res.json({
      message: "Region deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting region"
    });
  }
};
exports.deleteRegion = deleteRegion;