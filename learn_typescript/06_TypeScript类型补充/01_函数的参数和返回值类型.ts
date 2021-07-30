// 给参数加上类型注解
// 可以给返回值加类型注解 (): number
// 在开发中通常不写返回值类型,会自动推导
function sum(n1: number, n2: number): number {
  return n1 + n2
}

// sum(123)