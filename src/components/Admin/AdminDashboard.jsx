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
    totalRevenue:0,
  });

  useEffect(() => {
    const pending = trips.filter((t) => t.status === "pending").length;
    const approved = trips.filter((t) => t.status === "approved").length;
    const rejected = trips.filter((t) => t.status === "rejected").length;

    const userTrips = trips.filter((t) => t.userEmail).length;
    const driverTrips = trips.filter((t) => t.driverEmail).length;
    const revenue = trips.reduce((total, trip) => total + (Number(trip.cost) || 0), 0);

    setStats({
      totalTrip: trips.length,
      pendingTrip: pending,
      approvedTrip: approved,
      rejectedTrip: rejected,
      totalUser: users.length,
      totalUserTrip: userTrips,
      totalDriver: drivers.length,
      totalDriverTrip: driverTrips,
      totalRevenue: revenue
    });
  }, [trips, users, drivers]);

  
  return (
    <div className='flex flex-wrap'>
      <AdminNav/>

      <div className="w-[100%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
          <Card title="Total Trips" value={stats.totalTrip} iconStyle="fa fa-ticket"/>
          <Card title="Total Revenue" value={stats.totalRevenue} iconStyle="fa fa-money"/>
          <Card title="Pending Trips" value={stats.pendingTrip} iconStyle="fa fa-clock-o"/>
          <Card title="Approved Trips" value={stats.approvedTrip} iconStyle="fa fa-check-square"/>
          <Card title="Rejected Trips" value={stats.rejectedTrip} iconStyle="fa fa-times"/>
          <Card title="Total Users" value={stats.totalUser} iconStyle="fa fa-users"/>
          <Card title="User Trips" value={stats.totalUserTrip} iconStyle="fa fa-users"/>
          <Card title="Total Drivers" value={stats.totalDriver} iconStyle="fa fa-taxi"/>
          <Card title="Driver Trips" value={stats.totalDriverTrip} iconStyle="fa fa-users"/>
      </div>

      {/* <TripDataTable/> */}
    </div>
  )
}
