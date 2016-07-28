// TODO create index page with login button and header

var m = require('mithril')
var u = require('./utils')
var header = require('./header')

function Index() {

  return function view(){
    return m(header, {
      left: m('.toolbox', [
        m('.fa.fa-gears', { onclick: function() { alert("clicked left"); } }),
        m('span', 'Left span')
      ]),
      right: m('.toolbox', [
        m('.fa.fa-gears', { onclick: function() { alert("clicked right"); } }),
        m('span', 'Right span')
      ]),
      headerText: 'Hello'
    })
  }
}

console.log("Mounting index component...")
m.mount(document.getElementById("index"), u.component(Index))
