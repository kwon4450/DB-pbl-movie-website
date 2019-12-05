const express = require('express');
const { select, change } = require('../../db');

const router = express.Router();

router.get('/', async (req, res, next) => {
  
  return res.json(data);
})

router.get('/detail', async (req, res, next) => {
  const { name } = req.query;
  const sql = `select * from movie natural join `
})

module.exports = router;