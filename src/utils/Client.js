const { Client, Collection } = require("discord.js");
const Config = require('./Config');
const fs = require("fs");

module.exports = class client extends Client {
    constructor(options = {}) {
        super(options);

        this.events = new Collection();
        this.config = Config;
    }

    async loadEvents() {
        const files = await fs.readdirSync('./events');
        files.map(file => {
            let event = require(`../events/${file}`); event = new event(this);
            let name = event.name ? event.name : file.split('.')[0];
            super.on(name, event.run.bind(event));
            this.addEvent(event, name);
            delete require.cache[require.resolve(`../events/${file}`)]
        })
    }

    async init() {
        this.loadEvents();
    }

    addEvent(event, eventName) {
        this.events.set(event, eventName);
    }
    
    async login() {
        await this.init();
        super.login(Config.token).catch(console.error)
    }
}