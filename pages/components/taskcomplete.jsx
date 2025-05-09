import Link from "next/link"
import tasks from "./tasks.json"

const TaskComplete = () => {
    let task_1 = tasks.tasks.task1
    let task_2 = tasks.tasks.task2
    let task_3 = tasks.tasks.task3
    let task_4 = tasks.tasks.task4

    if (task_1 === null) {
        task_1 = 0
    }

    if (task_2 === null) {
        task_2 = 0
    }

    if (task_3 === null) {
        task_3 = 0
    }

    if (task_4 === null) {
        task_4 = 0
    }
    const compl = task_1 + task_2 + task_3 + task_4

    const updateTaskCompletion1 = async () => {
        try {
          const response = await fetch("/api/update-tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: `task1`, value: null }),
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

      const updateTaskCompletion2 = async () => {
        try {
          const response = await fetch("/api/update-tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: `task2`, value: null}),
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

      const updateTaskCompletion3 = async () => {
        try {
          const response = await fetch("/api/update-tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: `task3`, value: null}),
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

      const updateTaskCompletion4 = async () => {
        try {
          const response = await fetch("/api/update-tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: `task4`, value: null}),
          });
    
          if (response.ok) {
            console.log(`Task 3 updated successfully!`);
          } else {
            console.error(`Failed to update task 4:`, response.status);
          }
        } catch (error) {
          console.error(`Error sending request for task 4:`, error);
        }
      };

      const kostil = () =>{
        updateTaskCompletion1()
        updateTaskCompletion2()
        updateTaskCompletion3()
        updateTaskCompletion4()
      }

    return(
      <div className="tm_osn_div">
        <div className="task1_div">
            <div>
                <h1 className="task_h1">Спасибо тебе огромное!</h1>
                <h1 className="task_h1">Обязательно воспользуюсь этими штуками.</h1>
                <h1 className="task_h1">С меня ответы на К/Р по истории :)</h1>
            </div>
            <div className="task_answer_main">
                <h1 className="task_h1">Результат: {compl} из 4</h1>
                <Link href="/" onClick={() => {kostil()}} className="compllink">Назад</Link>
            </div>
        </div>
      </div>
    )
  }
  
  export default TaskComplete