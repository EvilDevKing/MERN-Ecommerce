export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {

    const handleEdit = (id) => {
        const selectedTask = tasklist.find(t => t.id === id)
        setTask(selectedTask)
    }

    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter(t => t.id !== id)
        setTasklist(updatedTaskList)
    }

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{tasklist.length}</span>
            </div>
            <button onClick={() => setTasklist([])} className="clearAll">Clear All</button>
        </div>
        <ul>
            { tasklist.map((t) => (
                <li key={t.id}>
                    <p>
                        <span className="name">{t.name}</span>
                        <span className="time">{t.time}</span>
                    </p>
                    <i onClick={() => handleEdit(t.id)} className="bi bi-pencil-square"></i>
                    <i onClick={() => handleDelete(t.id)} className="bi bi-trash"></i>
                </li>
            )) }
        </ul>
    </section>
  )
}
