describe('setLevel', function() {
  var levels = require('../../lib/levels')

  function Target() {}
  Target.prototype.setLevel = levels.setLevel

  it('updates the level of the object', function() {
    var target = new Target()
    target.setLevel(20)
    assert.equal(target.level, 20)
  })

  it('updates the level of the object from symbolic name', function() {
    var target = new Target()
    target.setLevel('DEBUG')
    assert.equal(target.level, 10)
  })
})
