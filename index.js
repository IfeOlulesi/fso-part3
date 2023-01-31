const express = require('express')
const app = express()

app.use(express.json())

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  console.log(request.headers)
  const id = Number(request.params.id);
  const note = notes.find(note => note.id === id)
  if (note) {
    return response.json(note)
  } else {
    response.statusMessage = "Note not found"
    return response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  console.log(request.headers)
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const idGenerator = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(note => note.id)): 0
  return maxId + 1
}

// create new note
app.post('/api/notes', (request, response) => {  
  const body = request.body
  
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    id: idGenerator(),
    content: body.content,
    important: body.important || false,
    dateCreated: new Date(),
  }

  notes = notes.concat(note)

  response.json(note)
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
