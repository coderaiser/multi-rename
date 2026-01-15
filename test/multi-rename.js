import {test, stub} from 'supertape';
import {tryCatch} from 'try-catch';
import {multiRename} from '../lib/multi-rename.js';

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
    const [name] = multiRename('[e].[n]', ['hello.txt']);
    
    t.equal(name, '.txt.hello');
    t.end();
});

test('multi-rename: [c]', (t) => {
    const [name] = multiRename('[c] - [n][e]', ['hello.txt']);
    
    t.equal(name, '1 - hello.txt');
    t.end();
});

test('multi-rename: [ymd]', (t) => {
    const shortdate = stub().returns('2019-04-15');
    
    const [name] = multiRename('[ymd] - [n][e]', ['hello.txt'], {
        shortdate,
    });
    
    t.equal(name, '2019-04-15 - hello.txt');
    t.end();
});

test('multi-rename: not extension', (t) => {
    const [name] = multiRename('[n][e]', ['hello']);
    
    t.equal(name, 'hello');
    t.end();
});
