import React, {useState} from 'react'

const Statistics = (props) => {
  const all = () => props.good + props.neutral + props.bad
  console.log(all())
  const average = () => (1 * props.good + 0 * props.neutral + (-1) * props.bad) / all()
  console.log(average())
  const pos = () => props.good / all()
  console.log(pos())
  if (props.good, props.neutral, props.bad === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <>good {props.good}<br/></>
      <>neutral {props.neutral}<br/></>
      <>bad {props.bad}<br/></>
      <>all {all()}<br/></>
      <>average {average()}<br/></>
      <>pos {pos()}</>
    </div>
  )
}




const App = () => {
  const Header = "Give feedback"
  const statistics = "statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <div>
      <h1>{Header}</h1>

        <button onClick={()=> setGood(good + 1)}>
          good
        </button>
        <button onClick={()=> setNeutral(neutral + 1)}>
          neutral
        </button>
        <button onClick={()=> setBad(bad + 1)}>
          bad
        </button>

      <h1>{statistics}</h1>

      <div>
        <Statistics good={good}
        neutral={neutral}
        bad={bad}/>
      </div>
    </div>
  )
}




export default App;
