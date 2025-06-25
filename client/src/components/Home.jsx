import { useState, useEffect } from "react";
import { SideBarList, Input } from "./index";
import { PostPreviewCard } from "./index";
import services from "../services/services";


function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPost();
    }, [])

    const getPost = async () => {
        const allPosts = await services.getPosts()
        setPosts(allPosts)
    }

    const sidebarData = [
        {
            title: "Featured Post",
            options: [
                {
                    title: "The rise of react",
                    url: ""
                },
                {
                    title: "Understanding Javascript",
                    url: ""
                },
                {
                    title: "Basics of React",
                    url: ""
                }
            ]
        },
        {
            title: "Most viewed Post",
            options: [
                {
                    title: "Mastering CSS",
                    url: ""
                },
                {
                    title: "Understanding Javascript",
                    url: ""
                },
                {
                    title: "Basics of React",
                    url: ""
                }
            ]
        }
    ]

    // const posts = [
    //     {
    //         id: "asfdards5434rewfaq43",
    //         author: "Deepanshu Saini",
    //         title: "Test Blog",
    //         featuredImage: "https://res.cloudinary.com/dwqu6dpab/image/upload/v1727333393/blog-headers/r5pqhuuhvckj73iaydfy.jpg",
    //         content: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. <h1> Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,</h1> eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. <strong>Ut felis. Praesent dapibus,<strong> neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>",
    //         createdAt: Date.now(),
    //         commentsCount: 1,
    //     },
    //     {
    //         id: "asfdards5434rewfaq43",
    //         author: "Abishek",
    //         title: "Random Blog",
    //         featuredImage: "https://res.cloudinary.com/dwqu6dpab/image/upload/v1727333393/blog-headers/r5pqhuuhvckj73iaydfy.jpg",
    //         content: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. <h1> Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,</h1> eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. <strong>Ut felis. Praesent dapibus,<strong> neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>",
    //         createdAt: Date.now(),
    //         commentsCount: 1,
    //     },

    //     {
    //         id: "asfdards5434rewfaq43",
    //         author: "Abishek",
    //         title: "Random Blog",
    //         featuredImage: "https://res.cloudinary.com/dwqu6dpab/image/upload/v1727333393/blog-headers/r5pqhuuhvckj73iaydfy.jpg",
    //         content: "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. <h1> Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,</h1> eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. <strong>Ut felis. Praesent dapibus,<strong> neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>",
    //         createdAt: Date.now(),
    //         commentsCount: 1,
    //     }

    // ]
    const searchHandler = (data) => console.log(data);

    return (
        <div className="flex justify-end bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            {/* Main Post-List Container */}
            <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 pt-20 my-10 w-full lg:pr-[30%] min-h-[calc(100vh-5rem)">
                {/* Search Container */}
                <div className="flex items-center mb-6">
                    {/* Search Icon Container */}
                    <div className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white py-3 pr-2 pl-4 rounded-l-3xl">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"></path></g></svg>
                    </div>
                    {/*  */}
                    <Input
                        type="search"
                        placeholder="Search"
                        className="bg-gray-100 dark:bg-gray-700 dark:text-white py-2 px-2 outline-none rounded-r-3xl w-full"
                        onChange={searchHandler} />
                </div>
                {
                    posts && posts.map((post) => (
                        <PostPreviewCard id={post._id} author={post.author?.username} content={post.description} title={post.title} createdAt={post.createdAt} commentsCount={post.comments.length} featuredImage={post.image} />
                    ))
                }
            </div>

            <div className="hidden lg:flex flex-col min-w-[30%] h-screen mt-20 fixed border-l border-black dark:border-white p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
                <h2 className="text-lg font-bold mb-4">Suggestions</h2>
                {
                    sidebarData.map((sidebarItems) => (
                        <SideBarList title={sidebarItems.title} options={sidebarItems.options} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;