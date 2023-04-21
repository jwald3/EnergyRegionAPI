"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../utils/database.js"));
class Region extends _sequelize.Model {}
Region.init({
  RegionID: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  RegionName: {
    type: _sequelize.DataTypes.STRING(255),
    allowNull: false
  },
  StateTerritory: {
    type: _sequelize.DataTypes.CHAR(2),
    allowNull: false
  }
}, {
  sequelize: _database.default,
  modelName: "Region",
  tableName: "Regions",
  // Set the table name explicitly
  timestamps: false
});
var _default = Region;
exports.default = _default;