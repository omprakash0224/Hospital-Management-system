import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [appointmentsCount, setAppointmentsCount] = useState(0);
  const { isAuthenticated, user } = useContext(Context);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/appointment/getall`, {
          withCredentials: true
        })
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    }

    const fetchCounts = async () => {
      try {
        const appointmentsRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/appointment/count`, {
          withCredentials: true
        });
        setAppointmentsCount(appointmentsRes.data.count);

        const doctorsRes = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/user/doctors/count`, {
          withCredentials: true
        });
        setDoctorsCount(doctorsRes.data.count);
      } catch (error) {
        setAppointmentsCount(0);
        setDoctorsCount(0);
      }
    }
    fetchAppointments();
    fetchCounts();
  }, [])

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/appointment/update/${appointmentId}`, { status }, {
        withCredentials: true
      })
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/doc.png" alt="docImg" />
            <div className="content">
              <div>
                <div>
                  {/* <p>Hello ,</p> */}
                  <p>
                    Welcome to the ZeeCare Healthcare Admin Dashboard
                  </p>
                  {/* <h5>
                    {user &&
                      `${user.firstName} ${user.lastName}`}{" "}
                  </h5> */}
                </div>

              </div>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Appointments</p>
            <h3>{appointmentsCount}</h3>
          </div>
          <div className="thirdBox">
            <p>Registered Doctors</p>
            <h3>{doctorsCount}</h3>
          </div>
        </div>
        <div className="banner">
          <h5>Appointments</h5>
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Visited</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0
                ? appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                    <td>{appointment.phone}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.appointment_date.substring(0, 16)}</td>
                    <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                    <td>{appointment.department}</td>
                    <td>
                      <select
                        className={
                          appointment.status === "Pending"
                            ? "value-pending"
                            : appointment.status === "Accepted"
                              ? "value-accepted"
                              : "value-rejected"
                        }
                        value={appointment.status}
                        onChange={(e) =>
                          handleUpdateStatus(appointment._id, e.target.value)
                        }
                      >
                        <option value="Pending" className="value-pending">
                          Pending
                        </option>
                        <option value="Accepted" className="value-accepted">
                          Accepted
                        </option>
                        <option value="Rejected" className="value-rejected">
                          Rejected
                        </option>
                      </select>
                    </td>
                    <td>{appointment.hasVisited === true ? <GoCheckCircleFill className="green" /> : <AiFillCloseCircle className="red" />}</td>
                  </tr>
                ))
                : "No Appointments Found!"}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Dashboard
