import Link from "next/link"
import tasks from "./tasks.json"
import {useRouter} from 'next/router'
import quests from "./quests.json"
import { useEffect } from "react"

const Taskmain = () => {
  const router = useRouter()
  const {id} = router.query
  const quest = quests.quests[id-1]
  const classtag = quest.object

  useEffect(() => {
    localStorage.setItem("id", id)
  }, [])

  const Task1 = () => {
    if (tasks.tasks.math1 === null) {
      return(
        <Link href={`./tasks/${quest.task1}`} className={`l1${classtag}`}/>
      )
    }
  }

  const Task2 = () => {
    if (tasks.tasks.math2 === null) {
      return(
        <Link href={`./tasks/${quest.task2}`} className={`l2${classtag}`}/>
      )
    }
  }

  const Task3 = () => {
    if (tasks.tasks.math3 === null) {
      return(
        <Link href={`./tasks/${quest.task3}`} className={`l3${classtag}`}/>
      )
    }
  }

  const Task4 = () => {
    if (tasks.tasks.math4 === null) {
      return(
        <Link href={`./tasks/${quest.task4}`}  className={`l4${classtag}`}/>
      )
    }
  }

  return(
    <div className={`tm_osn_div${classtag}`}>
      <div className="dimka">
        <p className="dimka_p">Привет! Помоги мне найти предметы для самостоятельной работы. Где искать я указал на дисплее. Правильно решишь задачу - найдешь предмет.</p>
        <div className="yourphonlinging">
          <div className="yourphonlinging">
            <div className="student_png"/>
            <p className="dimka_p2">Димка</p>
          </div>
          <div className="mobile_png"/>
        </div>
      </div>
      <Task1/>
      <Task2/>
      <Task3/>
      <Task4/>
      <Link href={`/components/taskcomplete`} className="taskmainlink">Завершить</Link>
    </div>
  )
}
  
  export default Taskmain