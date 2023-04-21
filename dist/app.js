"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.port = exports.app = void 0;
var _express = _interopRequireDefault(require("express"));
var _regionRoutes = _interopRequireDefault(require("./routes/regionRoutes.js"));
const app = (0, _express.default)();
exports.app = app;
app.use(_express.default.json());
app.use("/regions", _regionRoutes.default);
const port = process.env.PORT || 3000;
exports.port = port;