import Link from "next/link"
import { useState } from "react"

const Task1 = () => {
    const [answer, newAnswer] = useState("")
    const [pr, newPr] = useState(0)

    const updateTaskCompletion = async (isCorrect) => {
        try {
          const response = await fetch("/api/update-tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: `task1`, value: isCorrect ? 1 : 0 }),
          });
    
          if (response.ok) {
            console.log(`Task 1 updated successfully!`);
          } else {
            console.error(`Failed to update task 1:`, response.status);
          }
        } catch (error) {
          console.error(`Error sending request for task 1:`, error);
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
            if (answer.toLowerCase() === "уравнение") {
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
                        <h1 className="task_h1">Не правильно, правильный ответ: уравнение</h1>
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
                <p className="task_p">Что является равенством, содержащим неизвестное значение, которое надо найти?</p>
            </div>
            <div className="task_answer_main">
                <div className="task_answer">
                    <h1 className="task_h1">Ответ:</h1>
                    <input value={answer} onChange={(e) => {newAnswer(e.target.value)}} className="input_task"/>
                </div>
                <Answerpr/>
            </div>
        </div>
      </div>
    )
  }
  
  export default Task1