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

const notesHome = (request, response) => {
  response.send('<h1>Hello World!</h1>')
}

const getAllNotes = (request, response) => {
  response.json(notes)
}

const getNoteById = (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find(note => note.id === id)
  if (note) {
    return response.json(note)
  } else {
    response.statusMessage = "Note not found"
    return response.status(404).end()
  }
}

const deleteNoteById = (request, response) => {
  console.log(request.headers)
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
}

const idGenerator = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(note => note.id)) : 0
  return maxId + 1
}

const createNewNote = (request, response) => {
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
}


module.exports = {
  notesHome: notesHome,
  getAllNotes: getAllNotes,
  getNoteById: getNoteById,
  deleteNoteById: deleteNoteById,
  createNewNote: createNewNote
}