"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _regionController = require("../controllers/regionController.js");
const router = (0, _express.Router)();
router.get("/", _regionController.getAllRegions);
router.get("/:region_id", _regionController.getRegionById);
router.post("/", _regionController.createRegion);
router.put("/:region_id", _regionController.updateRegion);
router.delete("/:region_id", _regionController.deleteRegion);
var _default = router;
exports.default = _default;