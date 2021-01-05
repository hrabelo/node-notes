const fs = require('fs');

const add = (title, body) =>  {
    const notes = getNotes()
    const duplicatedNote = notes.find((note) => { return note.title === title})
    
    if(!duplicatedNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)

    } else {
        console.error('There is already a note with the same title!')
    }
}

const read = (title) => {
    const notes = getNotes()
    const noteToRead = notes.find((note) => note.title === title)
    if(noteToRead){
        console.log(noteToRead.body)
    } else {
        console.log('There is no such note with title ' + title)
    }
}

const list = () => {
    const notes = getNotes()
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const remove = (title) => {
    const notes = getNotes()
    const notesToKeep = notes.find((note) => {return note.title !== title})

    if(notesToKeep) {
        saveNotes(notesToKeep)
        console.log('note ' + title + ' was removed')
    } else {
        console.log('No note was removed.')
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const getNotes = () => {
    try {
        const fileBuffer = fs.readFileSync('notes.json')
        const notes = JSON.parse(fileBuffer.toString())
        return notes;
    } catch(e) {
        return []
    }
}

module.exports = {
    add,
    remove,
    read,
    list
}