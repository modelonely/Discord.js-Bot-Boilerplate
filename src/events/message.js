module.exports = class Message {
    constructor (client) {
        this.client = client;
        this.name = 'message';
    }

    async run(message) {
        console.log(message)
    }
};