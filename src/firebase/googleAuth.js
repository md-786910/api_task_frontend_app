import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebaseConfig";
import { alertError } from "../config/toast";
import { login } from "../axios/api";

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const { email, displayName, photoURL, phoneNumber } = result.user;
        // call sing in api
        const data = await login({
            email,
            display_name: displayName,
            photo_url: photoURL,
            phone_number: phoneNumber
        }).then((resp) => {
            return resp.data;
        }).catch((err) => {
            alertError(err)
            return false

        });
        return data;

    } catch (error) {
        alertError(error)
        return false
    }
};
export const logoutGoogleAccount = async () => {
    // await auth.logout()
}