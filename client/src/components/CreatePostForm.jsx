import { useForm } from "react-hook-form";
import { Input, Button } from "./index";
import ReactQuill from 'react-quill';
import services from "../services/services";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostSchema } from "../validators/postValidator";

function CreatePostForm() {
    const { register, handleSubmit, watch, setValue, control, formState: { errors } } = useForm({
        resolver: zodResolver(createPostSchema),
    });
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userData);



    const editorContent = watch("content");
    const onEditorChange = (editorData) => {
        setValue("content", editorData);
    }


    const uploadHandler = async (imageList) => {
        const formData = new FormData();
        formData.append('file', imageList[0]);
        formData.append('upload_preset', 'preset_image'); // Add your upload preset
        formData.append('cloud_name', 'ds2tgx0bn'); // Add your cloud name

        try {
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/ds2tgx0bn/image/upload',
                formData
            );
            return (response.data.url); // Get the image URL from the response
        } catch (error) {
            console.error("Error uploading the image: ", error);
        }
    };

    // console.log("CreatePostForm::data:",data,"\ntype:", typeof data.image[0]);


    const onSubmit = async (data) => {
        // console.log("CreatePostForm::errors",errors);
        try {
            let imageUrl = await uploadHandler(data.image);
            if (imageUrl) {
                const response = await services.createPost({
                    title: data.title,
                    image: imageUrl,
                    description: data.content,
                    total_likes: 0,
                    comments: [],
                    author: user._id
                }, user.token)
                navigate(`/post/${response.data.post._id}`)
            }
        } catch (error) {
            console.error("Error uploading the image: ", error);
        }
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
                        {...register("title")}
                    />
                    {errors.title && (<p className="text-red-600 text-xs px-1 pt-2 ">{errors.title.message}</p>)}
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-bold mb-2">Header Image</label>
                    <Input
                        id="image"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        className="rounded w-full py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
                        {...register("image")}
                    />
                    {errors.image && (<p className="text-red-600 text-xs px-1 pt-2 ">{errors.image.message}</p>)}
                </div>
                <div className="mb-20">
                    <label htmlFor="content-box" className="block text-sm font-bold mb-2">Content</label>
                    <ReactQuill
                        id="content-box"
                        theme="snow"
                        className="rounded w-full py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
                        value={editorContent}
                        onChange={onEditorChange}
                        style={{ height: "200px" }}
                        control={control}
                    />
                    {errors.content && (<p className="text-red-600 text-xs px-1 pt-2 ">{errors.content.message}</p>)}
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

export default CreatePostForm;