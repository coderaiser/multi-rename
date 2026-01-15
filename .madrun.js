import {run} from 'madrun';

export default {
    'test': () => `tape 'test/*.js'`,
    'watch:test': () => 'nodemon -w lib -w test -x "npm test"',
    'fix:lint': () => run('lint', '--fix'),
    'lint': () => 'putout .',
    'coverage': () => 'c8 npm test',
    'report': () => 'c8 report --reporter=lcov',
};
