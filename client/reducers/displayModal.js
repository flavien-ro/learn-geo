const initialState = {
    isVisible: false,
    countryInfo: {},
}

const displayModal = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY':
            return {...state,
                isVisible: true,
                countryInfo: action.payload
            }
        case 'HIDE':
            return {...state,
                isVisible: false,
                countryInfo: action.payload
            }
        default:
            return state
    }
  }
  
  export default displayModal;
  