'use strict';

var m = require('mithril')

module.exports = {

  view: function(ctrl, options /* {left, headerText, right} */) {
    return m('my-header', [
      options.left,
      m('h3', options.headerText),
      options.right
    ]);
  }
};
