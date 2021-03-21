import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingData } from './store/actions/action'
import Card from './components/Card'

function App () {
  const [isSortingGoal, setIsSortingGoal] = useState(false)
  const [isSortingDay, setIsSortingDay] = useState(false)
  const { data, dataSortingbyGoal, dataSortingbyDay, loading } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchingData())
  }, [])

  const sortingHandleGoal = () => {
    setIsSortingGoal(!isSortingGoal)
    setIsSortingDay(false)
  }

  const sortingHandleDay = () => {
    setIsSortingDay(!isSortingDay)
    setIsSortingGoal(false)
  }

  if (loading) return <h5 style={{margin: '100px auto', textAlign: "center"}}>Loading . .</h5>
  return (
    <div className="containers">
      <div className="headers">
        <div id="logo">
          <img src="https://assets.kitabisa.cc/images/logos/logogram__ktbs_white.png" alt="Kitabisalogo"/>
          <h2 style={{display: "inline-block", marginLeft: 10, color: "rgb(0, 174, 239)"}}>Kitabisa</h2>
        </div>
        <div>
          <button onClick={sortingHandleGoal} type="button" className="sort-button">
            <img src="https://assets.kitabisa.cc/images/icons/icon_sort.svg" alt="sort"/>
            <p style={{display: "inline-block", margin: 0}}>Sorting by Donation Goal {isSortingGoal && <span>✓</span>} </p>
          </button>
          <button onClick={sortingHandleDay} type="button" className="sort-button">
            <img src="https://assets.kitabisa.cc/images/icons/icon_sort.svg" alt="sort"/>
            <p style={{display: "inline-block", margin: 0}}>Sorting by Day Left { isSortingDay && <span>✓</span>} </p>
          </button>
        </div>
      </div>
      <div className="contents">
        <div className="row gy-4">
          { !isSortingGoal && !isSortingDay  &&
            data.map(datacampaign => {
              return <Card key={datacampaign.id} datacampaign={datacampaign}/>
            })
          }
          { isSortingGoal &&
            dataSortingbyGoal.map(datacampaign => {
              return <Card key={datacampaign.id} datacampaign={datacampaign}/>
            })
          }
          { isSortingDay &&
            dataSortingbyDay.map(datacampaign => {
              return <Card key={datacampaign.id} datacampaign={datacampaign}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App
