import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import alertContext from "../context/alerts/alertcontext";

const Addnote = (props) => {
  const context = useContext(noteContext);
  const context1 = useContext(alertContext);
  const { showAlert } = context1;
  const { Addnote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleclick = (e) =>{
    e.preventDefault();
    Addnote(note.title,note.description,note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
    showAlert("Added Note Successfully","success");
  }

  const onchange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <div className="container my-4">
        <h2>Add a Note</h2>
        <div className="container my-3">
          <form>
            <div className="form-group my-2 text-center">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control my-2"
                id="title"
                value={note.title}
                name="title"
                onChange={onchange}
              />
            </div>
            <div className="form-group my-2 text-center">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control my-2"
                id="description"
                value={note.description}
                name="description"
                onChange={onchange}
              />
            </div>
            <div className="form-group my-2 text-center">
              <label htmlFor="tag">tag</label>
              <input
                type="text"
                className="form-control my-2"
                id="tag"
                value={note.tag}
                name="tag"
                onChange={onchange}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary" onClick={handleclick}>
                Add a Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
