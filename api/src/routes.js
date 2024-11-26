const express = require('express');
const router = express.Router();

const user = require('./controllers/user');
const lancamento = require('./controllers/lancamento');

router.get('/', (req, res) => {
    res.send('Working Fine.');
});

router.get('/user', user.get);
router.get('/user/:id', user.get);
router.post('/user', user.create);
router.patch('/user/:id', user.update);
router.delete('/user/:id', user.del);

router.get('/lancamento', lancamento.get);
router.get('/lancamento/:id', lancamento.get);
router.post('/lancamento', lancamento.create);
router.patch('/lancamento/:id', lancamento.update);
router.delete('/lancamento/:id', lancamento.del);

module.exports = router;
