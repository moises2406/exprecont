const mongoose = require('mongoose');

const URI = process.env.URL ? process.env.URL : 'mongodb://localhost/auth';
mongoose.connect(URI,{
    useCreateIndex: true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
})

.then(db =>console.log('db is conet'))
.catch(e => console.log('err'))