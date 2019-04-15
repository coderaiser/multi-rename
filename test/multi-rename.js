'use strict';

const test = require('supertape');
const tryCatch = require('try-catch');
const multiRename = require('../lib/multi-rename');
const mockRequire = require('mock-require');
const {reRequire} = mockRequire;

test('multi-rename: no args', (t) => {
    const [e] = tryCatch(multiRename);
    
    t.equal(e.message, 'pattern could not be empty!');
    t.end();
});

test('multi-rename: no names', (t) => {
    const [e] = tryCatch(multiRename, '[n][e]');
    
    t.equal(e.message, 'names should be an array!');
    t.end();
});

test('multi-rename: [n][e]', (t) => {
    const [name] = multiRename('[e].[n]', [
        'hello.txt',
    ]);
    
    t.equal(name, '.txt.hello');
    t.end();
});

test('multi-rename: [c]', (t) => {
    const [name] = multiRename('[c] - [n][e]', [
        'hello.txt',
    ]);
    
    t.equal(name, '1 - hello.txt');
    t.end();
});

test('multi-rename: [ymd]', (t) => {
    mockRequire('shortdate', () => '2019-04-15');
    const multiRename = reRequire('../lib/multi-rename');
    
    const [name] = multiRename('[ymd] - [n][e]', [
        'hello.txt',
    ]);
    
    mockRequire.stopAll();
    
    t.equal(name, '2019-04-15 - hello.txt');
    t.end();
});

test('multi-rename: not extension', (t) => {
    const [name] = multiRename('[n][e]', [
        'hello',
    ]);
    
    mockRequire.stopAll();
    
    t.equal(name, 'hello');
    t.end();
});

