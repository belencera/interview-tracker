import './Header.css'
import logo from '../assets/logo.png'

function Header() {
    return (
        <header className="app-header">
            <img src={logo} alt="Interview Tracker Logo" className="logo" />
            <div className="header-content">
                <h1>Interview Tracker</h1>
                <h2>Haz el seguimiento de todas tus candidaturas de forma sencilla</h2>
            </div>
        </header>
    )
}

export default Header
