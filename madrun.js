'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'tape \'test/*.js\'',
    'watch:test': () => 'nodemon -w lib -w test -x "npm test"',
    'fix:lint': () => run('putout', '--fix'),
    'lint': () => 'putout lib test madrun.js',
    'coverage': () => 'nyc npm test',
    'report': () => 'nyc report --reporter=text-lcov | coveralls || true',
};

