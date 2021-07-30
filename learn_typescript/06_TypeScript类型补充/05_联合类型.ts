// 我们联合！
function printID(id: number | string | boolean) {
  // console.log(id.toUpperCase());
  if (typeof id === 'string') {
    console.log(id.toLowerCase())
  } else {
    console.log(id)
  } 
}
printID('aass')
printID(123)
printID('adsSDFA')
