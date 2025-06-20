import { FlatList, Text } from "react-native";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <NoteItem note={item} />}
      ListEmptyComponent={<Text style={styles.noNotesText}>No notes yet</Text>}
    />
  );
}

export default NoteList;
