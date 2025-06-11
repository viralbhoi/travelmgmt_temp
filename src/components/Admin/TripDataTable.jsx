import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function TripDataTable() {
    const { trips, users, drivers } = useAppContext(); 

    return (
        <div className="p-3 ">
            <table className="w-full border-collapse border border-gray-400 mt-6">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-400 px-4 py-2">Trip ID</th>
                        <th className="border border-gray-400 px-4 py-2">User</th>
                        <th className="border border-gray-400 px-4 py-2">Start Date</th>
                        <th className="border border-gray-400 px-4 py-2">End Date</th>
                        <th className="border border-gray-400 px-4 py-2">Pickup → Destination</th>
                        <th className="border border-gray-400 px-4 py-2">Driver</th>
                        <th className="border border-gray-400 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map((trip, index) => {
                        const user = users.find((u) => u.email === trip.userEmail);
                        const driver = drivers.find((d) => d.email === trip.driverEmail);

                        return (
                            <tr key={index} className="text-center">
                                <td className="border border-gray-400 px-4 py-2">{trip.id}</td>
                                <td className="border border-gray-400 px-4 py-2">{user?.username || "N/A"}</td>
                                <td className="border border-gray-400 px-4 py-2">{trip.startDate}</td>
                                <td className="border border-gray-400 px-4 py-2">{trip.endDate}</td>
                                <td className="border border-gray-400 px-4 py-2">{trip.pickup} → {trip.destination}</td>
                                <td className="border border-gray-400 px-4 py-2">{driver?.username || "Not Assigned"}</td>
                                <td className={`border border-gray-400 px-4 py-2 capitalize ${trip.status === "approved" ? "bg-green-500" : trip.status === "rejected" ? "bg-red-500" : "bg-yellow-300"}`}>{trip.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
