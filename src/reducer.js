const initialState = {
  counter: 0,
  clicks: 0,
  username: 'Mi',
  updateAt: String(new Date())
}



const reducer = (state =  initialState, {type, payload}) => {

  let { counter, clicks } = state

  switch(type) {
    case 'INC':
      return {...state, counter: counter + 1, clicks: clicks + 1}
    case 'DEC':
      return {...state, counter: counter - 1, clicks: clicks + 1}
    case 'RND':
      return {...state, counter: counter + payload, clicks: clicks + 1}
    default:
      return state
  }
  
}

export default reducer