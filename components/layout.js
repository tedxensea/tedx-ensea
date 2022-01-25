
import Head from "next/head"

export default function Layout({ children }) {
    return (
        <div className="antialised text-slate-400 bg-neutral-900 w-full h-full">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mb-20 space-y-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
                {children}
            </div>
        </div>
    )
}