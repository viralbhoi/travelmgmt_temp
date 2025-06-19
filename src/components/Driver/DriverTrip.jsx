import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import VehicleInfor from "./VehicleInfor";
import TripInfo from "./TripInfo";
import DriverNav from "./DriverNav";


export default function DriverTrip() {
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
        <div className="flex flex-col md:flex-row">
            <DriverNav/>
            <div className="flex flex-col gap-4 md:ml-[20%] md:mt-0 mt-[20%] flex-1 p-5">
                <h2 className="bg-slate-800 text-2xl text-slate-50 text-center font-semibold p-4 rounded-2xl">Trips Data</h2>
                <TripInfo/>
            </div>
            
        </div>
    );
}
