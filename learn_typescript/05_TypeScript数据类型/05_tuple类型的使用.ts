// tuple 元组：多种元素的组合


// 1.数组的弊端
const info1: any[] = [1, 2, 3, 's', {}]

const name = info1[0]


// 2.元组的特点
const info2: [string, number, number, object] = ['item', 1, 3, {name: 123}]

const theItem = info2[0]

export {}