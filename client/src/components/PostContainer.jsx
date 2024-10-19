import { Link } from "react-router-dom";
import {Button} from "./index"

function PostContainer(){
    const comments = [];
    const otherposts = [];
    return(
    <div className="min-h-screen flex justify-center py-10 pt-32 px-4 bg-white dark:bg-gray-900">
        <main className="w-full max-w-3xl mx-auto">
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[25.5rem] overflow-hidden">
                <img 
                 src={"https://res.cloudinary.com/dwqu6dpab/image/upload/v1726481695/blog-headers/hoezjhasvwndqispfdiy.jpg"} 
                 alt="Blog Header" 
                 className="w-full h-full object-cover"
                 />
            </div>
            <article className="py-6">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                    {"title"}
                </h2>
                <div className="flex items-center mt-4">
                    <img 
                     src={"https://picsum.photos/100"} 
                     alt="User Avatar" 
                     className="w-12 h-12 rounded-full mr-4"/>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            {"By "}
                            {/* author value */}
                            <span className="font-bold">{"author Name"}</span> 
                        </p>
                        {/* author Bio */}
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{"author Bio"}</p>
                    </div>
                </div>
                <div className="mt-4 flex items-center text-gray-600 dark:text-gray-400">
                    <p>September 16, 2024</p>
                    <span className="mx-2">.</span>
                    <p>1 min read</p>
                    <span className="mx-2">.</span>
                    <p className="cursor-pointer" title="Bookmark this post">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg>
                    </p>
                </div>
                <div className="mt-6 text-gray-700 dark:text-gray-300 space-y-6">
                    {"content"}
                </div>
                <div className="mt-6">
                        <div >
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white border-t pt-4">Leave your comment</h3>
                            <div className="mt-4">
                                <textarea 
                                  className="w-full border p-2 dark:bg-gray-800 dark:text-gray-200"
                                  rows={4}
                                  placeholder="Add a comment..."></textarea>
                            </div>
                            <Button className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded text-white mt-2">
                                Post Comment
                            </Button>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white pt-4">Comments({4})</h3>
                            <ul className="space-y-4 mt-4">{
                                 comments.map((comment)=>(<li className="border-b pb-4">
                                    <p className="text-gray-600 dark:text-gray-400">
                                        <span className="font-bold">Abhishek</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">about 8 hours ago</span>
                                        <p className="text-gray-700 dark:text-gray-300 mt-2">{"Comment"}</p>
                                    </p>
                                 </li>))
                                }
                            </ul>
                        </div>
                        
                </div>
            </article>
            <div className="py-6 border-t dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    {otherposts.map((suggestion)=>(<li>
                        <Link 
                         to={"/"}
                         className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">{"blog suggestions"}
                        </Link>
                    </li>))}
                </h3>
            </div>
        </main>
    </div>)
}


export default PostContainer;