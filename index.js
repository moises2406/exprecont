//ws
require('dotenv').config()
const Express = require('express')
//const device = require('express-device');
const cors = require('cors')
const morgan = require('morgan')

//init
const app = Express();
 require('./db')

//setttis
app.set('port',process.env.PORT || 3000)

//midewel
app.use(cors())
app.use(morgan('dev'))
app.use(Express.json())
//app.use(device.capture())

//device.enableViewRouting(app);

app.use(require('./router/GetWs'))




app.use(Express.urlencoded({ extended: false }))

app.listen(app.get('port'),  () => {
  console.log('init en'+ app.get('port'));
})