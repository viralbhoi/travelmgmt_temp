import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loggedInUser, setLoggedInUser, admins } = useAppContext();
    const navigate = useNavigate();

    const handleAdminLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("No input field should be empty");
            return false;
        }

        if (loggedInUser) {
            localStorage.removeItem(loggedInUser);
        }

        const user = {
            role: "admin",
            email: email,
            password: password,
        };

        let tempUser = admins.find((u) => u.email === user.email);

        if (!tempUser) {
            alert("No such Admin exist!");
            return false;
        } else if (tempUser.password != user.password) {
            alert("Oops!, Wrong Password");
            return false;
        }

        setLoggedInUser(user);

        setEmail("");
        setPassword("");

        navigate("/admin/dashboard");
    };

    return (
        <div className="mx-0 w-screen h-screen bg-slate-300 flex flex-col md:flex-row justify-items-start box-border">
            <div className="flex-1/5 md:flex-1 bg-white bg-[url('/AdminLogin.jpg')] bg-no-repeat bg-center bg-fit">
                <button
                    className="m-5 p-3 bg-slate-900/75 rounded-2xl text-slate-50 underline"
                    onClick={() => navigate("/")}
                >
                    &larr; Back to Home
                </button>
            </div>
            <div className="flex-4/5 md:flex-1 p-5 flex flex-col gap-2 md:gap-0">
                <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0 ">
                    <button
                        className={`bg-slate-800 text-white flex-1 p-4 rounded-2xl md:rounded-none md:rounded-t-2xl transition-all duration-200 ease-linear`}
                    >
                        Login
                    </button>
                </div>

                <div className="bg-slate-800 p-5 flex-1  rounded-2xl md:rounded-none md:rounded-b-2xl">
                    <form onSubmit={handleAdminLogin}>
                        <div className="login width-[100%] flex flex-col justify-center">
                            <div className="mb-2 flex flex-col md:flex-row">
                                <label
                                    htmlFor="email"
                                    className="text-white p-1 text-2xl flex-1 md:flex-1/4"
                                >
                                    Email:{" "}
                                </label>
                                <input
                                    className="bg-white p-2 mx-2 rounded-xl flex-1 md:flex-3/4"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-2 flex flex-col md:flex-row">
                                <label
                                    htmlFor="password"
                                    className="text-white p-1 text-2xl flex-1 md:flex-1/4"
                                >
                                    Password:{" "}
                                </label>
                                <input
                                    className="bg-white p-2 mx-2 rounded-xl flex-1 md:flex-3/4"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <button
                                className="bg-slate-300 mt-5 text-black p-2 px-4 text-md md:text-xl !rounded-2xl flex-1"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
