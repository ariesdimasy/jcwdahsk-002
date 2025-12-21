import style from "./Navbar.module.css"

export default function Navbar(){
    return (<nav className={style.navbar}>
        <ul>
            <li>
                <a href="#"> Home </a>
            </li>
            <li>
                <a href="#"> Service </a>
            </li>
        </ul>
    </nav>)
}