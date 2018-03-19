const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const filename = path.join(__dirname, 'text.txt');
// console.log(chalk.red(filename));


// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     console.log(chalk.red(err))
//   } else {
//     console.log(files);
//   }
// })
//
// console.log(chalk.yellow('Hello!'))

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const lines = data.split('\n').filter(x => x.length > 0);

  console.log(lines)
})
