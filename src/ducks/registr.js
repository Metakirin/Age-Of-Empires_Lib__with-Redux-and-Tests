export const initialRistrState = {
  flag: false,
}
export const registrReducer = (state = initialRistrState, action) => {
  switch (action.type) {
    case 'change':
      return {
        flag: true,
      }
    default: {
      return { ...state }
    }
  }
}
