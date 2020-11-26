const Config = require('../utils/Config');

module.exports = class Ready {
    constructor (client) {
        this.client = client;
        this.name = 'ready';
    }

    async run() {
        this.client.user.setActivity(Config.status, { type: 'WATCHING' })
        console.log(`Bot active! ${this.client.guilds.cache.size} server, ${this.client.users.cache.size} user!`);
    }
};