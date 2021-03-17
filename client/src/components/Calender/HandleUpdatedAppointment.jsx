import react from "react";
import axios from "axios";

// helper function to update appointment
export function HandleUpdatedAppointment(appointment) {
  const url = "http://localhost:9000/calender/update";
  axios.put(url, appointment);
  console.log("You Are requesting to update this appointment", appointment);
}
