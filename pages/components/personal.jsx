import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from "react"
import Rename from "./rename"

const Personal = () => {
    const {data: session}  = useSession()
    
    if (session) {
        return(
            <div>
                <div className="header">
                  <Link href="/" className="link">Назад</Link>
                  <p onClick={() => signOut()} className="link">Выйти</p>
                </div>
                <div className="div_per_osn">
                    <h2 className="per_h1">Личный кабинет</h2>
                    <div className="per_content_div">
                        <div className="content_swap">
                            <Link className="per_link" href="/components/create">Создать квест</Link>
                        </div>
                        <div className="contentper_div">
                            <div className="per_div">
                                <img src={session.user.image}/>
                                <div>
                                    <h1 className="per_h1">{localStorage.getItem("name") === null | localStorage.getItem("name") === "" ? `Имя` : localStorage.getItem("name")} {localStorage.getItem("surname") === null | localStorage.getItem("surname") === "" ? `Фамилия` : localStorage.getItem("surname")}</h1>
                                </div>
                            </div>
                            <Rename/>
                            <p className="per_p">Электронная почта: {session.user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } {
      return (
        <div>
            <div className="header">
                <Link href="/" className="link">Назад</Link>
            </div>
            <div className="logtext_div">
                <h1 className="logtext">Вы не вошли в аккаунт</h1>
                <button className="logbutton_div" onClick={() => signIn()}>Войти</button>
            </div>
        </div>
      )
    }
}

export default Personal