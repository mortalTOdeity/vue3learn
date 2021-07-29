function foo(): never {
  while(true) {

  }
}

// function bar(): never {
//   throw new Error()
// }

function handleMessage(message: string | number) {
  switch(typeof message) {
    case 'string':
      console.log('string处理方式处理message')
      break
    case 'number':
      console.log('number方式处理message')
      break
    default:
      const check: never = message
  }
}
handleMessage('abc')
handleMessage(123)