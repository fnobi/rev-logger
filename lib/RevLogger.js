const path = require('path');
const execSync = require('child_process').execSync;

class RevLogger {
    constructor (files = {}) {
        this.files = files;
    }
    
    versions () {
        const data = {};
        Object.keys(this.files).forEach((key) => {
            data[key] = this.version(key);
        });
        return data;
    }

    version (key) {
        const filePath = this.files[key];
        const dirName = path.dirname(filePath);
        const baseName = path.basename(filePath);
        const log = execSync(
            `cd ${dirName} && git log --oneline ${baseName} | wc -l`
        ).toString();
        const diff = execSync(
            `cd ${dirName} && git diff HEAD --name-only ${baseName} | wc -l`
        ).toString();
        return (parseInt(log) || 1) + parseInt(diff);
    }

    values () {
        return Object.keys(this.files).map((key) => {
            return this.files[key];
        });
    }
};

module.exports = RevLogger;
