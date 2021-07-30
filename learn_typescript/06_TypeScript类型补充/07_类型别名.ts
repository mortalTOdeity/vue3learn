type UnionType = string | number | boolean
type myType = {az: string, azz: number}

function logItem(item: UnionType) {
  console.log(item) 
}

function logObj(item: myType) {
  console.log(item.az)
  console.log(item.azz)
}

logItem(11)
logItem('asd')
logItem(true)

logObj({az: 'ads', azz: 222})