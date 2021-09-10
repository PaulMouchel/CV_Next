const TextField = (props) => {
    return (
        <textarea {...props}
        type="text" 
        name="message" 
        className="
        bg-gray-800
        bg-opacity-90 
        text-gray-100 
        resize-none 
        block 
        h-48
        md:h-64  
        w-full
        border-2 
        border-orange 
        focus:border-red 
        p-2 
        outline-none
        font-mono" 
        autoComplete="off" 
        
        required/>
    )
}

export default TextField;