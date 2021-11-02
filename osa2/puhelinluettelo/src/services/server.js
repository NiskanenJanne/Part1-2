import axios from "axios";
var serverurl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(serverurl)
}

const addNewPerson = newPersonObject => {
    return axios.post(serverurl, newPersonObject)
}

const removePerson = (id) => {
    return axios.delete(`${serverurl}/${id}`)
}

const update = (updatedPersonObject, person) => {
    console.log(updatedPersonObject)
    return axios.put(`${serverurl}/${person.id}`, updatedPersonObject)
}

export default {
    getAll: getAll,
    addNewPerson: addNewPerson,
    removePerson: removePerson,
    update: update
}