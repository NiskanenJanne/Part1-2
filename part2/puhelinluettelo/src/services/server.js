import axios from "axios";
var serverurl = '/api/persons'

const getAll = () => {
    return axios.get(serverurl)
}

const addNewPerson = newPersonObject => {
    console.log("toimiiko tämä")
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