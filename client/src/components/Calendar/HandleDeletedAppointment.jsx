import axios from "axios";

// delete a appointment from the database and state
export function HandleDeletedAppointment(appointment) {
  const url = "http://localhost:9000/calender/delete";
  axios.put(url, appointment);
  console.log("You Are requesting to delete this appointment", appointment);
}
