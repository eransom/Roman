
// when digits is 5, there are (5 - 5) 0 I's
// when digits is 6, there is (6 - 5) 1 I
// when digits is 7, there are (7 - 5) 2 I's

//==============================================================================

function romanify (digits) {
  //the following code works...when digits is 1,2,or 3
  if (digits <= 3) {
    let numbers = new Array(digits)
    return numbers.fill("I").join('')
  } else if (digits == 4) {
      return "IV"
  } else if (digits <= 8){
      return `V${romanify(digits -5)}`
  } else if (digits == 9) {
      return "IX"
  }
  let patterns = [
    {max: 39, prefix: 'X', pEq: 10},
    {max: 49, prefix: 'XL', pEq: 40},
    {max: 89, prefix: 'L', pEq: 50},
    {max: 99, prefix: 'XC', pEq: 90},
    {max: 399, prefix: 'C', pEq: 100},
    {max: 499, prefix: 'CD', pEq: 400},
    {max: 899, prefix: 'D', pEq: 500},
    {max: 999, prefix: 'CM', pEq: 900}
  ]

  var value

  for (let pattern of patterns) {
    if(digits <= pattern.max) {
      value = `${pattern.prefix}${romanify(digits - pattern.pEq)}`
      break
    }
  }
    return value || `M${romanify(digits - 1000)}`
}

module.exports = romanify

//=====================================================Uncondensed CODE=========

  // else if (digits <= 39 ) {
  //     return `X${romanify(digits - 10)}`
  // } else if (digits <= 49) {
  //     return `XL${romanify(digits - 40)}`
  // } else if (digits <= 89) {
  //     return `L${romanify(digits - 50)}`
  // } else if (digits <= 99) {
  //     return `XC${romanify(digits - 90)}`
  // } else if (digits <= 399) {
  //     return `C${romanify(digits - 100)}`
  // } else if (digits <= 499) {
  //     return `CD${romanify(digits - 400)}`
  // } else if (digits <= 899) {
  //     return `D${romanify(digits - 500)}`
  // } else if (digits <= 999) {
  //     return `CM${romanify(digits - 900)}`
  // }


  //   else if (digits == 4) {
  //       return "IV"
  //   } else if (digits == 5) {
  //       return "V"
  //   } else if (digits == 6) {
  //       return "VI"
  //   } else if (digits == 7) {
  //       return "VII"
  //   }
  // }
