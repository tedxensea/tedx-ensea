
import Link from "next/link";
import React, { useState } from "react";


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
            <a href="https://ted-x-ensea.herokuapp.com/checkout" className="button button--primary button--compact">{props.name}</a>
        </li>
    )
}

function List(props) {

    const isActive = props.isActive;

    const divClasses = "gn-list"
    if (isActive) {
        divClasses += " is-active"
    }

    return (
        <div className={divClasses}>
            <ul className="gn-list-pages">
                <Page
                    name="Evénement"
                    url="#event"
                />
                <Page
                    name="Speakers"
                    url="#speakers"
                />
                <Page
                    name="Equipe"
                    url="#team"
                />
            </ul>
            <div className="gn-list-auth">
                <ul className="gn-list-auth-actions">
                    <Checkout
                        name="Billetterie"
                    />
                </ul>
            </div>
        </div>
    )
}

export default function GlobalNav() {

    const [isActive, toggle] = useState(false);

    function Controls(props) {
    
        const topIconClasses = "gn-toggle-icon-line gn-toggle-icon-line--top";
        const bottomIconClasses = "gn-toggle-icon-line gn-toggle-icon-line--bottom";
    
        if (isActive) {
            topIconClasses += " is-active"
            bottomIconClasses += " is-active"
        }
    
        return (
            <div className="gn-controls">
                <button className="gn-toggle" onClick={() => toggle(!isActive)}>
                    <span className="gn-toggle-icon">
                        <span className={topIconClasses}></span>
                        <span className={bottomIconClasses}></span>
                    </span>
                </button>
            </div>
        )
    }

    return (
        <nav className="globalnav gn--transparent">
            <div className="gn-content">
                <div className="gn-header is-active">
                    <Controls
                        isActive={isActive}
                    />
                    <Logo />
                    <Persistent>       
                    </Persistent>
                </div>
                <List
                    isActive={isActive}
                />
            </div>
        </nav>
    )
}