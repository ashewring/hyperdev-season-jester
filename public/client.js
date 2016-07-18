var m = require('mithril')
var j2c = require('j2c')
var packagejson = require('../package.json')
var style = require('./style.css')
var sheet = j2c.sheet(style)

function Component(){
  return function(){
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

function component(){
  return { controller: Component, view: function(v){ return v() } }
}

m.mount(document.body, component(Component))