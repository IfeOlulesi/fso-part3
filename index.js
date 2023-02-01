const express = require('express')
const app = express()

const notesApi = require('./routes/notes')
const personsApi = require('./routes/phonebook')

app.use(express.json())


// notes app routes
app.get('/', (req, res) => notesApi.notesHome(req, res))

app.get('/api/notes', (req, res) => notesApi.getAllNotes(req, res))

app.get('/api/notes/:id', (req, res) => notesApi.getNoteById(req, res))

app.delete('/api/notes/:id', (req, res) => notesApi.deleteNoteById(req, res) )

app.post('/api/notes', (req, res) => notesApi.createNewNote(req, res))


// phonebook app routes
app.get('/api/persons', (req, res) => personsApi.getAllContacts(req, res))

app.get('/info', (req, res) => personsApi.contactInfo(req, res))



const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
