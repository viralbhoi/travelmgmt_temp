import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const handleUser = () => {
        navigate("/user/login");
    };
    const handleDriver = () => {
        navigate("/driver/login");
    };
    const handleAdmin = () => {
        navigate("/admin/login");
    };
    return (
        <div className="m-0 h-screen bg-[url('wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg')] bg-no-repeat bg-center bg-fit ">
            <div className="p-3 h-[100%] backdrop-blur-xs flex flex-col justify-center items-center gap-4">
                <div className="h-[15%] flex flex-wrap bg-slate-50 box-border justify-center items-center rounded-2xl backdrop-blur-3xl w-full">
                    <NavLink
                        to="/"
                        className="h-full flex-1/3 md:flex-1/12 p-2"
                    >
                        <div className="bg-[url('logo.png')] bg-no-repeat bg-center bg-contain h-full w-full"></div>
                    </NavLink>

                    <h1 className="mt-2 p-3 font-bold text-4xl flex-2/3 md:flex-11/12">
                        TravelMate
                    </h1>
                </div>
                {/* <div className="bg-slate-900 flex-1 rounded-2xl w-full m-2 bg-opacity-[10%]">
                    <div className="backdrop-blur-3xl rounded-2xl">
                        <h2 className="p-3 mt-1">Continue As</h2>
                        <div className="flex flex-col gap-4 items-center">
                            <button
                                className="bg-gray-600 text-white w-[30%] p-3 !rounded-2xl hover:bg-gray-700 transition duration-200 ease shadow-md block"
                                onClick={handleUser}
                            >
                                User
                            </button>
                            <button
                                onClick={handleDriver}
                                className="bg-gray-600 text-white w-[30%] p-3 !rounded-2xl hover:bg-gray-700 transition duration-200 ease shadow-md block"
                            >
                                Driver
                            </button>
                            <button
                                onClick={handleAdmin}
                                className="bg-gray-600 text-white w-[30%] p-3 !rounded-2xl hover:bg-gray-700 transition duration-200 ease shadow-md block"
                            >
                                Admin
                            </button>
                        </div>
                    </div>
                </div> */}
                <div className="bg-slate-950/50 backdrop-blur-xl rounded-2xl w-full m-2 p-4 shadow-xl flex-1 flex flex-col">
                    <h2 className="text-white text-3xl font-semibold mb-4">
                        Continue As
                    </h2>
                    <div className="flex flex-col gap-4 items-center justify-center mt-5 md:mt-2">
                        <button
                            className="bg-white/50 text-slate-950 font-semibold w-[30%] p-3 rounded-2xl hover:bg-white/30 transition duration-200 ease-in-out shadow-md"
                            onClick={handleUser}
                        >
                            User
                        </button>
                        <button
                            onClick={handleDriver}
                            className="bg-white/50 text-slate-950 font-semibold w-[30%] p-3 rounded-2xl hover:bg-white/30 transition duration-200 ease-in-out shadow-md"
                        >
                            Driver
                        </button>
                        <button
                            onClick={handleAdmin}
                            className="bg-white/50 text-slate-950 font-semibold w-[30%] p-3 rounded-2xl hover:bg-white/30 transition duration-200 ease-in-out shadow-md"
                        >
                            Admin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
