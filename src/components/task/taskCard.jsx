import { useState } from "react";
import TaskCanvas from "../../offcanvas/taskCanvas";
import { useTaskContext } from "../context/taskContext";

/* eslint-disable react/prop-types */
function TaskCard(props) {
    const { show, handleClose, handleShow, edit, handleSetEditOrAdd, setTaskData } = useTaskContext()
    const { data, onDelete, isLoading, onCompleteTask } = props;
    const [checked, setChecked] = useState(false)
    return (
        <>
            {
                data?.tasks?.length === 0 && <div>
                    <h4 className="text-primary">No Task</h4>
                </div>
            }
            {
                data?.tasks?.map((task, index) => {
                    return (
                        <>
                            <div className="taskChild  p-2 mb-2" key={index} style={{
                                background: task.status ? "var(--success)" : "var(--warning)"
                            }} onClick={() => {
                                setChecked(!checked)
                                onCompleteTask(task._id, checked)
                                // add toggle when click to card set to checked vice versa

                            }}>
                                <div className="combine d-flex align-items-center gap-4">
                                    <div className="checkBox">
                                        <input type="checkbox" name="task" id="tid"
                                            style={{
                                                height: "2rem",
                                                width: "2rem",
                                                cursor: "pointer",
                                            }}
                                            value={task.status}
                                            checked={task.status}
                                            onChange={(e) => {
                                                onCompleteTask(task._id, e.target.checked)
                                            }}

                                        />
                                    </div>
                                    <div className="taskText" >
                                        <h6>{task?.title}</h6>
                                        <p>
                                            {task?.summary}
                                        </p>
                                    </div>
                                </div>
                                <div className="actionBtn">
                                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(task?._id)} disabled={isLoading}>
                                        Delete
                                    </button>
                                    {
                                        !task.status && <button className="btn btn-dark btn-sm mx-2" onClick={() => {
                                            handleShow();
                                            handleSetEditOrAdd("Update")
                                            setTaskData({
                                                title: task?.title,
                                                summary: task?.summary,
                                                id: task?._id
                                            })
                                        }} >
                                            Edit
                                        </button>
                                    }

                                </div>
                            </div>
                            <TaskCanvas text={edit} show={show} handleClose={handleClose} key={index + 1} />

                        </>
                    )
                })
            }
        </>
    )
}

export default TaskCard
