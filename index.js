const childProcess = require("child_process");
const extensions = require("./extension.json");
const chalk = require("chalk");
const getShell = extension => `code --install-extension ${extension}  --force`;

function exec(shell = "") {
  return new Promise((rel, rej) =>
    childProcess.exec(shell, (err, stdout, stderr) =>
      err ? rej(stderr) : rel(stdout)
    )
  );
}

function next(shells, logs = []) {
  shells = [...shells];
  const nextShell = shells.shift();
  if (!nextShell) {
    console.log(chalk.green(`Install Finish.`));
    return logs;
  }
  return exec(getShell(nextShell))
    .then(res => {
      console.log(res);
      return next(shells, logs.concat(res));
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}

(function main() {
  next(extensions).then(logs => {
    /* It is an answer to the ByteDance interview question. */
    /* console.log(logs); */
    process.exit(0);
  });
})();

module.export = {};
