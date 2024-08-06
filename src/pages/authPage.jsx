import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase/googleAuth";

function AuthPage() {
    const navigate = useNavigate()
    const authenticateWithGoogle = async () => {
        const user = await signInWithGoogle();
        if (user) {
            localStorage.setItem("task_overall", JSON.stringify(user));
            navigate('/')
            window.location.reload();
        }
    }
    return (
        <div >
            <div className="headersTop bg-black ">
                <h4 className="text-success p-3">Task Overall</h4>
            </div>
            <div
                style={{
                    height: "100vh",
                }}
                className="ptr d-flex justify-content-center align-items-center">
                <h4 className="bg-danger rounded-2 p-3 text-light" onClick={() => authenticateWithGoogle()}>
                    Authenticate with Google
                </h4>
            </div>
        </div>
    )
}

export default AuthPage
