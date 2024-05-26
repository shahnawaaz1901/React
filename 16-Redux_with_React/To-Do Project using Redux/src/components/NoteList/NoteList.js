import "./NoteList.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../redux/actions/notesAction";
function NoteList() {
  /*
    Accessing the notes state from noteReducer function
  */
  const { notes } = useSelector((state) => state.noteReducer);
  const dispatch = useDispatch();
  // const notes = [];
  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.note}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteNote(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
