
export default function GlobalNav() {
    return (
        <nav className="globalnav gn--transparent">
            <div className="gn-content">
                <div className="gn-header">
                    <div className="gn-controls">
                        <button className="gn-toggle">
                            <span className="gn-toggle-icon">
                                <span className="gn-toggle-icon-line gn-toggle-icon-line--top"></span>
                                <span className="gn-toggle-icon-line gn-toggle-icon-line--bottom"></span>
                            </span>
                        </button>
                    </div>
                    <div className="gn-logo">
                        <a className="gn-logo-link" href="#" title="Se rendre à l'accueil">
                            <span className="gn-logo-shape"></span>
                            
                        </a>
                    </div>
                    <div className="gn-persistent">
                        <ul className="gn-persistent-actions">
                            <li className="gn-item">
                                <a className="gn-link" href="#">Se connecter</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="gn-list">
                    <ul className="gn-list-pages">
                        <li className="gn-item">
                            <a href="#" className="gn-link">Editions</a>
                        </li>
                        <li className="gn-item">
                            <a href="#" className="gn-link">Speakers</a>
                        </li>
                        <li className="gn-item">
                            <a href="#" className="gn-link">Equipe</a>
                        </li>
                    </ul>
                    <div className="gn-list-auth">
                        <ul className="gn-list-auth-actions">
                            <li className="gn-item gn-item--persistent">
                                <a href="#" className="gn-link gn-link--action">Se connecter</a>
                            </li>
                            <li className="gn-item gn-item--cta">
                                <a href="#" className="button button--primary button--compact">Billetterie</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}