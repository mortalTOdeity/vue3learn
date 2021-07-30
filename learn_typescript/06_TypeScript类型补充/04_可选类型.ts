// x pos  y pos  zpos(可选类型)
function printPoint(point: {x: number, y: number, z?:number}) {
  console.log(point.y)
  console.log(point.x)
}

printPoint({x: 123, y: 321})
printPoint({x: 123, y: 321, z: 111})
export {}