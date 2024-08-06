import { toast } from "react-toastify"

export const alertMessage = (message) => {
    toast(message, {})
}
export const alertSuccess = (message) => {
    return toast.success(message)
}
export const alertWarning = (message) => {
    return toast.warn(message)
}
export const alertError = (err) => {
    return toast.error(err || err?.response?.data?.message || err?.message)
}
