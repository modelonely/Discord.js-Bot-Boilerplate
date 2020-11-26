const JSONdb = require('simple-json-db');

module.exports = class DB extends JSONdb {
    constructor(file = "db") {
        super(`./db/${file}.json`);
        this.file = file;
    }

    set(key, value) {
        return super.set(key, value);
    }

    get(key) {
        return super.get(key);
    }
    
    has(key) {
        return super.has(key) ? true : false;
    }

    delete(key) {
        return super.delete(key) ? true : false;
    }

    all() {
        return this.storage;
    }
}