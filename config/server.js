module.exports = {
    listen: (process.env.APP_LISTEN || '0.0.0.0').match(/^(\d{1,3}\.){3}\d{1,3}$/) ? process.env.APP_LISTEN : '0.0.0.0',
    port: process.env.APP_PORT || process.env.PORT || 9090
}