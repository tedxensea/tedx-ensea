
import Link from "next/link"

function Controls() {
    return (
        <div className="gn-controls">
            <button className="gn-toggle">
                <span className="gn-toggle-icon">
                    <span className="gn-toggle-icon-line gn-toggle-icon-line--top"></span>
                    <span className="gn-toggle-icon-line gn-toggle-icon-line--bottom"></span>
                </span>
            </button>
        </div>
    )
}

function Logo() {
    return (
        <div className="gn-logo">
            <Link href="/">
                <a className="gn-logo-link">
                    <span className="gn-logo-shape"></span>
                </a>
            </Link>
        </div>
    )
}

function Persistent(props) {
    return (
        <div className="gn-persistent">
            <ul className="gn-persistent-actions">
                {props.children}
            </ul>
        </div>
    )
}

function Page(props) {
    return (
        <li className="gn-item">
            <a href={props.url} className="gn-link">{props.name}</a>
        </li>
    )
}

function Checkout(props) {
    return (
        <li className="gn-item gn-item--cta">
            <a href="#" className="button button--primary button--compact">{props.name}</a>
        </li>
    )
}

function List(props) {
    return (
        <div className="gn-list">
            <ul className="gn-list-pages">
                <Page
                    name="Evénements"
                    url="#"
                />
                <Page
                    name="Intervenants"
                    url="#"
                />
                <Page
                    name="Equipe"
                    url="#"
                />
            </ul>
            <div className="gn-list-auth">
                <ul className="gn-list-auth-actions">
                    <Page
                        name="Actualités"
                        url="#" />
                    <Checkout
                        name="Billetterie"
                    />
                </ul>
            </div>
        </div>
    )
}

export default function GlobalNav() {
    return (
        <nav className="globalnav gn--transparent">
            <div className="gn-content">
                <div className="gn-header">
                    <Controls />
                    <Logo />
                    <Persistent>
                        
                    </Persistent>
                </div>
                <List />
            </div>
        </nav>
    )
}