import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import alertContext from "../context/alerts/alertcontext";

const Noteitem = (props) => {
  const { title, description } = props.note;
  const context = useContext(noteContext);
  const context1 = useContext(alertContext);
  const { showAlert } = context1;
  const { deleteNote } = context;

  const onchange = () =>{
    deleteNote(props.note._id);
    showAlert("Note has been Deleted Successfully","success");
  }

  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {/* <p className="card-text">{tag}</p> */}
          <i className="fa-solid fa-trash mx-2 " onClick={onchange}></i>
          <i className="fa-solid fa-user-pen mx-2 "onClick={() =>{props.updateNote(props.note)}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
