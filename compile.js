const fs = require('fs');
const solc = require('solc');
const contract  = "./modContract.sol";

const source = fs.readFileSync(contract,'utf8');

 
module.exports = solc.compile(source,1).contracts[':Contract'];