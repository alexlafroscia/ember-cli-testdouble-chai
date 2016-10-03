/* eslint-env node */

module.exports = {
  description: 'ember-cli-testdouble-chai installation blueprint',
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return this.addBowerPackageToProject('testdouble-chai', 'alexlafroscia/testdouble-chai#support-amd-modules');
  }
};
