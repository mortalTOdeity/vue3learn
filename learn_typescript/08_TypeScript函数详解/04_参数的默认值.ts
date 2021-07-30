// 必传参数--有默认值参数--可选参数

function foo (x: number, y: number = 100) {

}
function foo1 (x: number = 20, y: number) {

}

foo(20, 30)
foo1(undefined, 30)