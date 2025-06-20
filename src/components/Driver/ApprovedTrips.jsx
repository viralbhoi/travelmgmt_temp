import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

export default function ApprovedTrip() {
    const { loggedInUser, trips, users } = useAppContext();

    const [driverTrips, setDriverTrips] = useState([]);

    useEffect(() => {
        setDriverTrips(
            trips.filter((trip) => (trip.driverEmail === loggedInUser.email && trip.status === "approved"))
        );
    }, [trips]);

    

    return (
        <div className="flex flex-col p-2 mt-4 gap-4">
            {driverTrips.map((trip, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-wrap gap-4 flex-col md:flex-row justify-evenly p-4 bg-slate-300 rounded-2xl shadow-md"
                    >
                        <div className="flex flex-col justify-center">
                            <p>id:</p>
                            <p>{trip.id}</p>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p>
                                {trip.pickup} → {trip.destination}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 justify-center">
                            <p>User: </p>
                            <p>
                                {users.find(
                                    (user) => user.email === trip.userEmail
                                )?.email || "N/A"}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 justify-center">
                            <p>Cost : </p>
                            <p>₹ {trip.cost || 0}</p>
                        </div>

                        <div className="flex flex-col gap-2 justify-center">
                            <div
                                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                            >
                                Approved
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
