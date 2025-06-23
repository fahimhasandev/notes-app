import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddNoteModal from "../components/AddNoteModal";
import NoteList from "../components/NoteList";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: "1", text: "Notes One" },
    { id: "2", text: "Notes Two" },
    { id: "3", text: "Notes Three" },
    { id: "4", text: "Notes Four" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim() === "") return;
    setNotes((prev) => [
      ...prev,
      { id: Date.now().toString(), text: newNote.trim() },
    ]);
    setNewNote("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Node List */}
      <NoteList notes={notes} />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      {/* Modal */}
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setNewNote={setNewNote}
        addNote={addNote}
        newNote={newNote}
      />
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
