describe("Fizzbuzz", function() {
  it("returns 1 when given 1", function() {
    expect(fizzBuzz(1)).toEqual(1)
  })

  it("return fizz when given a multiple of 3", function(){
    expect(fizzBuzz(3)).toEqual('fizz')
  })

  it("returns buzz when given a multiple of 5", function() {
    expect(fizzBuzz(5)).toEqual('buzz')
  })

  it("returns fizzbuzz when given a multiple of 15", function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz')
  })
})
