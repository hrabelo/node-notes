const yargs = require('yargs')
const notes = require('.\\notes.js')

yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'The title of the note',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'The content of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.add(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'The title of the note',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.remove(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads the content of a note',
    builder: {
        title: {
            describe: 'The title of the note',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.read(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists the titles of all notes',
    handler() {
        notes.list()
    }
})

yargs.parse()