import AddNote from "./AddNote"
import Note from "./note"
export default function NotesList({notes, addnote, deletenote}){
    return(
        <div className="notes-list">
            {notes.map(note => <Note text={note.text} date={note.date} id={note.id} deletenote={deletenote}/>)}
            <AddNote addnote={addnote}/>
        </div>
        
    )
}