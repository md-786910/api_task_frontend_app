/* eslint-disable react/prop-types */

function TaskHistoryCard(props) {
    const { status, data } = props;
    return (
        <>
            {
                data?.map((task, index) => {
                    return (
                        <>
                            <div className="taskChild border  p-2 mb-2" key={index} style={{
                                background: status ? "var(--success)" : "var(--danger)",
                                color: !status ? "var(--light)" : "",
                            }}>
                                <div className="combine ">
                                    <div className="checkBox">

                                    </div>
                                    <div className="taskText" >
                                        <h6>{task?.title}</h6>
                                        <p>
                                            {task?.summary}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default TaskHistoryCard
