import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export default function UserNav() {
    const {setLoggedInUser} = useAppContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoggedInUser(null);
        alert("You Logged Out");
        navigate("/admin/login");
    }

    return (
        <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-2xl font-semibold text-black">User Panel</h2>

            <nav className="flex items-center space-x-4">
                <Link
                    to="/user/dashboard"
                    className="px-4 py-2 text-black rounded-xl hover:bg-slate-100 transition duration-500 ease-in-out hover:scale-105"
                    style={{textDecoration:"none"}}
                >
                    Dashboard
                </Link>

                <Link
                    to="/user/booktrip"
                    className="px-4 py-2 text-black rounded-xl hover:bg-slate-100 transition duration-500 ease-in-out hover:scale-105"
                    style={{textDecoration:"none"}}
                >
                    Booking
                </Link>

                <button className="px-4 py-2 bg-red-500 text-white text-lg !rounded-xl" onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </div>
    );
}
