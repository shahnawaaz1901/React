import { useState } from "react";
import "./NoteForm.css";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/actions/notesAction";

function NoteForm(/*{ onCreateNote }*/) {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateNote(NoteText);
    dispatch(addNote(noteText));
    setNoteText("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
