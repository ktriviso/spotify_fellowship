function newString(s, t){
  let string = ''
  // loop through the string you're comparing against
  for(let i = 0; i < t.length; i++){
    // loop through the other string
    s.split('').forEach((letter) => {
      // compare the letters of both strings at each index
      if(t[i]  === letter){
        // save the letters as they match
        string += letter
      }
    })
  }
  return string
}
newString("weather", "therapyw")
newString("good", "odg")
