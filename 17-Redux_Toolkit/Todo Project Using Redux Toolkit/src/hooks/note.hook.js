import { useSelector } from "react-redux";

function useNoteValue() {
  const { notes } = useSelector((state) => state.noteReducer);
  return notes;
}

export default useNoteValue;
