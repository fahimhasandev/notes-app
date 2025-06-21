import { StyleSheet, Text, View } from "react-native";

const NoteItem = (note ) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  noteText: {
    fontSize: 16,
    color: "#333",
  },
});

export default NoteItem;
