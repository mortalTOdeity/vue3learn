// const el:HTMLElement = document.getElementById('why')


// 类型断言as
// const el = document.getElementById('why') as HTMLImageElement
// el.src = '../ss'

class Person {
  az() {
    console.log('az')
  }
}

class Student extends Person {
  studying() {
    console.log('I am studing')
  }
}

function sayHello(p: Person) {
  (p as Student).studying()
}


const stu = new Student()
// const per = new Person()
sayHello(stu)


const message = 'item'
// 不推荐
const num: number = message as unknown as number
