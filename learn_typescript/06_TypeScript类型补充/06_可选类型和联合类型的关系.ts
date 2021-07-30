// 让一个参数本身是可选的
// 一个参数是一个可选类型的时候，本质上表示的是这个参数是和undefind的联合类型
function foo(msg?: string) {
  console.log(msg)
}
function foo1(msg: string | undefined) {
  console.log(msg)
}

foo()
foo(undefined)
foo1(undefined)
