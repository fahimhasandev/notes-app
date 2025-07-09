import databaseService from "./databseService";

//App database and collectionid
const dbIb = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const tableID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_NOTES_ID;

const noteService = {
  //Get notes

  async getNotes() {
    const response = await databaseService.listDocuments(dbIb, tableID);
    if (response.error) return { error: response.error };

    return { data: response };
  },
};

export default noteService;
