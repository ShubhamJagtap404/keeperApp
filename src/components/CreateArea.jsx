import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpnaded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(
      (prevValue) => {
        return {
          ...prevValue,
          [name]: value
        };
      }
    );
  }

  function submitNote(event) {
    props.onAddNote(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleExpansion(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {isExpnaded ? <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={note.title} 
        /> : null }
        <textarea onChange={handleChange}
        onClick={handleExpansion} 
        name="content" 
        placeholder="Take a note..." 
        rows={ isExpnaded ? "3": "1"}
        value={note.content} />
        <Zoom in={isExpnaded ? true : false}>
          <Fab color="primary" aria-label="add" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
