import { Container } from "react-bootstrap"
import { formattedDate } from "../utils/timeDateFormat"
import TaskCard from "../components/task/taskCard"
import TaskPendingHistory from "../components/task/taskPendingHistory"
import TaskCompletedHistory from "../components/task/completed/taskCompletedHistory"
import { useEffect, useState } from "react"
import TaskCanvas from "../offcanvas/taskCanvas"
import { useTaskContext } from "../components/context/taskContext"
import { alertError } from "../config/toast"
import { completedTask, deleteTask, getTask } from "../axios/api"

function Task() {
    const { show, handleClose, edit, handleShow, handleSetEditOrAdd, renderTask, setRenderTask } = useTaskContext()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    // add function
    const onDelete = async (id) => {
        try {
            setIsLoading(true)
            await deleteTask(id)

            setIsLoading(false)
            getAllTask()
        } catch (error) {
            setIsLoading(false)
            alertError(error)

        }
    }
    // update completed task
    const onCompleteTask = async (id, status) => {
        try {
            const resp = await completedTask(id, status)
            if (resp?.status === 201) {
                setRenderTask(Math.random())
            }
            getAllTask()
        } catch (error) {
            alertError(error)
        }
    }
    const getAllTask = async () => {
        try {
            const task = await getTask();
            setData(task?.data)
        } catch (error) {
            alertError(error)
        }
    }

    useEffect(() => {
        getAllTask()
    }, [show, renderTask])


    return (
        <Container className="position-relative top-0">
            <h2>Today <span className="text-primary">Task ({data?.count ?? 0}/{data?.tasks?.length})</span> : {formattedDate()}</h2>
            <div className="taskBox" >
                <div className="card mt-4 p-1" style={{
                    height: "25rem",
                    overflowY: "auto",
                }}>
                    <TaskCard onDelete={onDelete} isLoading={isLoading} data={data} onCompleteTask={onCompleteTask} />
                </div>
            </div>
            <TaskPendingHistory />
            <TaskCompletedHistory />
            <div className="addTaskBtn">
                <button className="border border-primary border-3 btn btn-dark rounded-circle ptr" style={{
                    width: "70px",
                    height: "70px"
                }} onClick={() => {
                    handleShow()
                    handleSetEditOrAdd("Add")
                }}>
                    Add Task
                </button>
            </div>
            <TaskCanvas text={edit} show={show} handleClose={handleClose} />
        </Container>
    )

}

export default Task

