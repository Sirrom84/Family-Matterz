export function useOnAppointmentFormOpening(e) {
  e.popup.option("showTitle", true);
  e.popup.option(
    "title",
    e.appointmentData.text ? e.appointmentData.text : "Family Matterz"
  );

  const form = e.form;
  let mainGroupItems = form.itemOption("mainGroup").items;
  if (
    !mainGroupItems.find(function (i) {
      return i.dataField === "phone";
    })
  ) {
    mainGroupItems.push({
      colSpan: 2,
      label: { text: "Phone Number" },
      editorType: "dxTextBox",
      dataField: "phone",
    });
    form.itemOption("mainGroup", "items", mainGroupItems);
  }

  let formItems = form.option("items");
  if (
    !formItems.find(function (i) {
      return i.dataField === "location";
    })
  ) {
    formItems.push({
      colSpan: 2,
      label: { text: "Location" },
      editorType: "dxTextBox",
      dataField: "location",
    });
    form.option("items", formItems);
  }
}
