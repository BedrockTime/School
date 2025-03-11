import { useState } from "react"

const Registr = () => {
    const [clas, setClass] = useState("div1")
    const [clas2, setClass2] = useState("div4")

    const Smena = () => {
        setClass("div2")
        setClass2("div3")
    }

    const Smena2 = () => {
        setClass("div1")
        setClass2("div4")
    }

    return(
        <div className="backgr_div">
            <div className="backgr"/>
            <div className="onbckg">
                <h2 className="reg_text_h2">Войдите,  чтобы  начать</h2>
                <h1 className="reg_text_h1">Создавайте собственные квесты</h1>
                <div className="reg_str_div">
                    <div className="reg_str_text_div">
                        <div className={clas} onClick={() => {Smena()}}>
                            <h1 className="reg_str_text_h1">ВХОД</h1>
                        </div>
                        <div className={clas2} onClick={() => {Smena2()}}>
                            <h1 className="reg_str_text_h1">РЕГИСТРАЦИЯ</h1>
                        </div>
                    </div>
                    <p className="reg_str_text_p">Ваш E-mail</p>
                    <input className="input"/>
                    <p className="reg_str_text_p">Ваш пароль</p>
                    <input className="input"/>
                </div>
            </div>
        </div>
    )
}

export default Registr