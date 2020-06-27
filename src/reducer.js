const initialState = {
  counter: 0,
  clicks: 0,
  username: 'Mi',
  updateAt: String(new Date())
}



const reducer = (state =  initialState, {type, payload}) => {

  switch(type) {
    case 'INC':
      return {...state, counter: state.counter + 1, clicks: state.clicks + 1}
    case 'DEC':
      return {...state, counter: state.counter - 1, clicks: state.clicks + 1}
    case 'RND':
      return {...state, counter: state.counter + payload, clicks: state.clicks + 1}
    default:
      return state
  }
  
}

export default reducer