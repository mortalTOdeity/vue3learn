function foo() {
  return 'abc'
}
function bar() {
  return 123
}

let flag = true
let result: unknown
// unknown类型 只能赋值给any 和 unknown 类型
// any 可赋值给任意类型
if (flag) {
  result = foo()
} else {
  result = bar()
}

let chan3: string = result