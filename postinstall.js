const {exec} = require('child_process');

const command = [
  'cd dashboard',
  'yarn'
];

// check yarn is installed
exec('yarn -v', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  if (stdout) {
    if (process.platform == "win32") {exec("npm install yarn --location=global", (error) => {if (error) {throw error;}});}
    else {exec("curl --compressed -o- -L https://yarnpkg.com/install.sh", (error) => {if (error) {throw error;}});}
  }
});

const executedCommands = exec(command.join(' && '), (error) => {
  if (error) {
    throw error;
  }
});