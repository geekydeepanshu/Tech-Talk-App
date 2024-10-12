import React,{ useId } from "react";

 function Input({
    label,
    type = "text",
    placeholder = "Enter your text...",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <>
            {label&&(<label className="inline-block mb-1 pl-1" htmlFor={id} >{label}</label>)}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                ref={ref}
                {...props}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            />
        </>



    )
}

export default React.forwardRef(Input);