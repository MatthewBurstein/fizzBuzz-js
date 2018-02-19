function fizzBuzz (num) {
  var output = ''
  if (num % 3 === 0) {
    output += 'fizz'
  }
  if (num % 5 === 0) {
    output += 'buzz'
  }
  if (output !== '') {
    return output
  }
  return num
}

// for (num = 1; num <= 100; num++) {
//   console.log(fizzBuzz(num))
// }
// var num = 1
// while (num < 101) {
//   console.log(fizzBuzz(num))
//   num++
// }
array = [1..100]
for (num in array) {
  console.log(fizzBuzz(num))
}
