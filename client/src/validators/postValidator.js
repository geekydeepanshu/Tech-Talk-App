import { z } from "zod";

const imageSchema = z
.any()
.refine((file)=>file instanceof File,{message:"upload a valid image"})
.refine((file)=>file.size<=3145728,{message:"image size must be less than 3MB"})
.refine((file)=>['image/png', 'image/jpeg','image/jpg'].includes(file.type),{message:"image must be a .png, .jpg or .jpeg"}) 

export const createPostSchema = z.object({
    title:z.string({required_error:"title is required"})
          .min(5,{message:"title must be at least 5 characters long"})
          .max(100,{message:"title cannot exceed 100 characters"}),
    // image: imageSchema,
    content: z.string({required_error:"content is required "})
            .min(10,{message:"content must be at least 10 characters long"})
            .max(10000,{message:"content cannot exceed 10000 characters"})
})





