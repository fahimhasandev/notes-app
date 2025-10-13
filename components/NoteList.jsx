import { FlatList, StyleSheet, Text } from "react-native";
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

const styles = StyleSheet.create({
  noNotesText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginTop: 15,
  },
});

export default NoteList;
