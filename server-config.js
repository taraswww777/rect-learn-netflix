const path = require('path');
const PORT = process.env.PORT || 5000;
const ROOT = path.join(__dirname + '/build');

module.exports = {
	PORT: PORT,
	ROOT: ROOT,
};
