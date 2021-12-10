import React from "react"

const Numbers = (props) => {
    return(
        
            <ul>
                {props.persons.map(person =>
                    <li key={person.id}>
                        {person.name}
                        {" "}
                        {person.number}
                        {" "}
                        <button onClick={() => props.remove(person)}>delete</button>
                    </li>
                )}
            </ul>
       
    )
}

export default Numbers