const initialState = {
    Africa: false,
    America: false,
    Asia: false,
    Europe: false,
    Oceania: false
}

const countryBoundaries = (state = initialState, action) => {
    switch (action.type) {
        case 'AFRICA':
            return {...state,
                Africa: true,
                America: false,
                Asia: false,
                Europe: false,
                Oceania: false
            }
        case 'AMERICA':
            return {...state,
                    Africa: false,
                    America: true,
                    Asia: false,
                    Europe: false,
                    Oceania: false
                }
        case 'ASIA':
            return {...state,
                    Africa: false,
                    America: false,
                    Asia: true,
                    Europe: false,
                    Oceania: false
                }
        case 'EUROPE':
            return {...state,
                    Africa: false,
                    America: false,
                    Asia: false,
                    Europe: true,
                    Oceania: false
                }
        case 'OCEANIA':
            return {...state,
                    Africa: false,
                    America: false,
                    Asia: false,
                    Europe: false,
                    Oceania: true
                }
        default:
            return state
    }
  }
  
  export default countryBoundaries;
  