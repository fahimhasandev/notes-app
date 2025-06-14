import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "Notes One" },
    { id: 2, text: "Notes Two" },
    { id: 3, text: "Notes Three" },
    { id: 4, text: "Notes Four" },
  ]);
  return (
    <View style={styles.container}>
      <FlatList data={notes} keyExtractor={(item) => item.id} renderItem={({item}) => (
        <View>
      ) } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default NoteScreen;
