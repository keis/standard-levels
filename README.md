# standard-levels

[![NPM Version][npm-image]](https://npmjs.org/package/standard-levels)
[![Build Status][travis-image]](https://travis-ci.org/keis/standard-levels)
[![Coverage Status][coveralls-image]](https://coveralls.io/r/keis/standard-levels?branch=master)

Definition of standard log levels.

## Levels

* CRITICAL - 50
* ERROR - 40
* WARNING - 30
* INFO - 20
* DEBUG - 10
* TRACE - 5

## setLevel

A simple function that can be attached to the prototype of any object you
want to be able to set a level on. If given a level name it will be
translated into it's numeric value before being set.

```javasript
function Logger() {}
Logger.prototype.setLevel = require('standard-levels').setLevel

var l = new Logger()
l.setLevel('INFO')
```

> Why don't you get on my level?

[npm-image]: https://img.shields.io/npm/v/standard-levels.svg?style=flat
[travis-image]: https://img.shields.io/travis/keis/standard-levels.svg?style=flat
[coveralls-image]: https://img.shields.io/coveralls/keis/standard-levels.svg?style=flat
