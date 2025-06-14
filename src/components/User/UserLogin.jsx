import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
    const [islogin, setisLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const { users, setUsers, loggedInUser, setLoggedInUser } = useAppContext();
    const navigate = useNavigate();

    const handleUserLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("No input field should be empty");
            return false;
        }

        // console.log(users);
        // return;

        if (loggedInUser) {
            localStorage.removeItem(loggedInUser);
        }
        if (islogin) {

            const user = {
                role: "user",
                email: email,
                password: password,
            };

            let tempUser = users.find((u) => u.email === user.email);

            if (!tempUser) {
                alert("No such User exist!");
                return false;
            } else if (tempUser.password != user.password) {
                alert("Oops!, Wrong Password");
                return false;
            }

            setLoggedInUser(user);

            navigate("/user/dashboard");
        } else {
            if (!username) {
                alert("No input field should be empty");
                return false;
            }

            if (users.some((u) => u.email === email)) {
                alert("Email already exists!");
                return;
            }

            const user = {
                email: email,
                id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
                password: password,
                username: username,
            };

            setUsers((prev) => [...prev, user]);

            alert("Successfully Signup, redirecting to Login Page");

            navigate("/user/login");
        }

        setEmail("");
        setPassword("");
        setisLogin(true);
        setUsername("");
    };

    return (
        <div className="mx-0 w-screen h-screen bg-gray-300 flex flex-col justify-items-start">
            <div className="flex justify-between items-center px-4 py-2 h-[20%]">
                <h2>Travel Management System</h2>
                <h3>Login/Signup</h3>
            </div>

            <div className="px-5 ">
                <button
                    className={`${
                        islogin
                            ? "bg-gray-600 text-white"
                            : "bg-gray-400 text-black"
                    } mx-2 p-3 !rounded-t-xl`}
                    onClick={() => setisLogin(true)}
                >
                    Login
                </button>

                <button
                    className={`${
                        islogin
                            ? "bg-gray-400 text-black"
                            : "bg-gray-600  text-white"
                    } mx-2 p-3 !rounded-t-xl`}
                    onClick={() => setisLogin(false)}
                >
                    Signup
                </button>
            </div>

            <div className="bg-gray-600 p-5 h-[80%]">
                <form onSubmit={handleUserLogin}>
                    {islogin ? (
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <button className="bg-gray-300 text-black p-2 px-4 text-3xl !rounded-2xl">
                                Login
                            </button>
                        </div>
                    ) : (
                        <div className="signup ">
                            <div className="mb-2">
                                <label
                                    htmlFor="username"
                                    className="text-white p-1 text-2xl w-[12%]"
                                >
                                    Username:{" "}
                                </label>
                                <input
                                    className="bg-white p-2 mx-2 rounded-xl w-[20%]"
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    required
                                />
                            </div>

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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <button className="bg-gray-300 text-black p-2 px-4 text-3xl !rounded-2xl">
                                Signup
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
