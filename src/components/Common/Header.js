import './Header.scss'
import { Link } from 'react-router-dom'

export function Header({selected}) {
    return (
        <header>
            <nav>
                <ul>
                    <li className={selected==='home' ? 'link selected': 'link'} id="nav_name">
                        <Link to="/"> ismail-mutafchev</Link></li>

                    <li className={selected==='about' ? 'link selected': 'link'} id="nav_about-me">
                        <Link to="/about"> _about-me</Link></li>

                    <li className={selected==='projects' ? 'link selected': 'link'} id="nav_projects">
                        <Link to="/projects"> _projects</Link></li>

                    <li className='link' id="nav-blank">
                        <Link to="/"> </Link></li>

                    <li className={selected==='contact' ? 'link selected': 'link'} id="nav_contact">
                        <Link to="/contact" _contact-me> Contact</Link></li>
                </ul>
            </nav>
        </header>)
}