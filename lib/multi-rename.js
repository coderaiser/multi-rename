'use strict';

const shortdate = require('shortdate');

module.exports = (pattern, names) => {
    check(pattern, names);
    
    return names.map(parse(pattern));
};

const parse = (pattern) => (full, i) => {
    const [name, ext] = splitName(full);
    const date = shortdate(new Date(), {
        sep: '-',
    });
    
    return pattern
        .replace('[n]', name)
        .replace('[e]', ext)
        .replace('[c]', i + 1)
        .replace('[ymd]', date);
};

function splitName(str) {
    const index = str.lastIndexOf('.');
    
    if (!~index)
        return [
            str,
            '',
        ];
    
    return [
        str.substr(0, index),
        str.substr(index),
    ];
}

function check(pattern, names) {
    if (!pattern)
        throw Error('pattern could not be empty!');
    
    if (!Array.isArray(names))
        throw Error('names should be an array!');
}

