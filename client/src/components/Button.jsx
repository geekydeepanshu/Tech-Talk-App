import React from "react";

function Button ({
    children,
    type="button",
    className="",
    ...props
}){
    return(
    <button
     type={type}
     {...props}
     className={`px-4 py-2 rounded-lg ${className}`}
    >{children}
    </button>
    )
}

export default Button;