const fs = require('fs');
process.setting = JSON.parse(fs.readFileSync('./env.json','UTF-8'));

console.log(process.setting.urlAdmin);