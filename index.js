#!/usr/bin/env node
 let program = require('commander');
 let shell = require("shelljs");
 let createFile = require('create-file');
 let cmdValue = '';
 let whatValue = '';
 let nameValue = '';

 program
  .option('-t, --type <type>', 'The application type is')
  .option('-n, --name <name>', 'The application name is')
  .arguments('<cmd> [what] [name]')
  .action(function (cmd, what, name) {
     cmdValue = cmd;
     whatValue = what;
     nameValue = name;
     console.log(cmd);
     console.log(what);
     console.log(name);
  });

 program
  .parse(process.argv);

  if(program.type == 'angular'){
  	shell.exec("git clone https://github.com/drdpedroso/ionic-material-skeleton.git");
  	shell.exec("mv ionic-material-skeleton " + program.name);
  	shell.exec("cd " + program.name + " && npm install");
  }

  if(cmdValue && whatValue){
    if(cmdValue == "create"){
      if(whatValue == "module"){
        createFile('./js/modules/' + nameValue + '/' + nameValue + '-controller.js', 'my content\n', function (err) {
          console.log(err);
          // file either already exists or is now created (including non existing directories)
        });
      }
    }
  }
