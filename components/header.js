
export default function Header(props) {
    return (
        <div className="relative">
            <div className="px-4 sm:px-6 md:px-8">
                <p className="text-base leading-6 font-semibold text-center dark:text-red-600">
                    Edition {props.edition}
                </p>
                <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
                    {props.title}
                </h1>
                <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                    {props.description}
                </p>
                <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
                    <a class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-red-600 dark:highlight-white/20 dark:hover:bg-red-500" href="/docs/installation">
                        Participer à l'événement
                    </a>
                </div>
            </div>
        </div>
    )
}