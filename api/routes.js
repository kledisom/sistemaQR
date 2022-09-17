const express = require('express');
const path = require('path');
var router = express.Router();

//middleware
router.use(function timelog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

//rota principal da aplicação
router.get('/', (req, res) => { 
    res.json({message: 'working'});
});


//essa rota busca o dado através do qr code informado pela requisição
router.post('/user', (req, res) => {
    let code = req.body.code
    let p = path.join(__dirname, `../image_base/${code}.png`);

    res.sendFile(p);
    console.log(`../${code}.png`);
  
});

module.exports = router;