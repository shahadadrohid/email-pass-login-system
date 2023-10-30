import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const emailRef = useRef();


    const handleForgotPassword = e => {
        const email = emailRef.current.value;
        if(!email){
            setError('Please enter email');
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(()=> {
            console.log(email)
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setError('');

        signInWithEmailAndPassword(auth, email, password)
        .then(userC => {
            const user = userC.user;
            if(userC){
                navigate('/');
            }
            console.log(user);
        })
        .catch(error => {
            setError(error.message);
            console.log(error);
        })
    }
    return (
        <div>
            <div className="max-w-md mx-auto min-h-screen mt-10">
                <div className="">
                    <div className="card shadow-2xl bg-base-100">
                        <h4 className="text-3xl mt-8 text-center font-bold">Please Login</h4>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                ref={emailRef}
                                name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleForgotPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error && <p className="text-red-400 text-3xl">{error}</p>
                            }
                            <p className="text-gray-400 text-lg">New to this website Please Register <Link className="text-blue-500 font-semibold " to="/signUp">here</Link> </p>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;