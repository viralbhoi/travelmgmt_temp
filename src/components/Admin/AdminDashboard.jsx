import React, { useState, useEffect } from 'react'
import AdminNav from './AdminNav'
import { useAppContext } from "../../context/AppContext";
import Card from './Card';
import TripDataTable from './TripDataTable';


export default function AdminDashboard() {

  const { trips, users, drivers } = useAppContext();

  const [stats, setStats] = useState({
    totalTrip: 0,
    pendingTrip: 0,
    approvedTrip: 0,
    rejectedTrip: 0,
    totalUser: 0,
    totalUserTrip: 0,
    totalDriver: 0,
    totalDriverTrip: 0,
  });

  useEffect(() => {
    const pending = trips.filter((t) => t.status === "pending").length;
    const approved = trips.filter((t) => t.status === "approved").length;
    const rejected = trips.filter((t) => t.status === "rejected").length;

    const userTrips = trips.filter((t) => t.userEmail).length;
    const driverTrips = trips.filter((t) => t.driverEmail).length;

    setStats({
      totalTrip: trips.length,
      pendingTrip: pending,
      approvedTrip: approved,
      rejectedTrip: rejected,
      totalUser: users.length,
      totalUserTrip: userTrips,
      totalDriver: drivers.length,
      totalDriverTrip: driverTrips,
    });
  }, [trips, users, drivers]);

  
  return (
    <div>
      <AdminNav/>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card title="Total Trips" value={stats.totalTrip} />
          <Card title="Pending Trips" value={stats.pendingTrip} />
          <Card title="Approved Trips" value={stats.approvedTrip} />
          <Card title="Rejected Trips" value={stats.rejectedTrip} />
          <Card title="Total Users" value={stats.totalUser} />
          <Card title="User Trips" value={stats.totalUserTrip} />
          <Card title="Total Drivers" value={stats.totalDriver} />
          <Card title="Driver Trips" value={stats.totalDriverTrip} />
      </div>

      <TripDataTable/>
    </div>
  )
}
