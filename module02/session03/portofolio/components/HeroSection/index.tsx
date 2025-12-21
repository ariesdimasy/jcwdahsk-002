import style from "./HeroSection.module.css"

export default function HeroSection(){
    return(<section className={style.heroSection}>
        <div className={style.leftSection}>
            <img src="https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/b8e4cd8edb975d23bc21cb8a/4131j-min.jpg" alt="photo"
                height={'100%'}
            />
        </div>
        <div className={style.rightSection}>
            <div className={style.hello}> HELLO </div>
            <div className={style.introduction}> Iam Aries Dimas , a Web Designer </div>
            <div className={style.freepik}> IMAGE from FREE PIK</div>
            <a className={style.readMore} href="#"> READ MORE </a>
        </div>
    </section>)
}