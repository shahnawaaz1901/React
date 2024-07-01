import { useState } from "react";
import "./NoteForm.css";
import { useDispatch } from "react-redux";
import { noteActions } from "../../redux/reducers/noteReducer";
import { useNotification } from "../../hooks/notification.hook";
import { notificationActions } from "../../redux/reducers/notificationReducer";

function NoteForm(/*{ onCreateNote }*/) {
  const [noteText, setNoteText] = useState("");
  const notificatioObject = useNotification();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateNote(NoteText);
    // dispatch(addNote(noteText));//* Using Redux
    dispatch(noteActions.add({ text: noteText })); // * Using Redux Toolkit
    setNoteText("");
  };
  if (notificatioObject.type === "Note" && notificatioObject.message) {
    window.setTimeout(() => {
      dispatch(notificationActions.reset());
    }, 2500);
  }
  return (
    <div className="container">
      {/* Notification for Note App */}
      {notificatioObject.type === "Note" && (
        <div className="alert alert-success" role="alert">
          {notificatioObject.message}
        </div>
      )}
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
