import './Header.css'
import {Link} from 'react-router-dom'

export function Header(params) {
   return(
    <header>
       <nav>
           <ul>
               <li class="link" id="nav_name"><Link to="/"> ismail-mutafchev</Link></li>
               <li class="link" id="nav_hello"><Link to="/hello"> _hello</Link></li>
               <li class="link" id="nav_about-me"><Link to="/about"> _about-me</Link></li>
               <li class="link" id="nav_projects"><Link to="/projects"> _projects</Link></li>
               <li class="link" id="nav-blank"><Link to="/"> </Link></li>
               <li class="link" id="nav_contact"><Link to="/contact"_contact-me> Contact</Link></li>
           </ul>
       </nav>
   </header>)
}