function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number) {
  return fn(n1, n2)
}




const item: number = calc(20, 30, function(a1, a2) {
  return a1 + a2
})
console.log(item)
// calc(20, 30, mul)
// calc(20, 30, sub)