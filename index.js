const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = ()=>{ 
  return tutorials.map( str => {
  let arry = str.split(' ')
 let string = arry.map( word =>{
     return word[0].toUpperCase() + word.slice(1)
    })

  let result = string.join(" ")
  return result
  }
)
console.log('andArry', endArry)
}












//const splitArryThree = tutorials.map( arry => arry.slice(0,1).toUpperCase())
// returns (10) ["W", "W", "I", "T", "W", "W", "I", "W", "W", "W"]

//const addMaps = tutorials.map( arry => splitArryThree + arry.slice(1))
