import conf from "../conf/conf";
import { Client, ID , Databases , Storage , Query } from "appwrite";


export class Service{
    client = new Client();
    datbases;
    bucket;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);

        this.datbases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // FOR CREATING POST
    async createPost({title , slug , content , featuredImage , status , userId}){
        try {
            return await this.datbases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error" , error);
        }
    }

    //FOR UPDATE THE POST
    async updatePost(slug , {title , content , featuredImage , status}){
        try {
            return await this.datbases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite updatePost :: error" , error);
        }
    }

    // FOR DELETING THE POST
    async deletePost(slug){
        try {
            await this.datbases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite deletePost :: error" , error);
        }

        return false
    }

    // FOR GETTING POST
    async getPost(slug){
        try {
            return await this.datbases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
           console.log("Appwrite getPost :: error" , error); 
        }
    }

    // HOW TO GET MULTIPLE POST
    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.datbases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite getPosts error :: " , error);
        }
    }

    // HOW TO UPLOAD FILE
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite uploadfile error :: " , error);
        }
    }

    // HOW TO DELETE FILE
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite deleteFile error:: " , error);
        }

        return false
    }

    // FILE PREVIEW
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service;