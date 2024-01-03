import NotesList from "./components/notesList"
import { useEffect, useState } from "react"
import {nanoid} from 'nanoid'
import Search from "./components/Search"
import Header from "./components/Header"
function App() {
  const [notes, setNotes] = useState([
    {
    id:nanoid(),
    text:'This is my First Note',
    date:'15/04/2021'
  },
  {
    id:nanoid(),
    text:'This is my Second Note',
    date:'15/04/2021'
  }
])

const [searchText, setSearchText] = useState('')

const [isdarkMode, setIsDarkMode] = useState(false)

useEffect(()=>{
  const retrivedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if(retrivedNotes){
    setNotes(retrivedNotes)
  }
},[])

useEffect(() => {
  localStorage.setItem('react-notes-app-data',
  JSON.stringify(notes)
  );
}, [notes])

// useEffect(() => {
//   const savedNotes = JSON.parse(
//     localStorage.getItem('react-notes-app-data')
//   );

//   if (savedNotes) {
//     setNotes(savedNotes);
//   }
// }, []);



function darkModehandler(){
  setIsDarkMode(!isdarkMode)
}

const addnoteHandler = (text) => {
  const datenow = new Date()
  setNotes((preNote) => [...preNote,{
    id:nanoid(),
    text:text,
    date:datenow.toLocaleDateString()
  }])

}
console.log(notes);

const deleteNoteHandler = (id) => {
  const updatedNotes =  notes.filter((item) => item.id !== id)
  setNotes(updatedNotes)
}

  return (
   <div className={isdarkMode ? 'dark-mode' :''}>
      <div className="container">
      <Header darkmode={darkModehandler}/> 
      <Search search={setSearchText}/>
    <NotesList notes={notes.filter(item => item.text.toLowerCase().includes(searchText))} addnote={addnoteHandler} deletenote={deleteNoteHandler}/>
    </div>
   </div>
  )
}

export default App
