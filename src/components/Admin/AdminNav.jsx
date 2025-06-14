import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export default function AdminNav() {
    const { setLoggedInUser } = useAppContext();
    const navigate = useNavigate();

    return (
        <div className="hidden w-[100%] md:block  md:w-[20%] bg-slate-950 text-white h-screen">
            <h2 className="text-xl font-bold mb-6 p-3">Admin Panel</h2>

            <nav className="flex flex-col mt-5 transition-all duration-200 ease-linear">
                <NavLink
                    to="/admin/dashboard"
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
                    to="/admin/confirmtrip"
                    className={({ isActive }) =>
                        `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                            isActive
                                ? "bg-slate-900 text-slate-50 font-semibold"
                                : "hover:bg-slate-900"
                        }`
                    }
                    style={{textDecoration:"none",color:"#F8FAFC"}}
                >
                    Confirm Trips
                </NavLink>
                <NavLink
                    to="/admin/alltrips"
                    className={({ isActive }) =>
                        `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                            isActive
                                ? "bg-slate-900 text-slate-50 font-semibold"
                                : "hover:bg-slate-900"
                        }`
                    }
                    style={{textDecoration:"none",color:"#F8FAFC"}}
                >
                    All Trips
                </NavLink>
                <NavLink
                    to="/admin/trips"
                    className={({ isActive }) =>
                        `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                            isActive
                                ? "bg-slate-900 text-slate-50 font-semibold"
                                : "hover:bg-slate-900"
                        }`
                    }
                    style={{textDecoration:"none",color:"#F8FAFC"}}
                >
                    Manage Packages
                </NavLink>
                <button
                    onClick={() => {
                        setLoggedInUser(null);
                        navigate("/login");
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mx-3 mt-5"
                >
                    Logout
                </button>
            </nav>
        </div>
    );
}
