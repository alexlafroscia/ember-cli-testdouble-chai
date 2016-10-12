/* eslint-env node */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

var tdChaiDirectory = path.dirname(require.resolve('testdouble-chai'));

module.exports = {
  name: 'ember-cli-testdouble-chai',
  
  // Grab the testdouble-chai file and add it to the vendor tree
  treeForVendor(tree) {
    var trees = [];
    
    if (tree) {
      trees.push(tree)
    }
    
    var tdChaiTree = new Funnel(tdChaiDirectory)
    trees.push(tdChaiTree);
    
    return mergeTrees(trees);
  },
  
  // Import the testdouble-chai module from the vendor tree
  // NOTE: Only added to the test environment
  included(app) {
    var vendor = this.treePaths.vendor;
    
    app.import(vendor + '/testdouble-chai.js', {
      exports: ['default'],
      type: 'test'
    });
  }
};
