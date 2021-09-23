import React, {useState} from 'react'

const Statistics = (props) => {
  const all = () => props.good + props.neutral + props.bad
  console.log(all())
  const average = () => (1 * props.good + 0 * props.neutral + (-1) * props.bad) / all()
  console.log(average())
  const pos = () => props.good / all()
  console.log(pos())
  if (props.good === 0){
    if (props.neutral === 0){
      if (props.bad === 0){
        return(
          <div>
            No feedback given
          </div>
        )
      }
    }
  }

  return(
    <div>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={all()}/>
      <StatisticLine text="average" value={average()}/>
      <StatisticLine text="pos" value={pos()}/>
      
    </div>
  )
}

const StatisticLine = (props) => {
  return(
    <>{props.text} {props.value}<br/></>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.state}>{props.text}</button>
  )
}

const App = () => {
  const Header = "Give feedback"
  const statistics = "statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodPlus = () => setGood(good + 1)
  const neutralPlus = () => setNeutral(neutral + 1)
  const badPlus = () => setBad(bad + 1)

  return(
    <div>
      <h1>{Header}</h1>
        <Button state = {goodPlus} text="good" />
        <Button state = {neutralPlus} text="neutral" />
        <Button state = {badPlus} text="bad" />
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
