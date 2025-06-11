import React from "react";
import { Link } from "react-router-dom";

export default function AdminNav() {
    return (
        <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-2xl font-semibold text-black">Admin Panel</h2>

            <nav className="flex items-center space-x-4">
                <Link
                    to="/admin/dashboard"
                    className="px-4 py-2 text-black rounded-xl hover:bg-purple-700 hover:text-white transition duration-500 ease-in-out hover:scale-105"
                    style={{textDecoration:"none"}}
                >
                    Dashboard
                </Link>

                <Link
                    to="/admin/confirmtrip"
                    className="px-4 py-2 text-black rounded-xl hover:bg-purple-700 hover:text-white transition duration-500 ease-in-out hover:scale-105"
                    style={{textDecoration:"none"}}
                >
                    Booking Confirmation
                </Link>

                <Link
                    to="/admin/manageuser"
                    className="px-4 py-2 text-black rounded-xl hover:bg-purple-700 hover:text-white transition duration-500 ease-in-out hover:scale-105"
                    style={{textDecoration:"none"}}
                >
                    User Management
                </Link>

                <button className="px-4 py-2 bg-red-500 text-white text-lg !rounded-xl">
                    Logout
                </button>
            </nav>
        </div>
    );
}
