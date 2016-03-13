"use strict";

const optimist = require('optimist');
const colors = require('colors');

const HinagataNodebin = require(__dirname + '/HinagataNodebin');

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

    const hinagataNodebin = new HinagataNodebin();

    hinagataNodebin.on('end', () => {
        console.log('[done]'.green);
    });
    
    hinagataNodebin.on('error', (err) => {
        console.error('[error]'.red, err);
    });

    hinagataNodebin.start();
})();
