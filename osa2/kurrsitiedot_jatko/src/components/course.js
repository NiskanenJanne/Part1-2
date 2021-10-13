import React from "react"

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    var exercises = course.parts.map(part => part.exercises)
    const reducer = (x, y) => x + y;
    var sum = exercises.reduce(reducer)
    return(
      <p>Number of exercises {sum}</p>
    ) 
  }
  
  
  
  const Content = (props) => {
    const {course} = props
    console.log(course)
    
    return (
      <div>
        <ul>
          {course.parts.map(part =>
          <li key={part.id}>
                {part.name}
                {" "}
                {part.exercises}
              </li>
          )}
        </ul>
      </div>
    )
  }
  
  const Course = ({course}) => {
    console.log(course)
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }

  export default Course