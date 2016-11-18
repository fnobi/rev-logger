"use strict";

const optimist = require('optimist');
const colors = require('colors');

const RevLogger = require(__dirname + '/RevLogger');

(function () {
    const argv = optimist
            .boolean('h')
            .alias('h', 'help')
            .default('h', false)
            .describe('h', 'show this help.')

            .argv;

    if (argv.h) {
        optimist.showHelp();
        return;
    }

    const revLogger = new RevLogger();

    revLogger.on('end', () => {
        console.log('[done]'.green);
    });
    
    revLogger.on('error', (err) => {
        console.error('[error]'.red, err);
    });

    revLogger.start();
})();
