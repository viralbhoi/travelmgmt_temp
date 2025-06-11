import React from "react";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import VehicleInfor from "./VehicleInfor";
import TripInfo from "./TripInfo";

export default function DriverDashboard() {
    const { loggedInUser, setLoggedInUser, trips, drivers, users } = useAppContext();
    const navigate = useNavigate();

    const driverTrips = trips.filter(
        (trip) => trip.driverEmail === loggedInUser.email
    );

    const currentDriver = drivers.find(
        (d) => d.email === loggedInUser.email
    );

    const handleLogout = () => {
        setLoggedInUser(null);
        alert("You Logged Out");
        navigate("/driver/login");
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-black">Driver Panel</h2>
                <button
                    className="px-4 py-2 bg-red-500 text-white text-lg !rounded-xl"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

            {/* Vehicle Info */}
            <VehicleInfor vehicleDetail={currentDriver?.vehicleType || "Not Assigned"}/>
            

            {/* Trip Table */}
            <TripInfo/>
            
        </div>
    );
}
