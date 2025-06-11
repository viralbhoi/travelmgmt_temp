import { Routes, Route, Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";
import Login from "../pages/Login.jsx";
import UserDashboard from "../modules/user/UserDashboard";
import AdminDashboard from "../modules/admin/AdminDashboard.jsx";
import DriverDashboard from "../modules/driver/DriverDashboard.jsx";
import TripBookingForm from "../modules/user/TripBookingForm.jsx";
import Home from "../pages/Home.jsx";
import UserLogin from "../components/User/UserLogin.jsx";
import AdminLogin from "../components/Admin/AdminLogin.jsx"
import DriverLogin from "../components/Driver/DriverLogin.jsx";
import UserTripBooking from "../components/User/UserTripBooking.jsx";

export default function AppRouter() {
    const { loggedInUser } = useAppContext();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/user"
                element={
                    loggedInUser?.role === "user" ? (
                        <UserDashboard />
                    ) : (
                        <Navigate to="/" />
                    )
                }
            />
            <Route
                path="/admin"
                element={
                    loggedInUser?.role === "admin" ? (
                        <AdminDashboard />
                    ) : (
                        <Navigate to="/" />
                    )
                }
            />
            <Route
                path="/driver"
                element={
                    loggedInUser?.role === "driver" ? (
                        <DriverDashboard />
                    ) : (
                        <Navigate to="/" />
                    )
                }
            />
            <Route
                path="user-booking"
                element={
                    <UserTripBooking/>
                }
            />

            <Route
                path="user/login"
                element={
                    <UserLogin/>
                }
            />

            <Route
                path="admin/login"
                element={
                    <AdminLogin/>
                }
            />

            <Route
                path="driver/login"
                element={
                    <DriverLogin/>
                }
            />
        </Routes>
    );
}
