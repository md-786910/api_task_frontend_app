/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { oneDayLessToCurrentDate } from "../../utils/timeDateFormat"
import TaskHistoryCard from "./taskHistoryCard"
import { pendingTaskHistory } from "../../axios/api";
import { alertError } from "../../config/toast";
import { useTaskContext } from "../context/taskContext";

function TaskPendingHistory(props) {
    const { status } = props;
    const { renderTask } = useTaskContext()

    const [data, setData] = useState([])
    const getAllTask = async () => {
        try {
            const task = await pendingTaskHistory();
            setData(task?.data)
        } catch (error) {
            alertError(error)
        }
    }

    useEffect(() => {
        getAllTask()
    }, [renderTask])
    return (
        <div className="mt-3 border border-primary p-1 bg-white">
            <h2>Pending Task <span className="text-primary">History({data?.length})</span> : {oneDayLessToCurrentDate()}</h2>
            <hr />
            <div style={{
                height: "25rem",
                overflowY: "auto",
            }}>

                <TaskHistoryCard status={status} data={
                    data
                } />

            </div>

        </div>
    )
}

export default TaskPendingHistory
