import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function ConfirmTrip() {
    const { trips, setTrips, drivers, users } = useAppContext();

    const [pendingTrips, setPendingTrips] = useState([]);

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

            <div>
                <h2>Confirm Pending Requests</h2>

                <div>
                    {pendingTrips.map((trip, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <p>ID: </p>
                                    <p>{trip.id}</p>
                                </div>

                                <div>
                                    <p>User: </p>
                                    <p>
                                        {
                                            users.find(
                                                (u) =>
                                                    u.email === trip.userEmail
                                            )?.username
                                        }
                                    </p>
                                </div>

                                <div>
                                    <p>StartDate &rarr; EndDate: </p>
                                    <p>
                                        {trip.startDate} &rarr; {trip.endDate}
                                    </p>
                                </div>

                                <div>
                                    <p>Pickup &rarr; Destination: </p>
                                    <p>
                                        {trip.pickup} &rarr; {trip.destination}
                                    </p>
                                </div>

                                <select name="driver" id="driver">
                                    {getAvailableDrivers(trip).map(
                                        (driver, index) => {
                                            return (
                                                <option
                                                    value={driver.email}
                                                    key={index}
                                                >
                                                    {driver.username}
                                                </option>
                                            );
                                        }
                                    )}
                                </select>

                                <button>Approve Trip</button>

                                <button>Reject Trip</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
