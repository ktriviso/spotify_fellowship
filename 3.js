const amount=4
const denominations=[1,2,3]

function makeChange(){
  const change = []
  let arr = []

  // Error handling: incase given array is not in accending order
  // denominations = denominations.sort(function(a, b){return a - b});

  for(var i = 1; i < amount; i++){
    for(var j = 0; j < 1; j++){
      arr.push(denominations[0])
    }

    // at this point, our array looks like this
    // [1]
    // [1, 1]
    // [1, 1, 1]

    // add each of those arrays to see what number we need to === amount
    let reduced = arr.reduce((a,b)=>{
      return a+b
    })

    let neededNum = amount - reduced
    change.push([...arr, neededNum])
  }

  // test if its simply evenly divisible by the number
  // [2, 2]
  denominations.forEach((elem)=>{
    if(elem * elem === amount){
      change.push([elem, elem])
    }
  })

  return change.sort(function (a, b) {
    return b.length - a.length;
  });
}
// makeChange()
// without the formatting, this returns the correct array of available options

// formats the makeChange() arrays so that they are strings the '¢'
function formatter(func){
  return func.forEach((arr) => {
    let formattedArray = arr.map((elem)=>
     elem + '¢'
   )
   console.log(formattedArray.join(', '))
  })
}

formatter(makeChange())
