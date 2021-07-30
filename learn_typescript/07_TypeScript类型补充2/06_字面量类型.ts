type Alignment = 'left' | 'right' | 'center'

let message: string = 'asd'
// 字符串作为类型 叫做字面量类型
const msg = 'asdasdas'
// 字面量类型和值必须相等
// const num: 123 = 321

// 字面量类型的意义 -- 必须结合联合类型
let align: Alignment = 'left'
align = 'right'
align = 'center'


