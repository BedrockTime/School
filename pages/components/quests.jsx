import { useSession, signIn} from "next-auth/react"
import Link from 'next/link'
import quests from "./quests.json"
import { useEffect, useState } from "react"

const Quests = () => {
    const {data: session}  = useSession()
    const quest = quests.quests
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    useEffect(() => {
        const locname = localStorage.getItem("name")
        setName(locname)
    }, [])

    useEffect(() => {
        const locsurname = localStorage.getItem("surname")
        setSurname(locsurname)
    }, [])

    const QuestNames = quest.map((quest) =>
    <div className="quests_div_props">
        <div className="quests_div_props2">
            <p className="quests_p">{name} {surname}</p>
            <p className="quests_p">{quest.object}</p>
        </div>
        <Link className="linkquests" href={`/components/${quest.id}`}>Перейти</Link>
        <p className="quests_p">{quest.complete}</p>
    </div>)

    if (session) {
        return(
            <div>
                <div className="header">
                  <Link href="/" className="link">Назад</Link>
                </div>
                <div className="quests_div_osn">
                    <div className="quests_div">
                        <div className="quests_div1">
                            <p>создатель</p>
                            <p>предмет</p>
                        </div>
                        {QuestNames}
                        <Link href="/components/create" className="header_text_button">Создать квест</Link>
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

export default Quests