type IDType = number | string

// typeof 类型缩小
function printID(id: IDType) {
  // if () {} 类型保护
  if (typeof id === 'string') {
    console.log(id.toUpperCase)
  } else {
    console.log(id)
  }
}

// 平等类型缩小(== === !== !=)
type Direaction = "left" | "right" | "top" | "bottom"
function logDirection(direaction: Direaction) {
  console.log(direaction)
  if (direaction === "left") {
    console.log('zzzzzz')
  }
}

// instanceof

function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString)
  } else {
    console.log(time)
  }
}

class Student {
  study() {

  }
}

class Teacher {
  teaching() {

  }
}
function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.study()
  } else {
    p.teaching()
  }
}


// in
type Fish = {
  swimming: () => void
}
type Dog = {
  running: () => void
}

function move(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming()
  } else {
    animal.running()
  }
}

const fish: Fish = {
  swimming() {
    console.log('fffffff')
  }
}

move(fish)
