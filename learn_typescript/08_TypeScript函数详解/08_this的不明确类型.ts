type ThisTyope = {name: string}

function eating(this: ThisTyope) {
  console.log(this.name + ' eating')
}


const info = {
  name: 'why',
  eating: eating
}

info.eating()
// eating()
eating.call({name: 'chen'})
eating.apply({name: 'den'}, ['adasd'])

export {}