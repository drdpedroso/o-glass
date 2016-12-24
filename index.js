#!/usr/bin/env node
 let program = require('commander');
 let shell = require("shelljs");

 program
  .option('-t, --type <type>', 'The application type is')
  .option('-n, --name <name>', 'The application name is')
  .parse(process.argv);

  if(program.type == 'angular'){
	shell.exec("git clone https://github.com/drdpedroso/ionic-material-skeleton.git");
	shell.exec("mv ionic-material-skeleton " + program.name);
	shell.exec("cd " + program.name + " && npm install");
  }