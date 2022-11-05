const chalk = require("chalk");
const ora = require("ora");

const spinner = ora().start();

module.exports = function log(msg, stop) {
  if (stop) {
    spinner.stop();
  }
  if (!msg) {
    return console.log();
  }
  return spinner.start(msg);
};
