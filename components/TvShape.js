const TvShape = ({ children }) => {
    return (
        <div className="flex flex-col max-w-xl">
            <div className="h-12 flex">
                <div className="h-full w-12"></div>
                <div className="h-full w-full tv-top bg-gray-50"></div>
                <div className="h-full w-12"></div>
            </div>
            <div className="flex ">
                <div className="w-12 tv-left bg-gray-50"></div>
                <div className="w-full bg-gray-50 z-10">
                    { children }
                </div>
                <div className="w-12 tv-right bg-gray-50"></div>
            </div>
            <div className="h-12 flex">
                <div className="w-12"></div>
                <div className="h-full w-full tv-bottom bg-gray-50"></div>
                <div className="w-12"></div>
            </div>
        </div>
    )
}

export default TvShape;