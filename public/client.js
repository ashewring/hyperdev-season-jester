'use strict';

var m = require('mithril')
var packagejson = require('../package.json')

/* CSS modules support ("local" CSS) */
var j2c = require('j2c')
var style = require('./style.css')
var sheet = j2c.sheet(style)

/* See https://james-forbes.com/?/posts/how-i-use-mithril */

function Component() {
  return function() {
    return m('div.'+sheet.module, [
      m('style', sheet)
      ,m('h1', 'Browserify Middleware + CSS modules + j2c + Mithril Hyperdev template')

      ,m('p', 'Just Remix '
      ,m('a', { href: 'https://hyperdev.com/#!/project/season-jester' }, 'this project')
      ,' to start your project')
      ,m('p', 'Add dependencies to package.json and then require them client side.')

      ,m('p','Here is the current parsed style.css')
      ,m('pre', JSON.stringify(style, null, 2))
      ,m('p','Here is the current package.json')
      ,m('pre', JSON.stringify(packagejson, null, 2))

    ])
  }
}

function component(c) {
  return {
    controller: c,
    view: function(v) {
      return v()
    }
  }
}

console.log("Mounting component...")
m.mount(document.getElementById("component"), component(Component))
