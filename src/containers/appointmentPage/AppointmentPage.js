import React, {useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  // Local State Variable
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
      setTitle("");
      setContact("");
      setDate("");
      setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {/* AppointmentForm will go here */}
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          time={time}
          setTime={setTime}
          date={date}
          setDate={setDate}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {/* TileList will go here */}
        <TileList items={appointments}/>
      </section>
    </div>
  );
};