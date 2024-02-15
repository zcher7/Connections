export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Connections</a>
        <ul>
            <li>
                <a href="/viewer">Board</a>
            </li>
            <li>
                <a href="/queries">Packs</a>
            </li>
            <li>
                <a href="/viewer">Settings</a>
            </li>
        </ul>
    </nav>
}