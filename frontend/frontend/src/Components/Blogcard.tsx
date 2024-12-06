
interface Blogcardprops {
    author: string;
    title: string;
    content: string;
    date: string
}

export const Blogcard = ({ author, title, content, date }: Blogcardprops) => {
    return (
        <>
        <div className=" ">
            <div className=" h-screen flex  flex-col ">
                <div className="flex" >
                    <div>
                        <Avatar name={author} />
                    </div>
                    <div className="pl-2">
                        {author}
                    </div >
                    <h1 className="pl-2">&#183;{date}</h1>
                </div>
                <div>
                    <div className=" text-xl font-semibold ">{title}</div>
                    <div className="text-md font-thin">{content.slice(0, 100) + "...."}</div>
                    <div className="text-slate-500 text-sm font-thin pt-2">
                        {`${Math.floor(content.length / 100)} minute(s) read`}
                    </div>


                </div>
                <div className="border-b-2 border-grey-900">foo</div>


            </div>


            </div>



        </>
    )




}


export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
            {name[0]}
        </span>
    </div>
}