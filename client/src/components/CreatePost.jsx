import { useForm } from "react-hook-form";
import { Input, Button } from "./index";
import ReactQuill from 'react-quill';
import services from "../services/services";
import { useState } from "react";
import axios from "axios";

function CreatePost() {

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const uploadHandler = async () => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'preset_image'); // Add your upload preset
        formData.append('cloud_name', 'ds2tgx0bn'); // Add your cloud name

        try {
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/ds2tgx0bn/image/upload',
                formData
            );
            setImageUrl(response.data.url); // Get the image URL from the response
            console.log(response.data.url)
        } catch (error) {
            console.error("Error uploading the image: ", error);
        }
    };
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log("CreatePost::form-data:", data);
    }
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen flex items-center justify-center py-10 pt-20">
            <form onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-4xl my-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
                <h2 className="text-3xl font-bold mb-6 text-center">Create a Blog Post</h2>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-bold mb-2">Title</label>

                    <Input
                        id="title"
                        type="text"
                        placeholder="Enter the title"
                        className="rounded w-full py-2 outline-none bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
                        {...register("title", { required: true })}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-bold mb-2">Header Image</label>
                    <Input
                        id="image"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        className="rounded w-full py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
                        onChange={(event) => setImage(event.target.files[0])}
                    />
                    <Button
                        onClick={uploadHandler}
                        className="mt-2 py-2 px-6 rounded font-bold  bg-gray-500 dark:bg-gray-700 text-white hover:bg-gray-600 dark:hover:bg-gray-800"
                    >Upload</Button>
                </div>
                <div className="mb-20">
                    <label htmlFor="content-box" className="block text-sm font-bold mb-2">Content</label>
                    <ReactQuill id="content-box" theme="snow" className="rounded w-full py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200" preserveWhitespace={false}
                        {...register("content")} style={{ height: "200px" }} />
                </div>
                <div className="flex justify-center mt-6">
                    <Button
                        type="submit"
                        className="bg-green-600 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-800 text-white font-bold py-2 px-6 rounded">Create Post

                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;