"use strict";

var _app = require("./app.js");
_app.app.listen(_app.port, () => {
  console.log(`Regions API is running on port ${_app.port}`);
});