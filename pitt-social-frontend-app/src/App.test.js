import React from 'react';
import ReactDOM from 'react-dom';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });


//here is a customized bind()
function myBind(o) {  
    var self = this;

    if (typeof o != 'object')
      throw 'must bind with an object';
  
    var curry_args = Array.prototype.slice.call(arguments, 1);
    return function(...new_args) {
        var args = curry_args.concat(Array.prototype.slice.call(new_args, 0));
        var call_obj = {};
        call_obj.__proto__ = o;
        call_obj['func'] = self;
        return call_obj.func(...args);
    }
}

it('2 + 2 = 5', () => {
  expect(Math.round(2.3 + 2.3)).toEqual(5);
});

function add (a, b) {
  return a + b + this.c;
}

var o = {c: 4};
add.bind = myBind;
var func = add.bind(o, 1);
console.log(func(10,2,3,34));



var oo = {'o': 1, 'f': f()}
f.call(oo)()
function f() {
  var o = 0;
  console.log(this)
  return () => console.log(this);
}
