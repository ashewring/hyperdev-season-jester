'use strict';

var m = require('mithril')
var u = require('./utils')

/* From https://james-forbes.com/?/posts/how-i-use-mithril */

function Example() {

  var count = m.prop(0)
  var checked = m.prop(false)

  return function view(){
    return m('div', [
      m('input[type=number]', {
        onchange: m.withAttr('value', count)
      })
      ,m('p', 'The number is: '+ count() )
      ,m('input[type=checkbox]', {
        checked: checked()
        , onchange: m.withAttr('checked', checked)
      })
    ])
  }
}

console.log("Mounting example...")
m.mount(document.getElementById("example"), u.component(Example))
