import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function DriverDashboard() {

  const {loggedInUser,setLoggedInUser,trips} = useAppContext();

    return (
        <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-2xl font-semibold text-black">Driver Panel</h2>
            <button className="px-4 py-2 bg-red-500 text-white text-lg !rounded-xl">
                Logout
            </button>

            <div>
              <h3>Your Trips</h3>

              <div className="flex gap-1">
                {trips.length === 0 ?
                (<p>Horray no trips available</p>) : (
                  ""
                )}
              </div>
            </div>
        </div>
    );
}
