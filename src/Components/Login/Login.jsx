import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

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
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error && <p className="text-red-400 text-3xl">{error}</p>
                            }
                            <div className="form-control mt-6">
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