import Link from "next/link"
import { useSession } from "next-auth/react"
import quests from "./quests.json"
import { useState } from "react"

const Create = () => {
  const quest = quests.quests
  const id = 1 + quest.length
  const {data: session}  = useSession()
  const [openobj, setOpenobj] = useState(0)
  const [obj, setObj] = useState("")
  const [oles1, setOles1] = useState(0)
  const [oles2, setOles2] = useState(0)
  const [oles3, setOles3] = useState(0)
  const [oles4, setOles4] = useState(0)
  const [les1, setLes1] = useState("")
  const [les2, setLes2] = useState("")
  const [les3, setLes3] = useState("")
  const [les4, setLes4] = useState("")
  const [aqerr, setAqerr] = useState("")

  const addQuest = async () => {
    try {
      const response = await fetch('/api/add-quest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            newQuest: {
                id: id, 
                creator: session.user.email,
                object: obj,
                task1: les1,
                task2: les2,
                task3: les3,
                task4: les4,
                complete: "Не пройдено"
            },
        }),
    });
    if (response.ok) {
      console.log('Quest added!');
    } else {
      console.error('Failed to add quest');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  window.location.href = "http://localhost:3000/components/quests"
};

    const Objectaa = () => {
        if (openobj === 1) {
            return(
                <div onClick={() => {setOpenobj(0)}} className="create_object">
                    <p onClick={() => {setObj("Математика")}} className="obj_p">Математика</p>
                    <p onClick={() => {setObj("Физика")}} className="obj_p">Физика</p>
                    <p onClick={() => {setObj("Информатика")}} className="obj_p">Информатика</p>
                </div>
            )
        }
    }

    const OpenLes1 = () => {
      if (oles1 === 1) {
        if (obj === "Математика") {
          return(
            <div onClick={() => {setOles1(0)}} className="create_object">
                <p onClick={() => {setLes1("math1")}} className="obj_p">Тип 1 (действия с числами)</p>
                <p onClick={() => {setLes1("math5")}} className="obj_p">Тип 2 (треугольники)</p>
            </div>
          )
        } else if (obj === "Физика") {
          return(
            <div onClick={() => {setOles1(0)}} className="create_object">
                <p onClick={() => {setLes1("phys1")}} className="obj_p">Тип 1 (законы Ньютона)</p>
                <p onClick={() => {setLes1("phys5")}} className="obj_p">Тип 2 (газы)</p>
            </div>
          )
        } {
          return(
            <div onClick={() => {setOles1(0)}} className="create_object">
                <p onClick={() => {setLes1("info1")}} className="obj_p">Тип 1 (логика)</p>
                <p onClick={() => {setLes1("info5")}} className="obj_p">Тип 2 (алгоритмы)</p>
            </div>
          )
        }
      }
    }

    const OpenLes2 = () => {
      if (oles2 === 1) {
        if (obj === "Математика") {
          return(
            <div onClick={() => {setOles2(0)}} className="create_object">
                <p onClick={() => {setLes2("math2")}} className="obj_p">Тип 1 (действия с числами)</p>
                <p onClick={() => {setLes2("math6")}} className="obj_p">Тип 2 (треугольники)</p>
            </div>
          )
        } else if (obj === "Физика") {
          return(
            <div onClick={() => {setOles2(0)}} className="create_object">
                <p onClick={() => {setLes2("phys2")}} className="obj_p">Тип 1 (законы Ньютона)</p>
                <p onClick={() => {setLes2("phys6")}} className="obj_p">Тип 2 (газы)</p>
            </div>
          )
        } {
          return(
            <div onClick={() => {setOles2(0)}} className="create_object">
                <p onClick={() => {setLes2("info2")}} className="obj_p">Тип 1 (логика)</p>
                <p onClick={() => {setLes2("info6")}} className="obj_p">Тип 2 (алгоритмы)</p>
            </div>
          )
        }
      }
    }

    const OpenLes3 = () => {
      if (oles3 === 1) {
        if (obj === "Математика") {
          return(
            <div onClick={() => {setOles3(0)}} className="create_object">
                <p onClick={() => {setLes3("math3")}} className="obj_p">Тип 1 (действия с числами)</p>
                <p onClick={() => {setLes3("math7")}} className="obj_p">Тип 2 (треугольники)</p>
            </div>
          )
        } else if (obj === "Физика") {
          return(
            <div onClick={() => {setOles3(0)}} className="create_object">
                <p onClick={() => {setLes3("phys3")}} className="obj_p">Тип 1 (законы Ньютона)</p>
                <p onClick={() => {setLes3("phys7")}} className="obj_p">Тип 2 (газы)</p>
            </div>
          )
        } {
          return(
            <div onClick={() => {setOles3(0)}} className="create_object">
                <p onClick={() => {setLes3("info3")}} className="obj_p">Тип 1 (логика)</p>
                <p onClick={() => {setLes3("info7")}} className="obj_p">Тип 2 (алгоритмы)</p>
            </div>
          )
        }
      }
    }

    const OpenLes4 = () => {
      if (oles4 === 1) {
        if (obj === "Математика") {
          return(
            <div onClick={() => {setOles4(0)}} className="create_object">
                <p onClick={() => {setLes4("math4")}} className="obj_p">Тип 1 (действия с числами)</p>
                <p onClick={() => {setLes4("math8")}} className="obj_p">Тип 2 (треугольники)</p>
            </div>
          )
        } else if (obj === "Физика") {
          return(
            <div onClick={() => {setOles4(0)}} className="create_object">
                <p onClick={() => {setLes4("phys4")}} className="obj_p">Тип 1 (законы Ньютона)</p>
                <p onClick={() => {setLes4("phys8")}} className="obj_p">Тип 2 (газы)</p>
            </div>
          )
        } {
          return(
            <div onClick={() => {setOles4(0)}} className="create_object">
                <p onClick={() => {setLes4("info4")}} className="obj_p">Тип 1 (логика)</p>
                <p onClick={() => {setLes4("info8")}} className="obj_p">Тип 2 (алгоритмы)</p>
            </div>
          )
        }
      }
    }

    const Leasons = () => {
      if (obj === "") {
        return(
          <div>
            <button onClick={() => {setOpenobj(1)}} className="button_obj">Выберите предмет 🡣</button>
            <Objectaa/>
          </div>
        )
      } {
        return(
          <div>
            <button onClick={() => {setOles1(1)}} className="button_obj">Выберите Задание 1 🡣</button>
            <OpenLes1/>
            <h1/>
            <button onClick={() => {setOles2(1)}} className="button_obj">Выберите Задание 2 🡣</button>
            <OpenLes2/>
            <h1/>
            <button onClick={() => {setOles3(1)}} className="button_obj">Выберите Задание 3 🡣</button>
            <OpenLes3/>
            <h1/>
            <button onClick={() => {setOles4(1)}} className="button_obj">Выберите Задание 4 🡣</button>
            <OpenLes4/>
          </div>
        )
      }
    }

    const Addquest = () => {
      if (les1 === "" | les2 === "" | les3 === "" | les4 === "" | obj === "") {
        setAqerr("Выберите задания и предмет перед сохранением квеста")
      } else {
        addQuest()
      }
    }

    return(
      <div>
        <div className="header">
          <Link href="/components/quests" className="link">Назад</Link>
        </div>
        <div className="quests_div_osn">
            <div className="create_div">
              <div className="create_div2">
                <div>
                  <Leasons/>
                </div>
                <div className="aqerr">
                  <button onClick={() => {Addquest()}} className="create_text_button">Сохранить</button>
                  <p className="aqerrp">{aqerr}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Create