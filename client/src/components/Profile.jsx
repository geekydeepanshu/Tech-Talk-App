import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, LogoutButton } from './index.js';
import { updateUserBio } from '../store/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.userData);
    const [bio, setBio] = useState(user?.bio || '');
    const [initialBio] = useState(user?.bio || ''); // Store initial bio value
    const [hover, setHover] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleUpdateBio = () => {
        dispatch(updateUserBio({ userId: user._id, bio, token: user.token }))
            .unwrap()
            .then((response) => {
                toast.success("Bio updated successfully!");
                console.log(response);
            })
            .catch((error) => {
                toast.error(error || "An error occurred");
                console.log(error);
            });
    };

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleFileUpload = (e) => {
        console.log(e.target.files[0]);
        handleCloseModal();
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col py-10 pt-32 px-4 sm:px-8 md:px-16 lg:px-32 bg-white dark:bg-gray-900">
            <ToastContainer />
            <div className="w-full max-w-2xl">
                <div className="flex gap-8 border-b border-gray-300 dark:border-gray-700">
                    <Button className="text-lg font-semibold pb-2 border-b-2 border-green-600 text-green-600">Profile Details</Button>
                    <Button className="text-lg font-semibold pb-2 border-b-2 border-green-600 text-green-600">Your Posts</Button>
                    <Button className="text-lg font-semibold pb-2 border-b-2 border-green-600 text-green-600">Bookmarks</Button>
                </div>
            </div>
            <div className="py-6">
                <div className="flex flex-col">
                    <div
                        className="w-32 h-32 mb-4 relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className="w-full h-full rounded-full object-cover"
                            src={"https://picsum.photos/100/100"} alt="profile-image"
                        />
                        {hover && (
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full cursor-pointer"
                                onClick={handleOpenModal}
                            >
                                <span className="text-white">Edit</span>
                            </div>
                        )}
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-semibold mb-1 dark:text-white">{user?.username}</h1>
                    <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                    <Input
                        type="text"
                        placeholder="Bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="mt-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md p-2"
                    />
                    <div className="flex gap-5">
                        <Button
                            className="bg-green-600 text-white w-32 mt-6 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            onClick={handleUpdateBio}
                            disabled={bio === initialBio} // Disable button if bio hasn't changed
                        >
                            Update Bio
                        </Button>
                        <LogoutButton className="bg-green-600 text-white w-24 mt-6 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">Logout</LogoutButton>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md">
                        <h2 className="text-2xl mb-4">Upload Profile Picture</h2>
                        <input type="file" onChange={handleFileUpload} />
                        <Button
                            className="mt-4 bg-red-500 text-white p-2 rounded-md"
                            onClick={handleCloseModal}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
