const log4js = require('log4js')

log4js.configure({
    appenders: {
        console: {
            type: 'console'
        },
        log: {
            type: "dateFile",
            filename: './logFile/logs',
            pattern: "yyyy-MM-dd.log",
            alwaysIncludePattern: true
        },
        error: {
            type: "dateFile",
            filename: './logFile/error',
            pattern: "yyyy-MM-dd_error.log",
            alwaysIncludePattern: true
        },
        errorFilter: {
            type: "logLevelFilter",
            appender: "error",
            level: "error"
        },
    },
    categories: {
        default: {appenders: ['console', 'log', 'errorFilter'], level: 'debug'}
    },
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID'
})

module.exports = log4js.getLogger('lobot')