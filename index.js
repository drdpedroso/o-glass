#!/usr/bin/env node
 let program = require('commander');
 let shell = require("shelljs");
 let fs = require('fs');
 let createFile = require('create-file');
 let whatValue = '';
 let nameValue = '';
 let nameValueCap = '';

 program
  .option('-t, --type <type>', 'The application type is')
  .option('-n, --name <name>', 'The application name is')
  .command('create [what] [name]')
  .action(function (what, name) {
     whatValue = what;
     nameValue = name;
     nameValueCap = name.replace(/\b\w/g, l => l.toUpperCase());
  });

 program
  .parse(process.argv);

  if(program.type == 'angular'){
  	shell.exec("git clone https://github.com/drdpedroso/ionic-material-skeleton.git");
  	shell.exec("mv ionic-material-skeleton " + program.name);
  	shell.exec("cd " + program.name + " && npm install");
  }

  function readModuleFile(path, callback) {
    try {
        let filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
  }

  if(whatValue == "module"){
    //Create Controller
    createFile('./www/modules/' + nameValue + '/controllers/' + nameValue + '-controller.js'
             , "app.controller(\'"+ nameValueCap + "Controller\', function(){\n});", function (err) {
    });

    //Create Service
    createFile('./www/modules/' + nameValue + '/services/' + nameValue + '-service.js'
             , "app.service(\'"+ nameValueCap + "Service\', function(){\n});", function (err) {
    });

    //Create View
    readModuleFile('./html-content.html', function (err, words) {
      createFile('./www/modules/' + nameValue + '/views/' + nameValue + '.html'
               , words, function (err) {
      });
    });

  }
