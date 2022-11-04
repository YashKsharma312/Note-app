const yargs=require('yargs')
const chalk=require('chalk')
const notes = require('./notes.js')
//create add command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Add your note',
            demandOption:'true',
            type:'string'
        }
    },
    handler(argv){
    notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'Remove the note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'read',
    describe:'Read a  note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
    }},
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.command({
    command:'List',
    describe:'List your note',
    handler(){
        notes.listNotes()
    }
})
yargs.parse()