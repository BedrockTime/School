import Link from "next/link"
import { useState } from "react"

const Task7 = () => {
    const [answer, newAnswer] = useState("")
    const [pr, newPr] = useState(0)
    const id = localStorage.getItem("id")

    const updateTaskCompletion = async (isCorrect) => {
        try {
          const response = await fetch("/api/update-tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: `math3`, value: isCorrect ? 1 : 0 }),
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
        } else {
            if (answer === "3") {
                updateTaskCompletion(true)
                return(
                    <div>
                        <h1 className="task_h1">Правильно</h1>
                        <Link href={`../${id}`} className="tasklink">Назад</Link>
                    </div>
                )
            } else {
                updateTaskCompletion(false)
                return(
                    <div>
                        <h1 className="task_h1">Не правильно, правильный ответ под номером: 3</h1>
                        <Link href={`../${id}`} className="tasklink">Назад</Link> 
                    </div>
                )
            }
        }
    }

    return(
      <div className="tm_osn_divФизика">
        <div className="task1_div">
            <div>
                <h1 className="task_h1">Вопрос</h1>
                <p className="task_p">Какой процесс происходит без теплообмена с окружающей средой?</p>
                <p className="task_p2">1) Изотермический</p>
                <p className="task_p2">2) Изобарный</p>
                <p className="task_p2">3) Адиабатный</p>
                <p className="task_p2">4) Изохорный</p>
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
  
  export default Task7