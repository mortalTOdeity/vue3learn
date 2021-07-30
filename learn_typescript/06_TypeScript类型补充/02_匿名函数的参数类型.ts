function foo(message: string) {
  return message
}

const names = ['aaa', 'vvv', 's', 22, 123]

// item 根据上下文环境推导出来，这个时候可以不添加类型注解
// 上下文中的函数，可以不添加类型注解
names.forEach((item) => {
  console.log(item)
})

