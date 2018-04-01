const initialState = {
  url: null
}

export default function reducer(state = initialState, action) {

  const { type, payload } = action

  switch (type) {
    case 'DOG_PIC':
      return { ...state, url: payload.url }
    default:
      return state;
  }
}