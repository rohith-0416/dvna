module.exports = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql'
}

if (!process.env.MYSQL_HOST) throw new Error('MYSQL_HOST environment variable is not set');
if (!process.env.MYSQL_PORT) process.env.MYSQL_PORT = 3306;
if (!process.env.MYSQL_USER) throw new Error('MYSQL_USER environment variable is not set');
if (!process.env.MYSQL_PASSWORD) throw new Error('MYSQL_PASSWORD environment variable is not set');
if (!process.env.MYSQL_DATABASE) throw new Error('MYSQL_DATABASE environment variable is not set');