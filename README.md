# DEPRECATED

This repo has been replaced by [`ember-cli-chai`](https://github.com/ember-cli/ember-cli-chai), which now officially supports `testdouble-chai` (this repo pre-dates that one).

Switching is easy:

```bash
npm uninstall --save-dev ember-cli-testdouble-chai
ember install ember-cli-chai
npm install --save-dev testdouble-chai
```

That's it! Everything should work exactly as before.

***

# ember-cli-[testdouble-chai][testdouble-chai]

[![Build Status](https://travis-ci.org/alexlafroscia/ember-cli-testdouble-chai.svg?branch=master)](https://travis-ci.org/alexlafroscia/ember-cli-testdouble-chai)

Provides a way for Ember apps to use [`testdouble-chai`][testdouble-chai]. For use with the [`ember-cli-testdouble`][ember-cli-testdouble] addon, which is in turn a wrapper for [`testdouble.js`][testdouble].

## Installation

```bash
ember install ember-cli-testdouble-chai
```

## Usage

See the [`testdouble-chai`][testdouble-chai] repo for all the details on how to use it.  However, the basics are:

```javascript
var someFunction = td.function();

someFunction('foo');

expect(someFunction).to.be.called;
expect(someFunction).to.be.calledWith('foo');
```

[testdouble-chai]: https://github.com/BaseCase/testdouble-chai
[ember-cli-testdouble]: https://github.com/isleofcode/ember-cli-testdouble
[testdouble]: https://github.com/testdouble/testdouble.js
