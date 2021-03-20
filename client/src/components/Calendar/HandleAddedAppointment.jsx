import react, { useEffect } from "react";
import axios from "axios";

//helper function to add appointment to database
export function HandleAddedAppointment(appointment) {
  const url = "http://localhost:9000/calender/create";
  axios.put(url, appointment);
  console.log("You have created this appointment in the DB :", appointment);
}
