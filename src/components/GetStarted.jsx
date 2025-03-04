import Button from "./Button";

const GetStarted = () => {
    return (
        <div className="flex flex-wrap justify-evenly bg-sky-100 p-10 md:p-20 text-blue-900 border-2 border-dashed border-blue-900 rounded-sm m-2 dark:bg-sky-900  dark:text-blue-300 dark:border-blue-200">
            <div>
                <p className="font-bold">Ready to get started?</p>
                <p>Sign up or contact us</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-2 dark:text-blue-200">
                <Button style="dark:border-blue-200 bg-blue-900 text-sky-100 md:px-10">
                    Start free trial
                </Button>
                <Button style="dark:border-blue-200 md:px-10">
                    Start free trial
                </Button>
            </div>
        </div>
    )
}

export default GetStarted;