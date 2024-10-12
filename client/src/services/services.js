import axios from "axios";

class Service{
    async createAccount({name, email, password}){
        try {
           const userAccount =  await axios.post("http://localhost:5005/api/v1/users/register",{
            username:name,
            email,
            password
           })
           console.log(userAccount)
        //    if(userAccount){
        //     return this.login({email, password})
        //    } 
        } catch (error) {
            throw error
        }
    }
    async login({email, password}){
        try{
            const user = await axios.get();
        } catch(error) {
            throw error;
        }
    }
    async getUser({userId}){
        try {
            return await axios.get();
        } catch (error) {
            throw error;
        }
    }
    async logout({}){
        try {
            return await axios.get();
        } catch (error) {
            throw error;
        }
    }
    async getPosts({}){
        try {
            return await axios.get();
        } catch (error) {
            throw error;
        }
    }
    async getPost(){
        try{
            return await axios.get();
        } catch(error) {
            throw error;
        }
    }
    async updatePost(){
        try {
            return await axios.post()
        } catch (error) {
            throw error;
        }
    }
    async deletePost(){
        try {
            return await axios.post()
        } catch (error) {
            throw error;
        }
    }
    async uploadFile(){
        try {
            return await axios.post()
        } catch (error) {
            throw error;
        }
    }
    async deleteFile(){
        try {
            return await axios.post()
        } catch (error) {
            throw error;
        }
    }
    async getFilePreview(){
        try {
            return await axios.post()
        } catch (error) {
            throw error;
        }
    }
}


const services = new Service();
export default services;