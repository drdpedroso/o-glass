#!/usr/bin/env node
 var program = require('commander');

 program
  .option('-t, --type <type>', 'The application type is')

  .parse(process.argv);

  if(program.type){console.log(program.type)}