const info = {
  name: 'why',
  age: 18
}

info.name = 'kobe'

type Method = 'GET' | 'POST'
type Request = {
  url: string,
  method: Method
}

function request(url: string, method: Method) {
  return 'ss'
}
const options: Request = {
  url: 'https://www.baidu.com',
  method: 'POST'
}

request(options.url, options.method)

export {}