'use strict';

const {
    run,
    series,
    parallel,
} = require('madrun');

module.exports = {
    "test": () => 'tape \'test/*.js\'',
    "watch:test": () => 'nodemon -w lib -w test -x "npm test"',
    "putout": () => "putout lib test",
    "fix:lint": () => run(['putout', 'lint:*'], '--fix'),
    "lint": () => run(['putout', 'lint:*']),
    "lint:lib": () => 'eslint lib test',
    "coverage": () => 'nyc npm test',
    "report": () => 'nyc report --reporter=text-lcov | coveralls || true',
    "build": () => 'buble lib -o legacy'
};

