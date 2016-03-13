"use strict";

const util = require('util');
const EventEmitter = require('events').EventEmitter;

class HinagataNodebin extends EventEmitter {
    constructor(opts) {
        super();
        opts = opts || {};
    }

    start() {
        this.emit('end');
    }
}

module.exports = HinagataNodebin;
