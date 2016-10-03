# ember-cli-[testdouble-chai][testdouble-chai]

[![Build Status](https://travis-ci.org/alexlafroscia/ember-cli-testdouble-chai.svg?branch=master)](https://travis-ci.org/alexlafroscia/ember-cli-testdouble-chai)

## Installation

```bash
ember install ember-cli-testdouble-chai
```

## Usage

See the [`testdouble-chai`][testdouble-chai] repo for all the details on how to use it.  However, the basics are:

```
var someFunction = td.function();

someFunction('foo');

expect(someFunction).to.be.called;
expect(someFunction).to.be.calledWith('foo');
```

[testdouble-chai]: https://github.com/BaseCase/testdouble-chai
