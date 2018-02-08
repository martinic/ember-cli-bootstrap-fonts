/* eslint-env node */
'use strict';

var path = require('path');
var stew = require('broccoli-stew');

module.exports = {
  name: 'ember-cli-bootstrap-fonts',

  treeForPublic: function() {
    return stew.mv(path.join(path.dirname(require.resolve('bootstrap')), '..' , 'fonts'), 'fonts');
  }
};
