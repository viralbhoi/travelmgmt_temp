import React from "react";
import AdminNav from "./AdminNav";
import { useAppContext } from "../../context/AppContext";

export default function AllTrips() {
    const { trips, drivers, users } = useAppContext();
    return (
        <div className="flex ">
            <AdminNav />
            <div className="p-4 w-[100%] md:w-[80%]">
                <h2 className="text-xl font-semibold mb-4">
                    Confirm Pending Requests
                </h2>

                <div className="w-[100%]">
                    
                    {trips.map((trip, index) => {
                        const user = users.find(
                            (u) => u.email === trip.userEmail
                        );
                        // const availableDrivers = getAvailableDrivers(trip);

                        return (
                            <div
                                key={index}
                                className="flex flex-wrap gap-4 flex-col md:flex-row justify-evenly p-4 m-2 bg-slate-300 rounded-2xl shadow-md"
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
                                    <p>Driver: </p>
                                    <p>{trip.driverEmail ? drivers.find((drv) => drv.email === trip.driverEmail).username: "Not Assigned"}</p>
                                </div>

                                <div className="flex flex-col gap-2 justify-center">
                                    <p>Cost : </p>
                                    <p>₹ {trip.cost}</p>
                                </div>

                                <div className="flex flex-col gap-2 justify-center">
                                    <p className={`${trip.status === "rejected" ? "bg-red-500 text-slate-50" : trip.status === "approved" ? "bg-green-500" : "bg-yellow-300"} p-4 rounded-2xl`}>{trip.status}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
