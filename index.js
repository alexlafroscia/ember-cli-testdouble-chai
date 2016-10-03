/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-testdouble-chai',

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import(app.bowerDirectory + '/testdouble-chai/lib/testdouble-chai.js', {
      exports: {
        'testdouble-chai': ['default']
      }
    });
  }
};
