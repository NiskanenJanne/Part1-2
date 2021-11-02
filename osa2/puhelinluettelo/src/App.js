import React, { useState, useEffect } from 'react'
import Forms from './components/forms'
import Numbers from './components/numbers'
import server from './services/server'

const App = () => {
  const [ persons, setPersons] = useState([]) 

  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewnumber] = useState('')

  const [errorMessage, setErrorMessage] = useState('')


  useEffect(() => {
    server
      .getAll()
      .then(response => {
        setPersons(response.data)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    var count = 0
    for (var i = 0; i < persons.length; i++){
      if (newName === persons[i].name){
        console.log(persons[i], +  "test")
        if(window.confirm(newName + " is already added to phonebook, update the number?")){
          server
            .update(newPerson, persons[i])
            .then(persons.filter(person => person.id === persons.id))
            setErrorMessage(
              `${newPerson.name}s number was changed`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)  
            setNewName('')
            setNewnumber('') 

              
        }
        else{
          setNewName('')
          setNewnumber('') 
        }
      }
      else {
        count++
        console.log(count)
      }
    }
    console.log(count, persons.length)
    if (count === persons.length){
      server
        .addNewPerson(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setErrorMessage(
            `${newPerson.name} was added to server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)  
          setNewnumber('')   
          setNewName('')   
      })
    }
  }

  const remove = ({name, id}) => {
    if (window.confirm(`delete ${name}?`)){
      server
        .removePerson(id) 
        .then(setPersons(persons.filter(person => person.id !== id))
        ) 
        setErrorMessage(
          `${name} was deleted from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)    
      }
  }
  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event2) => {
    console.log(event2.target.value)
    setNewnumber(event2.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      <br></br>
      <Forms newName={newName} 
      handleNoteChange={handleNoteChange} 
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
      addPerson={addPerson}/>

      <h2>Numbers</h2>

      <Numbers persons={persons}
      remove={remove}/>
    </div>
  )
}

export default App