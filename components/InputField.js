const InputField = (props) => {
    return (
        <input {...props}
        type="text" 
        className="
        bg-gray-800
        bg-opacity-90 
        text-gray-100 
        resize-none 
        block   
        w-full
        border-2 
        border-orange 
        focus:border-red 
        p-2 
        my-2 
        outline-none
        font-mono" 
        autoComplete="off" 
        required/>
    )
}

export default InputField;