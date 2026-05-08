module.exports = {
    listen: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(process.env.APP_LISTEN) ? process.env.APP_LISTEN : '0.0.0.0',
    port: !isNaN(process.env.APP_PORT) ? parseInt(process.env.APP_PORT) : !isNaN(process.env.PORT) ? parseInt(process.env.PORT) : 9090
}