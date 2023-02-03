const express = require('express')
const app = express()
var morgan = require('morgan')

const notesApi = require('./routes/notes')
const personsApi = require('./routes/phonebook')


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


app.use(express.json())
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body),
  ].join(' ')
}))


// notes app routes
app.get('/', (req, res) => notesApi.notesHome(req, res))

app.get('/api/notes', (req, res) => notesApi.getAllNotes(req, res))

app.get('/api/notes/:id', (req, res) => notesApi.getNoteById(req, res))

app.delete('/api/notes/:id', (req, res) => notesApi.deleteNoteById(req, res) )

app.post('/api/notes', (req, res) => notesApi.createNewNote(req, res))


// phonebook app routes
app.get('/api/persons', (req, res) => personsApi.getAllContacts(req, res))

app.get('/info', (req, res) => personsApi.contactInfo(req, res))

app.get('/api/persons/:id', (req, res) => personsApi.getContactById(req, res))

app.delete('/api/persons/:id', (req, res) => personsApi.deleteContact(req, res))

app.post('/api/persons', (req, res) => personsApi.addContact(req, res))


app.use(unknownEndpoint)


const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
