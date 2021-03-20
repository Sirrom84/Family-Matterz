import React, { createRef, useState, useEffect } from "react";
import Scheduler, { Resource } from "devextreme-react/scheduler";
import DataCell from "./DataCell";
import ResourceCell from "./ResourceCell";
import "./styles.scss";

// custom hooks for helper functions form
import { useData, employees } from "./useData";
import { useOnAppointmentFormOpening } from "./useMakeAppointment";
import { HandleDeletedAppointment } from "./HandleDeletedAppointment";
import { HandleAddedAppointment } from "./HandleAddedAppointment";
import { HandleUpdatedAppointment } from "./HandleUpdatedAppointment";

const currentDate = new Date();
console.log("The current date and time is ", currentDate);

const groups = ["employeeID"];
const views = ["month", "day", "workWeek", "agenda"];

const Calendar2 = () => {
  // set up a local state object
  const [appointments, setAppointments] = useState(null);
  // brings data in from Mongo
  const data = useData();
  //  Sets state up initially with the data from mongo
  useEffect(() => {
    setAppointments(data);
  }, [data]);

  const schedulerRef = createRef();
  let currentDate = new Date(2021, 3, 17);

  return (
    <>
      {appointments !== null && (
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={appointments}
          dataCellComponent={DataCell}
          defaultCurrentDate={currentDate}
          onAppointmentFormOpening={useOnAppointmentFormOpening}
          onAppointmentUpdated={(e) => {
            HandleUpdatedAppointment(e.component._editAppointmentData);
          }}
          onAppointmentAdded={(e) => {
            HandleAddedAppointment(e.appointmentData);
          }}
          onAppointmentDeleted={(e) => {
            HandleDeletedAppointment(e.appointmentData);
          }}
          resourceCellComponent={ResourceCell}
          groups={groups}
          views={views}
          ref={schedulerRef}
          defaultCurrentView="month"
          height={550}
          showAllDayPanel={true}
          firstDayOfWeek={1}
          startDayHour={8}
          endDayHour={18}
        >
          <Resource
            label="Employee"
            fieldExpr="employeeID"
            dataSource={employees}
            allowMultiple={false}
          />
        </Scheduler>
      )}
    </>
  );
};

export default Calendar2;
