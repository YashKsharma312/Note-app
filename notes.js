const fs=require('fs')
const chalk=require('chalk')

const addNote= (title,body)=> {
const notes=loadNotes()
//const duplicateNotes=notes.filter((note) => note.title==title)
const duplicateNote=notes.find((note) => note.title==title)

if(!duplicateNotes){
    notes.push({
        title: title,
        body: body
    })


saveNotes(notes)
console.log(chalk.bold.green('New note added!'))
}else{
    console.log(chalk.bold.red('Note Title taken!'))
}}

const removeNote= (title) => {
      const notes=loadNotes()
      const notesToKeep=notes.filter((note)=> note.title!=title)
    if(notes.length>notesToKeep.length){
         console.log(chalk.bold.green('Note Removed!'))
         saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No Note Found!'))
    }
      
}

const listNotes = () =>{
    const notes=loadNotes()
    console.log(chalk.inverse('Your notes!'))
    
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes=loadNotes()
    const note=notes.find((note) => note.title ===title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note not found!'))
    }
}


const saveNotes= (notes) => {
     const dataJSON=JSON.stringify(notes)
     fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes= () => {
    try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
    
}

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}