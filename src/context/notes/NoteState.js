import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const s1 = [];
  const [notes, setNotes] = useState(s1);

  //Get All note
   // eslint-disable-next-line
  const Getnotes = async() =>{
    //API Call
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setNotes(json);
  }

  //Adding a note
  const Addnote = async(title,description,tag) =>{
    //API Call
    const url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}), 
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  }

  const deleteNote = async(id) =>{
    //API Call
    const url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
  
    //Client Side
    console.log("Deleted a Note with "+id);
    const newnotes = notes.filter((note)=>{return(note._id!==id)});
    setNotes(newnotes);
  }

  const editNote = async(id,title,description,tag) =>{
    //API Call
    const url = `${host}/api/notes/Updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}), 
    });
    
    let newNotes = JSON.parse(JSON.stringify(notes));
    //Client Side
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if(element._id===id){
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, Getnotes, editNote, deleteNote , Addnote, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
