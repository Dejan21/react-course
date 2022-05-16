import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({text}) {
   const [modalIsOpen, setModalIsOpen] = useState(false);

   function deleteHandler() {
       setModalIsOpen(true);
   }
  
  return (
    <div className="card">
        <h2>{text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Modal /> }
        {modalIsOpen && <Backdrop />}
      </div>
  )
}

export default Todo
