import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";

export default function Login() {
    // Sign in with Google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("hey")
            console.log(result.user)
        }
        catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="flex flex-col w-3/6 justify-center ">
            <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg flex flex-col gap-4">
                <button onClick={GoogleLogin} className="flex flex-row p-2 items-center text-white h-12 justify-center  bg-gray-700 w-3/6 font-medium rounded-lg align-middle gap-2">
                    <FcGoogle className="text-4xl" /> Sign In with Google
                </button>
                <button className="flex flex-row p-2 items-center text-white h-12 justify-center  bg-gray-700 w-3/6 font-medium rounded-lg align-middle gap-2">
                    <AiFillFacebook className="text-4xl text-blue-500" /> Sign In with Facebook
                </button>
            </div>
        </div>

    );
}