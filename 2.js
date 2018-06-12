function decode(string) {
  function callback(match, p1, p2){
    // console.log("match: " + match)
    // console.log("numbers: " + p1)
    // console.log("substring: " + p2)
    return p2.repeat(p1)
  }

  while (string.includes("[")) {
    // Using parenthesized substring matches, numbers / strings
    string = string.replace(/(\d+)\[([a-z]*)\]/, callback)
  }

  return string
}

console.log(decode("4[ab]"))
console.log(decode("2[b3[a]]"))

// Note: while loop is only needed if you're testing for nested brackets
// the first time around it would only resolve the inner bracket
// ex: 2[baaa]

// ** specifiying a function as a parameter **
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
// ** parenthesized substring matches **
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_parenthesized_substring_matches
