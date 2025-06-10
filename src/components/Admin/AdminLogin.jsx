import React, { useState } from "react";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="mx-0 w-screen h-screen bg-purple-300 flex flex-col justify-items-start">
            <div className="flex justify-between items-center px-4 py-2 h-[20%]">
                <h2>Travel Management System</h2>
                <h3>Admin Login</h3>
            </div>

            <div className="px-5 ">
                <button
                    className={`bg-purple-600 text-white mx-2 p-3 !rounded-t-xl`}
                >
                    Login
                </button>
            </div>

            <div className="bg-purple-600 p-5 h-[80%]">
                <form>
                    <div className="login">
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="text-white p-1 text-2xl w-[12%]"
                            >
                                Email:{" "}
                            </label>
                            <input
                                className="bg-white p-2 mx-2 rounded-xl w-[20%]"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="text-white p-1 text-2xl w-[12%]"
                            >
                                Password:{" "}
                            </label>
                            <input
                                className="bg-white p-2 mx-2 rounded-xl w-[20%]"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button className="bg-purple-300 text-black p-2 px-4 text-3xl !rounded-2xl">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
