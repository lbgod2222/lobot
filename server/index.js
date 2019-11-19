const Koa = require('koa');
const logger = require('./lib/log4js');
const route = require('./route')
const path = require('path');

const cors = require('koa2-cors');
const socket = require('socket.io')
const five = require('johnny-five')
const Raspi = require('raspi-io')

const app = new Koa();
const port = process.env.PORT || 3100
const host = process.env.HOST || '127.0.0.1'

// LogFiles
app.on('error', err => {
    logger.error('ERROR:', err)
})

app.use(cors());

route(app)

app.listen(port, host)
logger.info('Service is running at:' + host + ':' + port)

const board = new five.Board({
    io: new Raspi,
    repl: false
})

board.on('ready', () => {
    console.log('Board is on the run');
    let { servo, camera } = require('./board/camera');

    io.on('connection', function(client) {
        servo.init(client)
    })
    
})