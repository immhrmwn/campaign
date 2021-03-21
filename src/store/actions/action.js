import axios from 'axios'

export const loading = () => {
  return({ type: 'LOADING' })
}

export const fetchingData = () => {
  return dispatch => {
    dispatch(loading())
    axios({
      method: 'GET',
      url: 'http://localhost:3000/data'
    })
      .then(({ data }) => {
        dispatch({
          type: 'FETCH_DATA',
          payload: data
        })
        const datasortingByGoal = [...data].sort(compareByGoal)
        const datasortingByDay = [...data].sort(compareByDay)
        dispatch({
          type: 'FETCH_DATA_SORTING_BY_GOAL',
          payload: datasortingByGoal
        })
        dispatch({
          type: 'FETCH_DATA_SORTING_BY_DAY',
          payload: datasortingByDay
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

function compareByGoal (a, b) {
  if (a.donation_percentage < b.donation_percentage) {
    return -1
  }
  if (a.donation_percentage > b.donation_percentage) {
    return 1
  }
  return 0
}

function compareByDay (a, b) {
  if (a.days_remaining < b.days_remaining) {
    return -1
  }
  if (a.days_remaining > b.days_remaining) {
    return 1
  }
  return 0
}
