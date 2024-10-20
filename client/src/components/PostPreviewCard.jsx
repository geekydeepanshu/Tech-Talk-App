import {Link } from "react-router-dom";
import parse from "html-react-parser";


function PostPreviewCard(
    {
        id="",
        author="",
        title="",
        content="",
        featuredImage="",
        createdAt="",
        commentsCount=0,

    }
){
return(
    <Link to={`/post/${id}`}>
        <div className="mb-6 py-6 border-b border-gray-300">
            <div className="flex items-center gap-2 mb-2">
                    <div className="h-6 w-6 rounded-full bg-black dark:bg-gray-700 overflow-hidden">
                        <img 
                         src={"https://picsum.photos/100"}
                         className="w-full h-full object-cover" 
                         alt="profile-image"/>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{author}</p>
            </div>
            <div className="flex flex-row items-start gap-6 md:gap-8">
                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
                    <p className="text-gray-700 dark:text-gray-400 mb-4 font-semibold line-clamp-3">{
                    parse(content)
                    }</p>
                </div>
                <div className="w-24 h-16 md:w-48 md:h-32 bg-gray-200 dark:bg-gray-700 rounded-sm overflow-hidden">
                <img 
                 src={featuredImage} 
                 alt="Blog Preview" 
                 className="w-full h-full object-cover hover:scale-110 transition-transform"
                 />
                </div>
            </div>
            <div className="flex justify-between items-center mt-4 text-gray-600 dark:text-gray-400 text-sm">
                <div>
                    {createdAt}
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1"></div>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-gray-600 dark:text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>
                    {commentsCount}
                </div>
            </div>
        </div>
    </Link>
)
}


export default PostPreviewCard;