import { useSelector } from "react-redux";
import {Button,Input,LogoutButton} from "./index.js";

function Profile(){
    const user = useSelector((state)=>state.auth.userData)
return(
    <div className="min-h-[calc(100vh-4rem)] flex flex-col py-10 pt-32 px-4 sm:px-8 md:px-16 lg:px-32 bg-white dark:bg-gray-900">
        <div className="w-full max-w-2xl">
                <div className="flex gap-8 border-b border-gray-300 dark:border-gray-700">
                    <Button className="text-lg font-semibold pb-2 border-b-2 border-green-600 text-green-600">Profile Details</Button>
                    <Button className="text-lg font-semibold pb-2 border-b-2 border-green-600 text-green-600">Your Posts</Button>
                    <Button className="text-lg font-semibold pb-2 border-b-2 border-green-600 text-green-600">Bookmarks</Button>
                </div>
        </div>
        <div className="py-6">
            <div className="flex flex-col">
                <div className="w-32 h-32 mb-4">
                    <img 
                        className="w-full h-full rounded-full object-cover"
                        src={"https://picsum.photos/100/100"} alt="profile-image" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-semibold mb-1 dark:text-white">{user?.username}</h1>
                <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                <Input
                 type="text"
                 placeholder = "Bio"
                 className = "mt-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md p-2"
                 />
                 <div className="flex gap-5">
                    <Button className="bg-green-600 text-white w-32 mt-6  rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">Update Bio</Button>
                    <LogoutButton className="bg-green-600 text-white w-24  mt-6   rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">Logout</LogoutButton>
                 </div>
            </div>

        </div>
        
    </div>
)
}

export default Profile;