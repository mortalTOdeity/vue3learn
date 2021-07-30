// hook: useState
type func = () => void

const myfunc: func = () => {
  console.log('asasd')
}

function useState<T>(state: T) {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  const tuple: [T, (newState: T) => void] = [currentState, changeState]
  return tuple
}


const [counter, setCounter] = useState(10)
setCounter(1000)

const [title, setTitle] = useState('item')

const [flag, setFlag] = useState(true)