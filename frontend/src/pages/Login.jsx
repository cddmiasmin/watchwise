import Header from "../components/Header";
import { FaGoogle } from "react-icons/fa";

import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const idToken = await user.getIdToken();

            console.log('ID Token:', idToken);

        
            const response = await fetch('http://localhost:8080/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': idToken,
                },
            });

            const data = await response.json();
            console.log('Dados do backend:', data);

        } catch (error) {
            console.error('Erro FRONTEND:', error);
        }
    };

    return (
        <div className={`w-screen h-screen flex justify-center items-center bg-background`}>
            <div className="flex flex-col bg-[#456] p-10 rounded-sm  justify-center items-center">
                <img 
                    src='/public/logo.png'
                    className="size-25"
                />
                <h1 className="font-nunito-sans text-white text-2xl font-bold">
                    Sign In to Watchwise
                </h1>
                <button 
                    className="mt-10 cursor-pointer"
                    onClick={handleLogin}
                >
                    <FaGoogle className="text-4xl text-dusty-sky hover:text-[#00ac1c]"/>
                </button>
            </div>
        </div>
    );

}

export default Login;