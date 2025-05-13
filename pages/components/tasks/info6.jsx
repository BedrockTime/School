import Link from "next/link"
import { useState } from "react"

const Task6 = () => {
    const [answer, newAnswer] = useState(null)
    const [pr, newPr] = useState(0)
    const id = localStorage.getItem("id")

    const updateTaskCompletion = async (isCorrect) => {
        try {
          const response = await fetch("/api/update-tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: `math2`, value: isCorrect ? 1 : 0 }),
          });
    
          if (response.ok) {
            console.log(`Task 2 updated successfully!`);
          } else {
            console.error(`Failed to update task 2:`, response.status);
          }
        } catch (error) {
          console.error(`Error sending request for task 2:`, error);
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
            if (answer === "1") {
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
                        <h1 className="task_h1">Не правильно, правильный ответ: 1</h1>
                        <Link href={`../${id}`} className="tasklink">Назад</Link> 
                    </div>
                )
            }
        }
    }

    return(
      <div className="tm_osn_divИнформатика">
        <div className="task1_div">
            <div>
                <h1 className="task_h1">Задача</h1>
                <p className="task_p">Чему равно значение выражения (1 AND 0) OR (NOT 0) в двоичной системе?</p>
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
  
  export default Task6