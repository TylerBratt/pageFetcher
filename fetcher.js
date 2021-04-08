const request = require('request');
const fs = require('fs');
const argv = process.argv.slice(2);
const userUrl = argv[0];
const pathName = argv[1];
// console.log(argv[0], argv[1]);

request(userUrl, (error, response, body) => {
  fs.writeFile(pathName, body, (err) =>{
    if (err) {
      throw err;
      // process.exit();
    }
  });
});
// console.log(userUrl);