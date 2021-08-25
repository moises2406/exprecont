const { Router } = require('express');
const { GetCont,PostCont,DeleteCont } = require('../controller/cont');


const rute = Router();


rute.get('/cont',GetCont)

rute.post('/cont',PostCont)
rute.delete('/cont',DeleteCont)

module.exports=rute;