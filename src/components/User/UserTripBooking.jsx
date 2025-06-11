import React, { useState } from "react";
import UserNav from "./userNav";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function UserTripBooking() {
    const [vehicle, setVehicle] = useState("bus");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const navigate = useNavigate();
    const { loggedInUser, trips, setTrips } = useAppContext();

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!vehicle || !startDate || !endDate || !pickup || !destination) {
            alert("No field should be empty");
            return false;
        }

        if (new Date(startDate) > new Date(endDate)) {
            alert("invalid ending date");
            return false;
        }

        const tripData = {
            vehicle,
            id: Date.now(),
            userEmail: loggedInUser.email,
            driverEmail: null,
            status: "pending",
            startDate,
            endDate,
            pickup,
            destination,
        };

        setTrips((prev) => [...prev, tripData]);

        alert("Trip requested Successfully");

        navigate("/user/dashboard");
    };

    return (
        <div className="mx-0 w-screen h-screen ">
            <UserNav />

            <div className="px-5 ">
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <label htmlFor="vehicle" className="w-[12%] bg-gray-100 px-2 py-3 mr-2 rounded-t-2xl">Vehicle:</label>
                        <select
                            name="vehicle"
                            id="vehicle"
                            value={vehicle}
                            onChange={(e) => setVehicle(e.target.value)}
                            className="p-2 py-3 bg-gray-200 w-[20%] border-0 text-gray-900 rounded-t-2xl"
                        >
                            <option value="bus">Bus</option>
                            <option value="car">Car</option>
                            <option value="van">van</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="startDate" className="w-[12%] bg-gray-100 px-2 py-3 mr-2">Start date:</label>
                        <input
                            type="date"
                            name="startDate"
                            id="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="p-2 py-3 bg-gray-200 w-[20%] border-0 text-gray-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="endDate" className="w-[12%] bg-gray-100 px-2 py-3 mr-2">End date:</label>
                        <input
                            type="date"
                            name="endDate"
                            id="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="p-2 py-3 bg-gray-200 w-[20%] border-0 text-gray-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="pickup" className="w-[12%] bg-gray-100 px-2 py-3 mr-2">Pickup:</label>
                        <input
                            type="text"
                            name="pickup"
                            id="pickup"
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            className="p-2 py-3 bg-gray-200 w-[20%] border-0 text-gray-900"
                            placeholder="Enter Pickup city"
                        />
                    </div>

                    <div>
                        <label htmlFor="destination" className="w-[12%] bg-gray-100 px-2 py-3 mr-2 rounded-b-2xl">Destination:</label>
                        <input
                            type="text"
                            name="destination"
                            id="destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="p-2 py-3 bg-gray-200 w-[20%] border-0 text-gray-900 rounded-b-2xl"
                            placeholder="Enter Destination city"
                        />
                    </div>

                    <button type="submit" className="p-3 block bg-gray-700 text-white m-2 !rounded-2xl">Book a trip!</button>
                </form>
            </div>
        </div>
    );
}
