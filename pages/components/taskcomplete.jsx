import Link from "next/link"
import tasks from "./tasks.json"
import quests from "./quests.json"

const TaskComplete = () => {
  let task_1 = tasks.tasks.math1
  let task_2 = tasks.tasks.math2
  let task_3 = tasks.tasks.math3
  let task_4 = tasks.tasks.math4
  const quest = quests.quests[localStorage.getItem("id")-1]
  const classtag = quest.object

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
        body: JSON.stringify({ task: `math1`, value: null }),
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
          body: JSON.stringify({ task: `math2`, value: null}),
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
          body: JSON.stringify({ task: `math3`, value: null}),
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
          body: JSON.stringify({ task: `math4`, value: null}),
        });
  
        if (response.ok) {
          console.log(`Task 4 updated successfully!`);
        } else {
          console.error(`Failed to update task 4:`, response.status);
        }
      } catch (error) {
        console.error(`Error sending request for task 4:`, error);
      }
    };

  const updateCompletionStatus = async (questId, newStatus) => {
    try {
      const response = await fetch("/api/update-quest", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questId: questId,
          newCompletionStatus: newStatus,
        }),
      });

      if (response.ok) {
        console.log('Completion status updated!');
      } else {
        console.error('Failed to update completion status');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

    const kostil = () =>{
      updateTaskCompletion1()
      updateTaskCompletion2()
      updateTaskCompletion3()
      updateTaskCompletion4()
      updateCompletionStatus(localStorage.getItem("id"), "Выполнено")
      localStorage.setItem("id", null)
    }

    const Complete = () => {
      if (compl < 4) {
        return(
          <div>
              <h1 className="task_h1">Ой... Не все задания решены верно.</h1>
              <h1 className="task_h1">Повтори тему и попробуй еще раз</h1>
          </div>
        )
      } {
        return(
          <div>
              <h1 className="task_h1">Класс!</h1>
              <h1 className="task_h1">Все предметы найдены!</h1>
              <h1 className="task_h1">Ты гений!</h1>
          </div>
        )
      }
    }

    return(
      <div className={`tm_osn_div${classtag}`}>
        <div className="task1_div">
            <Complete/>
            <div className="task_answer_main">
                <h1 className="task_h1">Результат: {compl} из 4</h1>
                <Link href="/components/quests" onClick={() => {kostil()}} className="compllink">Назад</Link>
            </div>
        </div>
      </div>
    )
  }
  
  export default TaskComplete