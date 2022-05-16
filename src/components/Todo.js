import {useState} from "react";

function Todo({text}) {
   const [modalIsOpen, setModalIsOpen] = useState(false);

   function deleteHandler() {
       
   }
  
  return (
    <div className="card">
        <h2>{text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
      </div>
  )
}

export default Todo
