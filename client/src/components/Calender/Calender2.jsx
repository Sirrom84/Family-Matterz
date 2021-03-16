import React, { createRef } from "react";
import Scheduler, { Resource, Editing } from "devextreme-react/scheduler";
import { useData, employees } from "./useData";
import DataCell from "./DataCell";
import ResourceCell from "./ResourceCell";
import "./styles.css";
import Button from "devextreme-react/button";
const currentDate = new Date(2021, 2, 26, 1, 30);
const groups = ["employeeID"];
const views = ["month", "day", "workWeek", "agenda"];

const schedulerRef = createRef();

const addAppointment = () => {
  schedulerRef.current.instance.addAppointment({
    text: "Website Re-Design Plan",
    startDate: new Date(2021, 3, 25, 9, 30),
    endDate: new Date(2021, 3, 25, 11, 30),
  });
};

const App = () => {
  const data = useData();

  return (
    <>
      <Button text="Add" onClick={addAppointment} />
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        dataCellComponent={DataCell}
        resourceCellComponent={ResourceCell}
        groups={groups}
        views={views}
        ref={schedulerRef}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={600}
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
    </>
  );
};

export default App;
