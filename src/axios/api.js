import instance from "."

// user
export const login = async (payload) => {
    return await instance.post("/user/register", payload)
}
export const getUser = async () => {
    return await instance.get("/user/profile")
}

// task
// create
export const createTask = async (payload) => {
    return await instance.post("/task", payload)
}
export const updateTask = async ({ id, ...payload }) => {
    return await instance.patch(`/task/${id}`, payload)
}
export const deleteTask = async (id) => {
    return await instance.delete(`/task/${id}`)
}
export const getTask = async () => {
    return await instance.get("/task")
}
export const completedTask = async (id, status) => {
    return await instance.post(`/task/${id}`, {
        status
    })
}
export const completedTaskHistory = async () => {
    return await instance.get("/task/completed-task")
}
export const pendingTaskHistory = async () => {
    return await instance.get("/task/pending-task")
}