import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="text-center mt-4 font-semibold">
            <Link className="ml-4 text-black bg-amber-500 px-4 py-2 rounded-xl" to="/">Home</Link>
            <Link className="ml-4 text-black bg-amber-500 px-4 py-2 rounded-xl" to="/about">About</Link>
            <Link className="ml-4 text-black bg-amber-500 px-4 py-2 rounded-xl" to="/login">Login</Link>
            <Link className="ml-4 text-black bg-amber-500 px-4 py-2 rounded-xl" to="/signup">Sign Up</Link>
        </div>
    );
};

export default Header;