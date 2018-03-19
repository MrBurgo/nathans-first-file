const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

// const filename = path.join(__dirname, 'test.txt');
// console.log(chalk.red(filename));

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.log(chalk.red(err))
  } else {
    console.log(files);
  }
})

console.log(chalk.yellow('Hello!'))
