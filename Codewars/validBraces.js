function validBraces(braces) {
  const bracketMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const values = Object.values(bracketMap)
  const array = []

  for (let i in braces) {
    let current = braces[i]
    if (values.indexOf(current) > -1) array.push(current)
    else if (array[array.length - 1] === bracketMap[current]) array.pop()
    else return false
  }
  return array.length > 0 ? false : true
}

validBraces('[(])') // false
validBraces('(){}[]') // true
validBraces('([{}])') // true
validBraces('(}') //false
validBraces('[(])') // false
validBraces('[({})](]') // false
