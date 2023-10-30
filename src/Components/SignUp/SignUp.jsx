import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const SignUp = () => {
    const [registerError, setRegisterError] = useState('')
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault(0);
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        setRegisterError('');

        console.log(email, password,accepted);

        if (password.length < 6) {
            setRegisterError('Please set password longer than 6 character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            console.log(password)
            setRegisterError('Your pass should have at least one upper case character');
            return;
        }
        else if(!accepted) {
            setRegisterError('Please accept our terms & Conditions');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log(user.user);
                console.log(user.user.email);
                if (user) {
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message);
            })

    }
    return (
        <div>
            <h4 className="text-center text-3xl mt-8 font-bold">Please Register</h4>

            {/*
                FORM
            */}
            <form onSubmit={handleRegister} className="text-center mt-5 max-w-4xl mx-auto">
                <input className="border-2  border-black rounded-md w-1/2 mb-2 py-2 px-2 text-black" type="email" name="email" id="" placeholder="Enter email" required />
                <br />
                <div className="relative">
                    <input
                        className="border-2  border-black rounded-md w-1/2 mb-2 py-2 px-2 text-black"
                        type={showPass ? "text" : "password"}
                        name="password"
                        id=""
                        placeholder="Enter Password" required
                    />
                    <span onClick={() => setShowPass(!showPass)} className="absolute top-4 right-36 cursor-pointer">
                        {
                            showPass ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                        }
                    </span>
                </div>
                <br />

                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className="ml-2">Accept terms & Conditions</label>

                <br />
                <input className="mt-2 w-1/2 bg-blue-500 text-white
                py-2 rounded-lg font-bold" type="submit" value="Register" />
            </form>
            {
                registerError && <p className="text-red-400 font-bold text-xl">{registerError}</p>
            }
        </div>
    );
};

export default SignUp;