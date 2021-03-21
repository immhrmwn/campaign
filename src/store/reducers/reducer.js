const initialize = {
  data: [],
  dataSortingbyGoal: [],
  dataSortingbyDay: [],
  loading: false
}

const reducer = (state = initialize, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case 'FETCH_DATA_SORTING_BY_GOAL':
      return {
        ...state,
        dataSortingbyGoal: action.payload,
        loading: false
      }
    case 'FETCH_DATA_SORTING_BY_DAY':
      return {
        ...state,
        dataSortingbyDay: action.payload,
        loading: false
      }
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default reducer