import "./NoteList.css";
import { useDispatch, useSelector } from "react-redux";
// import { deleteNote } from "../../redux/actions/notesAction";
import { noteActions, noteSelector } from "../../redux/reducers/noteReducer";
import useNoteValue from "../../hooks/note.hook";
function NoteList() {
  /*
    Accessing the notes state from noteReducer function
  */
  const notes = useNoteValue();
  //* One Method
  // const { notes } = useSelector((state) => state.noteReducer);

  //* Second Method
  // const { notes } = useSelector(noteSelector);

  const dispatch = useDispatch();
  // const notes = [];
  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn}</p>
            <p className="note-content">{note.note}</p>
            <button
              className="btn btn-danger"
              // onClick={() => dispatch(deleteNote(index))} using the Redux
              onClick={() => dispatch(noteActions.delete({ index }))} //*Using Redux Toolkit
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
