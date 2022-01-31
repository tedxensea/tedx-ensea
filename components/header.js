/*

    HeroSection

*/

import Link from "next/link";

function Content({ children }) {
    return (
        <div className="lg:container mx-auto">
            {children}
        </div>
    )
}

function Hero(props) {
    return (
        <h1>{props.headline}</h1>
    )
}

export default function Header({ children }) {
    return (
        <header className="w-full">
            <Content>
                <Hero
                    eyebrow="Notre prochain événement"
                    headline="ESCAPE"
                    date="5 février 2022"
                    location="Auditorium de l'IPSL"
                    cta_checkout_url="#"
                />
            </Content>
        </header>
    )
}