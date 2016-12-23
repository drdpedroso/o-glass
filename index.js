#!/usr/bin/env node
let shell = require("shelljs");

shell.exec("git add -A . && git commit -a -m 'test'");