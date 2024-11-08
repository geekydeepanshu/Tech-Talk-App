import axios from "axios";
import { useSelector } from "react-redux";

class Service {

    async createAccount({ fName, lName, username, email, password }) {
        try {
            return await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, {
                first_name: fName,
                last_name: lName,
                username,
                email,
                password
            })
        } catch (error) {
            throw error
        }
    }
    async login(data) {
        try {
            return await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, data);

        } catch (error) {
            throw error;
        }
    }
    async getUser({ userId }) {
        try {
            return await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        } catch (error) {
            throw error;
        }
    }
    async logout({ }) {
        try {
            return await axios.get();
        } catch (error) {
            throw error;
        }
    }
    async createPost(data, token) {
        console.log("CreatePostService::data", data, "\n", "token:", token);
        try {
            return axios.post(`${import.meta.env.VITE_BACKEND_URL}/posts/createPost`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            throw error;
        }
    }
    async getPosts() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts`);
            return response.data.posts;
        } catch (error) {
            throw error;
        }
    }
    async getPost(postId) {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/${postId}`);
            return response.data.post;
        } catch (error) {
            throw error;
        }
    }
    async updatePost() {
        try {
            return await axios.post()
        } catch (error) {
            throw error;
        }
    }
    async deletePost(postId, token) {

        return await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/posts/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

    }
    async uploadFile(file) {

        // return await cloudinary.uploader
        // .upload(
        //     file,
        // )
        // .catch((error) => {
        //     console.log(error);
        // });
    }
    async deleteFile() {
        try {
            return await axios.post()
        } catch (error) {
            throw error;
        }
    }
    async getFilePreview() {
        try {
            return await axios.post()
        } catch (error) {
            throw error;
        }
    }
}


const services = new Service();
export default services;