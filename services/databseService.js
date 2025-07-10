import { Databases } from "react-native-appwrite";

const databaseService = {
  // List Documents
  async listDocuments(dbId, tableID) {
    try {
      const response = await Databases.listDocuments(dbId, tableID);
      return response.documents || [];
    } catch (error) {
      console.error("Error Fetchindf ocme", error.message);
      return { error: error.message };
    }
  },
};

export default databaseService;
