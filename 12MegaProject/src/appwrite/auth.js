import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client);
    }

    // FOR SIGNUP
    async createAccount({email , password , name }){
        try {
           const userAccount = await this.account.create(ID.unique , email , password , name);
           if (userAccount) {
                // call another method
                return this.login({email , password});
           } else {
                return userAccount;
           }
        } catch (error) {
            console.log(error);
        }
    }

    // FOR LOGIN
    async login({email , password}){
        try {
            return await this.account.createEmailSession(email , password);
        } catch (error) {
            console.log(error);
        }
    }

    //FOR CURRENT USER
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service error :: " , error);
        }

        return null;
    }

    // FOR LOGOUT
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: error" , error);
        }
    }
}

const authService = new AuthService();

export default authService