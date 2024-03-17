
import Each from "./common/Each"
import { USP } from "./data/data"

const USSP = () => {
    return (
        <div className="min-h-[500px] h-auto">
            <div className='flex  flex-col items-center justify-center mt-12'>
                <h1 className="font-semibold text-4xl md:text-3xl sm:text-xl">Tenati<span className="text-gradient">ous</span> <span className="border-b-2 border-brand text-gradient">USP</span></h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-6  place-items-center items-stretch gap-4  mt-12">
                <Each of={USP} render={(item) =>
                    <div className="shadow-lg w-[240px] border ring-1 ring-brand dark:bg-dark rounded-lg bg-white px-6 py-2 flex flex-col justify-center items-center">
                        <div className="shadow-lg w-[70px] h-[70px] flex items-center justify-center rounded-full   bg-purple-100 dark:bg-slate-800">
                            {item.icon}
                        </div>
                        <h4 className="font-muted mt-6 text-md text-center text-black  dark:text-white">{item.name}</h4>
                    </div>} />
            </div>
        </div>
    )
}

export default USSP