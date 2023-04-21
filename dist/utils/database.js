"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = require("sequelize");
require("dotenv/config");
const sequelize = new _sequelize.Sequelize(process.env.DATABASE_URL || "", {
  dialect: "postgres",
  logging: false
});
var _default = sequelize;
exports.default = _default;