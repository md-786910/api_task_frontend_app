/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { oneDayLessToCurrentDate } from "../../../utils/timeDateFormat";
import TaskHistoryCard from "../taskHistoryCard";
import { alertError } from "../../../config/toast";
import { completedTaskHistory } from "../../../axios/api";
import { useTaskContext } from "../../context/taskContext";

function TaskCompletedHistory() {
    const { renderTask } = useTaskContext()
    const [data, setData] = useState([])
    const getAllTask = async () => {
        try {
            const task = await completedTaskHistory();
            setData(task?.data)
        } catch (error) {
            alertError(error)
        }
    }

    useEffect(() => {
        getAllTask()
    }, [renderTask])
    return (
        <div className="mt-3 border border-danger p-1 bg-white">
            <h2>Completed Task <span className="text-primary">History({data?.length})</span> : {oneDayLessToCurrentDate()}</h2>
            <hr />
            <div style={{
                height: "25rem",
                overflowY: "auto",
            }}>

                <TaskHistoryCard status={1} data={
                    data
                } />

            </div>

        </div>
    )
}

export default TaskCompletedHistory
