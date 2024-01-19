import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import alertContext from "../context/alerts/alertcontext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context1 = useContext(alertContext);
  const { showAlert } = context1;
  const context = useContext(noteContext);
  const { notes, Getnotes, editNote } = context;
  const nav = useNavigate();

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    if(localStorage.getItem('token')){
      Getnotes();
    }
    else{
      nav('/login');
    }
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle : currentNote.title, edescription : currentNote.description, etag: currentNote.tag});
    // ref.show();
  };

  const handleclick = (e) => {
    console.log("Note is Updated...");
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    showAlert("Note had Updated","success");
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Addnote alert={props.showAlert}/>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit the Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group my-2 text-center">
                  <label htmlFor="etitle">Title</label>
                  <input
                    type="text"
                    className="form-control my-2"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onchange}
                  />
                </div>
                <div className="form-group my-2 text-center">
                  <label htmlFor="edescription">Description</label>
                  <input
                    type="text"
                    className="form-control my-2"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onchange}
                  />
                </div>
                <div className="form-group my-2 text-center">
                  <label htmlFor="etag">tag</label>
                  <input
                    type="text"
                    className="form-control my-2"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onchange}
                  />
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
                  <button type="button" className="btn btn-secondary d-none" ref={refClose} data-bs-dismiss="modal">Close</button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleclick}
                  >
                    Update Note
                  </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2>All Notes </h2>
        <div className="container mx-2">
          {notes.length===0?"No Notes are present":""}
        </div>
        <div className="row my-2">
          {notes.map((note) => {
            return (
              <Noteitem key={note._id} updateNote={updateNote} note={note} alert={props.alert} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
