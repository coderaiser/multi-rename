# Multi Rename [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]:                https://img.shields.io/npm/v/multi-rename.svg?style=flat&longCache=true
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/multi-rename/master.svg?style=flat&longCache=true
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/multi-rename.svg?style=flat&longCache=true
[NPMURL]:                   https://npmjs.org/package/multi-rename "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/multi-rename  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/multi-rename "Dependency Status"

[CoverageURL]:              https://coveralls.io/github/coderaiser/multi-rename?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/multi-rename/badge.svg?branch=master&service=github

Rename strings from an array according to pattern.

## Install

```
npm i multi-rename
```

## Usage

```js
const multiRename = require('multi-rename');

multiRename('[c] - [ymd] - [n][e]', [
    'hello.txt',
]);
// returns

'01 - 2019-04-15 - hello.txt'
```

## Patterns

- `[n]` - name
- `[e]` - extension
- `[c]` - counter
- `[ymd]` - year, month, date

## License

MIT

