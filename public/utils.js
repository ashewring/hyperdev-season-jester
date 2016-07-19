'use strict';

module.exports = {

  component: function(c) {
    return {
      controller: c,
      view: function(v) {
        return v()
      }
    }
  }
};
