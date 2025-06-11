import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const handleUser = () => {
        navigate("/user/login");
    };
    const handleDriver = () => {
        navigate("/driver/login")
    };
    const handleAdmin = () => {
        navigate("/admin/login")
    };
    return (
        <div className="m-0 p-2 h-screen bg-purple-300">
            <div className="m-2 h-[100%] bg-purple-400">
                <h1 className="mt-2 p-3 text-4xl">Travel Management System</h1>

                <h2 className="p-3 mt-1">Continue As</h2>
                <div className="flex flex-col gap-4 items-center">
                    <button
                        className="bg-purple-600 text-white w-[30%] p-3 !rounded-2xl hover:bg-purple-700 transition duration-200 ease shadow-md block"
                        onClick={handleUser}
                    >
                        User
                    </button>
                    <button
                        onClick={handleDriver}
                        className="bg-purple-600 text-white w-[30%] p-3 !rounded-2xl hover:bg-purple-700 transition duration-200 ease shadow-md block"
                    >
                        Driver
                    </button>
                    <button
                        onClick={handleAdmin}
                        className="bg-purple-600 text-white w-[30%] p-3 !rounded-2xl hover:bg-purple-700 transition duration-200 ease shadow-md block"
                    >
                        Admin
                    </button>
                </div>
            </div>
        </div>
    );
}
