import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

export default function TripInfo() {
    const { loggedInUser, trips, setTrips, drivers, users } = useAppContext();
    const [selectedTripID, setSelectedTripID] = useState(null);
    const [selectedDriverEmail, setSelectedDriverEmail] = useState(
        loggedInUser.email
    );

    const[driverTrips, setDriverTrips] = useState([]);


    useEffect(() => {
        setDriverTrips(trips.filter(
            (trip) => trip.driverEmail === loggedInUser.email
        )) 
    }, [trips]);

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
                      status: "pending",
                  }
                : trip
        );

        setTrips(updatedTrips);
    };

    return driverTrips.map((trip, index) => {
        return (
            <div className="p-3">
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
                        <p>User: </p>
                        <p>
                            {users.find((user) => user.email === trip.userEmail)
                                ?.email || "N/A"}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 justify-center">
                        <p>Cost : </p>
                        <p>₹ {trip.cost || 0}</p>
                    </div>

                    <div className="flex flex-col gap-2 justify-center">
                        <button
                            onClick={() => handleApproveTrip(trip.id)}
                            className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                        >
                            Approved
                        </button>
                        <button
                            onClick={() => handleRejectTrip(trip.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                        >
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        );
    });
}
