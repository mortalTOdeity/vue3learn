type Person = {
  name: string
  friend?: {
    name: string
    age?: number
  }
}

const info: Person = {
  name: 'chen',
  // friend: {
  //   name: 'chen2'
  // }
}

console.log(info.friend?.name)
