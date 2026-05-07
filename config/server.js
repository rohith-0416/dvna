module.exports = {
    listen: process.env.APP_LISTEN || '0.0.0.0',
    port: parseInt(process.env.APP_PORT || process.env.PORT || '9090', 10)
}