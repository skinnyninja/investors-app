const fs = require('fs');
const envFile = '.env';
let envPath = '';

const ENVIROMENT = process.env.ENVIROMENT;

if (ENVIROMENT === 'uat') {
  envPath = '.env.test';
  fs.copyFile(envPath, envFile, (err) => {
    if (err) throw err;
  });
}
