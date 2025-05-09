import Link from "next/link"
import { useState } from "react"

const Task3 = () => {
    const [answer, newAnswer] = useState("")
    const [pr, newPr] = useState(0)

    const updateTaskCompletion = async (isCorrect) => {
        try {
          const response = await fetch("/api/update-tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: `task3`, value: isCorrect ? 1 : 0 }),
          });
    
          if (response.ok) {
            console.log(`Task 3 updated successfully!`);
          } else {
            console.error(`Failed to update task 3:`, response.status);
          }
        } catch (error) {
          console.error(`Error sending request for task 3:`, error);
        }
      };

    const Answerpr = () => {
        if (pr === 0) {
            return(
                <div className="task_answer_pr" onClick={() => { newPr(1)}}>
                    <h1 className="task_h1">Проверить</h1>
                </div>
            )
        } {
            if (answer === "1") {
                updateTaskCompletion(true)
                return(
                    <div>
                        <h1 className="task_h1">Правильно</h1>
                        <Link href="../taskmain" className="tasklink">Назад</Link>
                    </div>
                )
            } {
                updateTaskCompletion(false)
                return(
                    <div>
                        <h1 className="task_h1">Не правильно, правильный ответ под номером: 1</h1>
                        <Link href="../taskmain" className="tasklink">Назад</Link> 
                    </div>
                )
            }
        }
    }

    return(
      <div className="tm_osn_div">
        <div className="task1_div">
            <div>
                <h1 className="task_h1">Вопрос</h1>
                <p className="task_p">За что отвечает коэффициент b в квадратном уравнении вида ax²+bx+c?</p>
                <p className="task_p2">1) смещение параболы влево право по x</p>
                <p className="task_p2">2) смещение параболы вверх вниз по y</p>
                <p className="task_p2">3) направление ветвей параболы</p>
                <p className="task_p2">4) ширина параболы</p>
            </div>
            <div className="task_answer_main">
                <div className="task_answer">
                    <h1 className="task_h1">Ответ под номером:</h1>
                    <input value={answer} onChange={(e) => {newAnswer(e.target.value)}} className="input_task"/>
                </div>
                <Answerpr/>
            </div>
        </div>
      </div>
    )
  }
  
  export default Task3