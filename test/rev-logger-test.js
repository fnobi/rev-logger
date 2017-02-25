const expect = require('chai').expect;

const RevLogger = require('../lib/RevLogger');

describe('rev-logger', () => {
    it('instance', () => {
        expect(new RevLogger());
    });
});
