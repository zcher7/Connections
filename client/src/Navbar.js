export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Connections</a>
        <ul>
            <li>
                <a href="/board">Board</a>
            </li>
            <li>
                <a href="/packs">Packs</a>
            </li>
            <li>
                <a href="/settings">Settings</a>
            </li>
        </ul>
    </nav>
}