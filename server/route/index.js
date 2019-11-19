const Route = require('koa-router');

const route = new Route()

const userRoute = function(app) {
    app.use(route.routes())
}

module.exports = userRoute