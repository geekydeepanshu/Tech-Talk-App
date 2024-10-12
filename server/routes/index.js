const express = require('express');
const userRoutes = require('../routes/userRoutes');
const probeRoutes = require('../routes/probeRoutes');
const router = express();

router.use('/users', userRoutes);
router.use('/', probeRoutes);

module.exports = router;