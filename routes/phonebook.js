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

const getAllContacts = (req, res) => {
  res.json(persons)
}

module.exports = {
  phonebookHome: phonebookHome,
  getAllContacts: getAllContacts,
}