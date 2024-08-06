/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
const TaskContext = createContext({})


const TaskContextProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState("Add")
    const [taskData, setTaskData] = useState({})
    const [renderTask, setRenderTask] = useState(Math.random())
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    // set edit or add
    const handleSetEditOrAdd = (type) => {
        setEdit(type)
    }
    return <>
        <TaskContext.Provider value={{ show, handleClose, handleShow, handleSetEditOrAdd, edit, taskData, setTaskData, setRenderTask, renderTask }}>
            {children}
        </TaskContext.Provider>
    </>
}

const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTaskContext must be used within a TaskContextProvider");
    }
    return context;
};

export { TaskContextProvider, useTaskContext };