
export default function Section(props) {
    return (
        <section className="w-full">
        <div className="pt-20 mb-20 space-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:space-y-32 md:pt-40 md:mb-40 md:space-y-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
                    {props.title}
                </h2>
                <p className="mt-4 max-w-3xl space-y-6 ">
                    {props.description}
                </p>
                {props.children}
            </div>
        </div>
        </section>
    )
}