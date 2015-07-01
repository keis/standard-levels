var test = require('tape')
  , levels = require('../../lib/levels')

function Target() {}
Target.prototype.setLevel = levels.setLevel

test('setLevel updates the level of the object', function(t) {
  t.plan(1)
  var target = new Target()
  target.setLevel(20)
  t.equal(target.level, 20)
})

test('setLevel updates the level of the object from symbolic name', function(t) {
  t.plan(1)
  var target = new Target()
  target.setLevel('DEBUG')
  t.equal(target.level, 10)
})
