import { useState } from "react"

export default function AddNote({addnote}){
    const [noteText, SetNoteText] = useState('')
    const characterLimit = 200

    const NoteTexthandler = (e) => {
        if(characterLimit - e.target.value.length >= 0){
            SetNoteText(e.target.value)
        }
        
    }

    const noteSaveHandler = () => {
        if(noteText.trim().length > 0){
            addnote(noteText)
            SetNoteText('')
        }
        
    }
    return(
        <div className="note new">
            <textarea rows='8' cols='10'
             placeholder="Type to add a note"
             value={noteText}
             onChange={NoteTexthandler}>
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={noteSaveHandler}>Save</button>
            </div>
        </div>
    )
}