import './Footer.css'

export function Footer() {
    return (<footer>
        <ul>
            <li class="link" id="find_me">find me in:</li>

            <li class="link" id="twitter">
                <a href="https://twitter.com/IMutafchev" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </li>
            <li class="link" id="facebook">
                <a href="https://www.facebook.com/Smiley.Shady" target="_blank">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
            </li>

            <li class="link" id="blank_bottom">
            </li>
            <li class="link" id="github">
                <a href="https://github.com/ismailmutafchev" target="_blank">@ismailmutafchev
                    <i class="fa-brands fa-github"></i>
                </a>
            </li>
        </ul>
    </footer>)
}