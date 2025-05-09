import { useState } from "react"

const Rename = () => {
    const [name, setName] = useState(`${localStorage.getItem("name")}`)
    const [surname, setSurname] = useState(`${localStorage.getItem("surname")}`)
    const [rename, setRename] = useState(0)

    const Save = () => {
        localStorage.setItem("name", `${name}`)
        localStorage.setItem("surname", `${surname}`)
        window.location.reload()
    }

    if (rename === 1) {
        return(
            <div className="ren_div">
                <div>
                    <input value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Имя" className="input"/>
                    <input value={surname} onChange={(e) => {setSurname(e.target.value)}} placeholder="Фамилия" className="input"/>
                </div>
                <div>
                    <button onClick={() => {Save()}} className="ren_button">Сохранить</button>
                    <button onClick={() => {setRename(0)}} className="ren_button">Отмена</button>
                </div>
            </div>
        )
    } {
        return(
            <button onClick={() => {setRename(1)}} className="ren_button2">Изменить имя/фамилию</button>
        )
    }
}

export default Rename