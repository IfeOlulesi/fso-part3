const moment = require('moment');

const persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]


const phonebookHome = (req, res) => {
  res.send('<h1>Phonebook Home</h1>')
}

const contactInfo = (req, res) => {
  const totalContacts = persons.length
  const timeOfRequest = moment().format('MMMM Do YYYY, h:mm:ss a')

  const msg1 = `<p> Phonebook has info for ${totalContacts} people </p>`
  const msg2 = `<p> ${timeOfRequest} </p>`

  res.send(msg1 + msg2)
}

const getAllContacts = (req, res) => {
  res.json(persons)
}

module.exports = {
  phonebookHome: phonebookHome,
  contactInfo: contactInfo,
  getAllContacts: getAllContacts,
}