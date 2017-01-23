let assert = require('assert')
let romanify = require('../js/roman')

//========================================================================
// make a converter to turn numbers into Roman numerals
// like 1 => "I"
// 2 => "II"
// 3 => "III"
// 4 => "IV"
// 5 => "V"
// looks like my inputs are always one number at a time
// and the output is a string
// homework assignment - go up to 2017
//=========================================================================

describe('Roman numeral converter', function () {
  it('converts 1 to I', function () {
    let result = romanify(1)
    assert.equal(result, "I")
  })
  it('converts 2 to II', function () {
    let result = romanify(2)
    assert.equal(result, "II")
  })
  it('converts  to III', function () {
    let result = romanify(3)
    assert.equal(result, "III")
  })
  it('converts  to IV', function () {
    let result = romanify(4)
    assert.equal(result, "IV")
  })
  it('converts  to V', function () {
    let result = romanify(5)
    assert.equal(result, "V")
  })
  it('converts  to XCVI', function () {
    let result = romanify(96)
    assert.equal(result, "XCVI")
  })
  it('converts  to MMXVII', function () {
    let result = romanify(2017)
    assert.equal(result, "MMXVII")
  })
  describe('when input is a string', function () {
    it('converts "1" to "I"', function () {
      let result = romanify("1")
      assert.equal(result, "I")
    })
  })
})

//============================================================================
// write some tests first, and then write the least amount of code to pass the tests, and write more tests that
// fail until you build the cleanest code possible
