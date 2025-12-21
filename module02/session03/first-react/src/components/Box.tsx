import style from "./Box.module.css"

export default function Box (){
    return (<div className={style.box}>
        BOX
        <div className={style['my-section']} ></div>
    </div>)
}