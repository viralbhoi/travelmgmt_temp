import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function ConfirmTrip() {
    const { trips, setTrips, drivers, users } = useAppContext();
    const [pendingTrips, setPendingTrips] = useState([]);
    const [selectedDriverEmail, setSelectedDriverEmail] = useState("");
    const [selectedTripID, setSelectedTripID] = useState(null);

    const handleApproveTrip = (tripID) => {
        if (tripID !== selectedTripID || !selectedDriverEmail) {
            alert("Please select a driver before approving.");
            return;
        }

        const updatedTrips = trips.map((trip) =>
            trip.id === tripID
                ? {
                      ...trip,
                      status: "approved",
                      driverEmail: selectedDriverEmail,
                  }
                : trip
        );

        setTrips(updatedTrips);
        setSelectedDriverEmail("");
        setSelectedTripID(null);
    };

    const handleRejectTrip = (tripID) => {
        const updatedTrips = trips.map((trip) =>
            trip.id === tripID
                ? {
                      ...trip,
                      status: "rejected",
                  }
                : trip
        );

        setTrips(updatedTrips);
    };

    useEffect(() => {
        let t = trips.filter((trip) => trip.status === "pending");
        setPendingTrips(t);
    }, [trips]);

    const isDateOverlap = (start1, end1, start2, end2) => {
        return !(
            new Date(end1) < new Date(start2) ||
            new Date(start1) > new Date(end2)
        );
    };

    const getAvailableDrivers = (trip) => {
        return drivers.filter((driver) => {
            const assignedTrips = trips.filter(
                (t) => t.driverEmail === driver.email
            );

            const hasConflict = assignedTrips.some((existing) =>
                isDateOverlap(
                    trip.startDate,
                    trip.endDate,
                    existing.startDate,
                    existing.endDate
                )
            );

            return !hasConflict;
        });
    };

    return (
        <div>
            <AdminNav />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Confirm Pending Requests</h2>
                <table className="w-full border-collapse border border-gray-400">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-400 px-4 py-2">Trip ID</th>
                            <th className="border border-gray-400 px-4 py-2">User</th>
                            <th className="border border-gray-400 px-4 py-2">Start Date</th>
                            <th className="border border-gray-400 px-4 py-2">End Date</th>
                            <th className="border border-gray-400 px-4 py-2">Pickup → Destination</th>
                            <th className="border border-gray-400 px-4 py-2">Available Drivers</th>
                            <th className="border border-gray-400 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingTrips.map((trip, index) => {
                            const user = users.find((u) => u.email === trip.userEmail);
                            const availableDrivers = getAvailableDrivers(trip);

                            return (
                                <tr key={index} className="text-center">
                                    <td className="border border-gray-400 px-4 py-2">{trip.id}</td>
                                    <td className="border border-gray-400 px-4 py-2">{user?.username}</td>
                                    <td className="border border-gray-400 px-4 py-2">{trip.startDate}</td>
                                    <td className="border border-gray-400 px-4 py-2">{trip.endDate}</td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {trip.pickup} → {trip.destination}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        <select
                                            name="driver"
                                            value={
                                                trip.id === selectedTripID
                                                    ? selectedDriverEmail
                                                    : ""
                                            }
                                            onChange={(e) => {
                                                setSelectedTripID(trip.id);
                                                setSelectedDriverEmail(e.target.value);
                                            }}
                                            className="border px-2 py-1"
                                        >
                                            <option value="">-- Select Driver --</option>
                                            {availableDrivers.map((driver, i) => (
                                                <option key={i} value={driver.email}>
                                                    {driver.username}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2 space-x-2">
                                        <button
                                            onClick={() => handleApproveTrip(trip.id)}
                                            className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                                        >
                                            Approve
                                        </button>
                                        <button
                                            onClick={() => handleRejectTrip(trip.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                                        >
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
