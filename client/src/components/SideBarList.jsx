import {Link} from "react-router-dom"

function SideBarList({
    title = "",
    options =[]
}){
return(
<div>
    <h3 className="text-md font-semibold mb-2">{title}</h3>
    <ul>
        {
        options.map((item)=>(
            <Link to={item.url}>
                <li className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-3xl hover:bg-gray-300 mb-2">{item.title}</li>
            </Link>
        ))}
    </ul>
</div>
)
}


export default SideBarList;