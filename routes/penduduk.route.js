'use strict'

const express = require('express')
const pendudukController = require('../controllers/penduduk.controller')
const router = new express.Router();

router.get("/hallo", pendudukController.index)

module.exports = router