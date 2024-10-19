import axios from "axios";

class Service{
    
    token = null;
    
    async createAccount({name, email, password}){
        try {
           const userAccount =  await axios.post("http://localhost:5005/api/v1/users/register",{
            username:name,
            email,
            password
           })
           if(userAccount)
                return this.login({email, password})
           
        } catch (error) {
            throw error
        }
    }
    async login({email, password}){
        try{
            return await axios.post("http://localhost:5005/api/v1/users/login",{
                email,
                password
            });

        } catch(error) {
            throw error;
        }
    }
    async getUser({userId}){
        try {
            return await axios.get("http://localhost:5005/api/v1/users/profile",{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
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
    async uploadFile(file){
        
        // return await cloudinary.uploader
        // .upload(
        //     file,
        // )
        // .catch((error) => {
        //     console.log(error);
        // });
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