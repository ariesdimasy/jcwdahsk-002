import style from "./Navbar.module.css";

export default function Navbar() {

    return (
        <nav className={style.navbar}>
            <ul>
                <li><a href="/">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/todo">Todo</a></li>
              
            </ul>
            <div className={style.emailDisplay}>
                Email : {localStorage.getItem('isLoggedIn') === 'true' ? localStorage.getItem('email') : 'Not logged in'}
            </div>
        </nav>
    )
}