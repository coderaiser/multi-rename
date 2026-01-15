# Multi Rename [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMURL]: https://npmjs.org/package/multi-rename "npm"
[NPMIMGURL]: https://img.shields.io/npm/v/multi-rename.svg?style=flat&longCache=true
[BuildStatusURL]: https://github.com/coderaiser/multi-rename/actions?query=workflow%3A%22Node+CI%22 "Build Status"
[BuildStatusIMGURL]: https://github.com/coderaiser/multi-rename/workflows/Node%20CI/badge.svg
[CoverageURL]: https://coveralls.io/github/coderaiser/multi-rename?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/coderaiser/multi-rename/badge.svg?branch=master&service=github

Rename strings from an array according to pattern.

## Install

```
npm i multi-rename
```

## Usage

```js
import {multiRename} from 'multi-rename';

multiRename('[c] - [ymd] - [n][e]', ['hello.txt']);
// returns
'01 - 2019-04-15 - hello.txt';
```

## Patterns

- `[n]` - name
- `[e]` - extension
- `[c]` - counter
- `[ymd]` - year, month, date

## License

MIT
