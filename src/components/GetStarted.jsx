const GetStarted = () => {
    return (
        <div className="flex flex-wrap justify-evenly bg-sky-100 p-20 text-blue-900 border-2 border-dashed border-blue-900 rounded-sm m-2 dark:bg-sky-900  dark:text-blue-300 dark:border-blue-200">
            <div>
                <p className="font-bold">Ready to get started?</p>
                <p>Sign up or contact us</p>
            </div>
            <div className="flex gap-4 dark:text-blue-200">
                <button className="px-10 my-1 hover:my-0 hover:px-11 hover:shadow-xl hover:font-bold border border-blue-900  dark:border-blue-200 rounded-md bg-blue-900 text-sky-100">Start free trial</button>
                <button className="px-10 my-1 hover:my-0 hover:px-11 hover:shadow-xl hover:font-bold border border-blue-900  dark:border-blue-200 rounded-md">Contact Us</button>
            </div>
        </div>
    )
}

export default GetStarted;