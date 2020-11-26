const { Client, DB } = require('./utils/index');
const client = new Client({ partials: ['MESSAGE', 'REACTION'] });
const db = global.db = new DB()

client.login()