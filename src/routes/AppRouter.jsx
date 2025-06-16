import { Routes, Route, Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";
// import UserDashboard from "../modules/user/UserDashboard";
import UserDashboard from "../components/User/UserDashboard.jsx";
// import AdminDashboard from "../modules/admin/AdminDashboard.jsx";
import AdminDashboard from "../components/Admin/AdminDashboard.jsx";
// import DriverDashboard from "../modules/driver/DriverDashboard.jsx";
import DriverDashboard from "../components/Driver/DriverDashboard.jsx";
// import TripBookingForm from "../modules/user/TripBookingForm.jsx";
import Home from "../pages/Home.jsx";
import UserLogin from "../components/User/UserLogin.jsx";
import AdminLogin from "../components/Admin/AdminLogin.jsx";
import DriverLogin from "../components/Driver/DriverLogin.jsx";
import UserTripBooking from "../components/User/UserTripBooking.jsx";
import ConfirmTrip from "../components/Admin/ConfirmTrip.jsx";
import AllTrips from "../components/Admin/AllTrips.jsx";
import AdminPackages from "../components/Admin/AdminPackages.jsx";

export default function AppRouter() {
    const { loggedInUser } = useAppContext();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="user-booking" element={<UserTripBooking />} /> */}

            <Route path="/user/login" element={<UserLogin />} />

            <Route path="/admin/login" element={<AdminLogin />} />

            <Route path="/driver/login" element={<DriverLogin />} />

            <Route
                path="/admin/dashboard"
                element={
                    loggedInUser?.role === "admin" ? (
                        <AdminDashboard />
                    ) : (
                        <Navigate to="/admin/login" />
                    )
                }
            />

            <Route
                path="/driver/dashboard"
                element={
                    loggedInUser?.role === "driver" ? (
                        <DriverDashboard />
                    ) : (
                        <Navigate to="/driver/login" />
                    )
                }
            />

            <Route
                path="/user/dashboard"
                element={
                    loggedInUser?.role === "user" ? (
                        <UserDashboard />
                    ) : (
                        <Navigate to="/user/login" />
                    )
                }
            />

            <Route
                path="/user/booktrip"
                element={
                    loggedInUser?.role === "user" ? (
                        <UserTripBooking />
                    ) : (
                        <Navigate to="/user/login" />
                    )
                }
            />

            <Route
                path="/admin/confirmtrip"
                element={
                    loggedInUser?.role === "admin" ? (
                        <ConfirmTrip />
                    ) : (
                        <Navigate to="/admin/login" />
                    )
                }
            />

            <Route
                path="/admin/alltrips"
                element={
                    loggedInUser?.role === "admin" ? (
                        <AllTrips />
                    ) : (
                        <Navigate to="/admin/login" />
                    )
                }
            />

            <Route
                path="/admin/packages"
                element={
                    loggedInUser?.role === "admin" ? (
                        <AdminPackages />
                    ) : (
                        <Navigate to="/admin/login" />
                    )
                }
            />
        </Routes>
    );
}
