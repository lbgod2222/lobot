const five = require('johnny-five');
const Raspi = require('raspi-io');

const servo = {
    pin: new five.Pin({pin: 1, mode: 4}),
    instance: new five.Servo({pin: 1, startAt: 0}),
    init (client) {
        client.on('turnCamera', argv => {
            console.log('Camera turned');
            this.instance.to(argv)
        })
    }
}

const camera = {}

module.exports = {
    servo,
    camera
}