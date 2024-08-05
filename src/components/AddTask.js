import { useState, useRef } from "react"
import "./AddTask.css"

export const AddTask = ({ tasks, setTasks }) => {
    const taskRef = useRef("")
    const [progress, setProgress] = useState(false)

    const handleReset = () => {
        taskRef.current.value = ""
        setProgress(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskRef.current.value,
            completed: Boolean(progress)
        }
        setTasks([...tasks, task])
        handleReset()
    }

  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" ref={taskRef} />
            <select onChange={e => setProgress(e.target.value)} value={progress}>
                <option value="false">Pending</option>
                <option value="true">Completed</option>
            </select>
            <span className="reset" onClick={handleReset}>Reset</span>
            <button type="submit">Add Task</button>
        </form>
    </section>
  )
}
