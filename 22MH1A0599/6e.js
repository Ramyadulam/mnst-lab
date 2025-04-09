const fs = require('fs');
const { promisify } = require('util'); 
const readFile = promisify(fs.readFile); 
const writeFile = promisify(fs.writeFile); 
(async () => {
try {
console.log('Data moved from src to dest');
} catch (err) { console.log(err);
}
})();

