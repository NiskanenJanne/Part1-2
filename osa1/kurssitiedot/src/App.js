import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [ 
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>

      <Header course={course.name}/>
      <Content parts ={course.parts}/>
      <Total parts ={course.parts}/>
      
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <>Header: {props.course} <br/><br/></>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <>Part: {props.parts[0].name} Exercises: {props.parts[0].exercises} <br/></>
      <>Part: {props.parts[1].name} Exercises: {props.parts[1].exercises} <br/></>
      <>Part: {props.parts[2].name} Exercises: {props.parts[2].exercises} <br/><br/></>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <>Total: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </>
    </div>
  )
}

export default App;