import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export default function UserNav() {
    const {setLoggedInUser} = useAppContext();
    const navigate = useNavigate();

    return (
        <div className="hidden w-[100%] md:block md:fixed md:left-0 md:top-0  md:w-[20%] bg-slate-950 text-white h-screen">
            <h2 className="text-xl font-bold mb-6 p-3">User Panel</h2>

            <nav className="flex flex-col mt-5 transition-all duration-200 ease-linear">
                <NavLink
                    to="/user/dashboard"
                    className={({ isActive }) =>
                        `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                            isActive
                                ? "bg-slate-900 text-slate-50 font-semibold"
                                : "hover:bg-slate-900"
                        }`
                    }
                    style={{textDecoration:"none",color:"#F8FAFC"}}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/user/booktrip"
                    className={({ isActive }) =>
                        `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                            isActive
                                ? "bg-slate-900 text-slate-50 font-semibold"
                                : "hover:bg-slate-900"
                        }`
                    }
                    style={{textDecoration:"none",color:"#F8FAFC"}}
                >
                    Booking
                </NavLink>

                <NavLink
                    to="#"
                    className={({ isActive }) =>
                        `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                            isActive
                                ? "bg-slate-900 text-slate-50 font-semibold"
                                : "hover:bg-slate-900"
                        }`
                    }
                    style={{textDecoration:"none",color:"#F8FAFC"}}
                >
                    Packages
                </NavLink>

                <button onClick={() => {
                        setLoggedInUser(null);
                        navigate("/user/login");
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mx-3 mt-5">
                    Logout
                </button>
            </nav>
        </div>
    );
}
