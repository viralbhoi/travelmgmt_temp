import React, { createContext, useContext, useState, useEffect } from "react";
import { getFromLS, saveToLS } from "../utils/localStorageUtils";
import { dummyUsers, dummyDrivers, dummyAdmins,cities,cityDistances,perKMcost} from "../data/dummyData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [users, setUsers] = useState(getFromLS("users") || dummyUsers);
    const [admins, setAdmins] = useState(getFromLS("admins") || dummyAdmins);
    const [drivers, setDrivers] = useState(
        getFromLS("drivers") || dummyDrivers
    );

    const city = cities;
    const cityDistanceData = cityDistances;
    const costPerKM = perKMcost
    const [trips, setTrips] = useState(getFromLS("trips") || []);
    const [loggedInUser, setLoggedInUser] = useState(
        getFromLS("loggedInUser") || null
    );

    

    useEffect(() => {
        saveToLS("users", users);
        saveToLS("drivers", drivers);
        saveToLS("trips", trips);
        saveToLS("admins", admins);
        saveToLS("loggedInUser", loggedInUser);
    }, [users, drivers, trips, loggedInUser, admins]);

    return (
        <AppContext.Provider
            value={{
                admins,
                users,
                drivers,
                trips,
                setTrips,
                loggedInUser,
                setLoggedInUser,
                setAdmins,
                setDrivers,
                setUsers,
                city,
                cityDistanceData,
                costPerKM
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
