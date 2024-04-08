// production grade approach

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.VITE_APPWRITE_BUCKET_ID),
}

export default conf