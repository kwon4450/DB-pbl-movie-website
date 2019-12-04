const db = require('mysql2/promise');
const config = require('../config/config')['test'];

const pool = db.createPool(config);

module.exports = pool;