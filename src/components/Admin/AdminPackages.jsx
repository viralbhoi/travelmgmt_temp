// import { useState } from 'react'
import React, { useState } from "react";
import AdminNav from "./AdminNav";
import { useAppContext } from "../../context/AppContext";

export default function AdminPackages() {
    const { drivers, users, packages, setPackages } = useAppContext();

    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [costPerPerson, setCostPerPerson] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [seats, setSeats] = useState(0);
    const [place, setPlace] = useState("");
    const [placesCovered, setPlacesCovered] = useState([]);
    const [selectedDriverEmail, setSelectedDriverEmail] = useState("");

    const handelPlaceAddition = () => {};

    return (
        <div className="flex">
            <AdminNav />

            <div className="flex-1 md:ml-[20%] flex flex-col p-3">
                <div>
                    <h2 className="bg-slate-800 text-2xl text-slate-50 text-center font-semibold p-4 rounded-2xl">Add Package</h2>

                    <div>
                        <form>
                            <div>
                                <label htmlFor="pickup"> Pickup: </label>
                                <input
                                    type="text"
                                    placeholder="pickup"
                                    name="pickup"
                                    id="pickup"
                                />
                            </div>

                            <div>
                                <label htmlFor="destination">
                                    {" "}
                                    Destination:{" "}
                                </label>
                                <input
                                    type="text"
                                    placeholder="destination"
                                    name="destination"
                                    id="destination"
                                />
                            </div>

                            <div>
                                <label htmlFor="costPerPerson">
                                    {" "}
                                    Cost Per person:{" "}
                                </label>
                                <input
                                    type="number"
                                    placeholder="costPerPerson"
                                    name="costPerPerson"
                                    id="costPerPerson"
                                />
                            </div>

                            <div>
                                <label htmlFor="startDate"> Start Date: </label>
                                <input
                                    type="date"
                                    placeholder="startDate"
                                    name="startDate"
                                    id="startDate"
                                />
                            </div>

                            <div>
                                <label htmlFor="endDate"> End Date: </label>
                                <input
                                    type="date"
                                    placeholder="endDate"
                                    name="endDate"
                                    id="endDate"
                                />
                            </div>

                            <div>
                                <label htmlFor="seats"> Seats: </label>
                                <input
                                    type="number"
                                    placeholder="seats"
                                    name="seats"
                                    id="seats"
                                />
                            </div>

                            <div>
                                <label htmlFor="driver"> Driver: </label>

                                <select name="driver" id="driver">
                                    {drivers.map((driver, index) => {
                                        return (
                                            <option value={driver.email}>
                                                {" "}
                                                {driver.username}{" "}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="addPlacesCovered">
                                    {" "}
                                    Places Covered:{" "}
                                </label>

                                <input
                                    type="text"
                                    value={place}
                                    placeholder="Places Covered"
                                    id="addPlacesCovered"
                                    name="addPlacesCovered"
                                />

                                <button onClick={handelPlaceAddition}>
                                    {" "}
                                    Add{" "}
                                </button>

                                <div>
                                    {placesCovered.map((place, index) => {
                                        return (
                                            <div
                                                className="inline-block p-2 px-3 m-1 rounded-2xl"
                                                key={index}
                                            >
                                                {place}
                                            </div>
                                        );
                                    })}
                                </div>

                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <h2 className="bg-slate-800 text-2xl text-slate-50 text-center font-semibold p-4 rounded-2xl">All Package</h2>
                    <div className="w-[100%]">
                        {packages.map((packge) => {
                            return (
                                <div className="flex flex-col gap-4  p-4 m-2 bg-slate-300 rounded-2xl shadow-md">
                                    <div className="flex flex-wrap justify-between flex-col md:flex-row">
                                        <div className="flex flex-col justify-center">
                                            <p>
                                                {packge.pickup} &rarr;{" "}
                                                {packge.destination}
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <p>
                                                {packge.startDate} &rarr;{" "}
                                                {packge.endDate}
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <p>Cost per Person : </p>
                                            <p>{packge.costPerPerson}</p>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <p> Seats : </p>
                                            <p>{packge.seats}</p>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <p> Driver : </p>
                                            <p>
                                                {
                                                    drivers.find(
                                                        (driver) =>
                                                            packge.driverEmail ===
                                                            driver.email
                                                    ).username
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p> places Covered : </p>
                                        <div className="flex flex-wrap gap-4">
                                            {packge.placesCovered.map(
                                                (place, index) => {
                                                    return (
                                                        <div className="inline-block px-3 p-2 rounded-2xl border">
                                                            {place}
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
