const {model,Schema} = require('mongoose');


const contt = new Schema({
    name: {type: String, required: true},
    numer: {type: String, required: true}
    
});

module.exports= model('contt',contt);
