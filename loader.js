#!/usr/bin/env node

// Set options as a parameter, environment variable, or rc file.
require = require("esm")(module/*, options*/)
// module.exports = require("./main.js")
require('./lib/cli.js');
