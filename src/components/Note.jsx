import close from '../assets/close.png'
export default function Note({text, date, id, deletenote}){
    const deleteHandler = () => {
        deletenote(id)
    }
    return(
        <div className="note" key={id}>
           <span>{text}</span>
           <div className="note-footer">
            <small>{date}</small>
            <img src={close} className="delete-icon" onClick={deleteHandler} style={{width:'1.1rem'}}></img>
           </div>
        </div>
        
    )
}