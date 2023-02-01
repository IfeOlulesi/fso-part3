const moment = require('moment');

let persons = [
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

const getContactById = (req, res) => {
  const contact = persons.find(person => person.id === Number(req.params.id))
  if (contact === undefined) {
    res.statusMessage = "Contact not found"
    return res.status(404).end()
  }

  return res.json(contact)
}

const deleteContact = (req, res) => {
  const targetContactId = Number(req.params.id)
  const contact = persons.find(person => person.id === targetContactId)

  if (contact) {
    persons = persons.filter(contact => contact.id !== targetContactId)
    return res.status(200).end()
  } else {
    res.statusMessage = "Contact not found"
    return res.status(404).end()
  }
}

const addContact = (req, res) => {
  const contactInfo = req.body
  const ciKeys = Object.keys(contactInfo).sort()

  if (
    ciKeys.length > 1 &&
    ciKeys[0].toLowerCase() === "name" && ciKeys[1].toLowerCase() === "number"
  ) {

    const nameExists = persons.find(contact => contact.name === contactInfo.name)

    if (nameExists) {
      res.json({ error: "Name already exists" })
      return res.status(400).end()
    } else {
      const note = {
        id: Math.floor(Math.random(1, 100) * 100),
        name: contactInfo.name,
        number: contactInfo.number,
        dateAdded: moment().format('MMMM Do YYYY, h:mm:ss a')
      }
      persons.push(note)
      return res.status(200).end()
    }
  } else {
    res.json({error: "Must include name and number fields"})
    res.statusMessage = "Invalid request"
    return res.status(400).end()
  }
}

module.exports = {
  phonebookHome: phonebookHome,
  contactInfo: contactInfo,
  getAllContacts: getAllContacts,
  getContactById: getContactById,
  deleteContact: deleteContact,
  addContact: addContact,
}