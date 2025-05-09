import Link from "next/link"
import tasks from "./tasks.json"

const Taskmain = () => {
  const Task1 = () => {
    if (tasks.tasks.task1 === null) {
      return(
        <Link href="./tasks/math1" className="l1"/>
      )
    }
  }

  const Task2 = () => {
    if (tasks.tasks.task2 === null) {
      return(
        <Link href="./tasks/math2" className="l2"/>
      )
    }
  }

  const Task3 = () => {
    if (tasks.tasks.task3 === null) {
      return(
        <Link href="./tasks/math3" className="l3"/>
      )
    }
  }

  const Task4 = () => {
    if (tasks.tasks.task4 === null) {
      return(
        <Link href="./tasks/math4" className="l4"/>
      )
    }
  }

  return(
    <div className="tm_osn_div">
      <div className="dimka">
        <p className="dimka_p">Привет! Помоги мне найти предметы для самостоятельной работе. Где искать я указал на интерфейсе</p>
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
      <Link href="/components/taskcomplete" className="taskmainlink">Завершить</Link>
    </div>
  )
}
  
  export default Taskmain