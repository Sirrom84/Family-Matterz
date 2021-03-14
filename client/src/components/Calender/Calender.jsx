// @flow
import React, { Component, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
  ReactAgenda,
  ReactAgendaCtrl,
  guid,
  getUnique,
  getLast,
  getFirst,
  Modal,
} from "react-agenda";
import "../Calender/Calender.css";
import { BsArrowsCollapse, BsArrowsExpand, BsPlusSquare } from "react-icons/bs";

var now = new Date();

require("moment");

var colors = {
  "color-1": "rgba(102, 195, 131 , 1)",
  "color-2": "rgba(242, 177, 52, 1)",
  "color-3": "rgba(235, 85, 59, 1)",
  "color-4": "rgba(70, 159, 213, 1)",
  "color-5": "rgba(170, 59, 123, 1)",
};

// Build an axios call to get the appointments from the data base

let items = [
  {
    _id: guid(),
    name: "Meeting , dev staff!",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      10,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      12,
      0
    ),
    classes: "color-1 color-4",
  },
  {
    _id: guid(),
    name: "Working lunch , Holly",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      11,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      13,
      0
    ),
    classes: "color-2",
  },
  // {
  //   _id: guid(),
  //   name: "Conference , plaza",
  //   startDateTime: new Date(
  //     now.getFullYear(),
  //     now.getMonth(),
  //     now.getDate() + 1,
  //     11,
  //     0
  //   ),
  //   endDateTime: new Date(
  //     now.getFullYear(),
  //     now.getMonth(),
  //     now.getDate() + 1,
  //     14,
  //     30
  //   ),
  //   classes: "color-4",
  // },
  {
    _id: "event-4",
    name: "Customers issues review",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 2,
      10,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 2,
      15,
      0
    ),
    classes: "color-3",
  },
  {
    _id: "event-5",
    name: "Group activity",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 3,
      10,
      0
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 3,
      16,
      30
    ),
    classes: "color-4",
  },
  {
    _id: "event-6",
    name: "Fun Day !",
    startDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 7,
      9,
      14
    ),
    endDateTime: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 7,
      17
    ),
    classes: "color-3",
  },
];

export default class Agenda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selected: [],
      cellHeight: 60 / 4,
      showModal: false,
      locale: "fr",
      rowsPerHour: 4,
      numberOfDays: 4,
      startDate: new Date(),
    };
    this.handleRangeSelection = this.handleRangeSelection.bind(this);
    this.handleItemEdit = this.handleItemEdit.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this.addNewEvent = this.addNewEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleCellSelection = this.handleCellSelection.bind(this);
  }

  componentDidMount() {
    // console.log("component did mount");
    // axios("http://localhost:9000/calender/items")
    //   // this should be an array of data called items
    //   .then((response) => {
    //     console.log("response :>> ", response.data[0].listOfItems);
    //     let items = response.data[0].listOfItems;
    //     console.log("items :>> ", items);
    this.setState({ items: items });
    // });
  }

  componentWillReceiveProps(next, last) {
    if (next.items) {
      this.setState({ items: next.items });
    }
  }
  handleItemEdit(item, openModal) {
    if (item && openModal === true) {
      this.setState({ selected: [item] });
      return this._openModal();
    }
  }
  handleCellSelection(item, openModal) {
    if (this.state.selected && this.state.selected[0] === item) {
      return this._openModal();
    }
    this.setState({ selected: [item] });
  }

  zoomIn() {
    var num = this.state.cellHeight + 15;
    this.setState({ cellHeight: num });
  }
  zoomOut() {
    var num = this.state.cellHeight - 15;
    this.setState({ cellHeight: num });
  }

  handleDateRangeChange(startDate, endDate) {
    this.setState({ startDate: startDate });
  }

  handleRangeSelection(selected) {
    this.setState({ selected: selected, showCtrl: true });
    this._openModal();
  }

  _openModal() {
    this.setState({ showModal: true });
  }
  _closeModal(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ showModal: false });
  }

  handleItemChange(items, item) {
    this.setState({ items: items });
  }

  handleItemSize(items, item) {
    this.setState({ items: items });
  }

  removeEvent(items, item) {
    this.setState({ items: items });
  }

  // Add a new event to state

  addNewEvent(items, newItems) {
    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
  }
  editEvent(items, item) {
    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
  }

  changeView(days, event) {
    this.setState({ numberOfDays: days });
  }

  render() {
    var AgendaItem = function (props) {
      console.log(" item component props", props);
      return (
        <div
          style={{
            display: "block",
            position: "absolute",
            background: "rgba(255,255,255, 0.00)",
          }}
        >
          {/* {props.item.name}{" "} */}
          <button className="myButton" onClick={() => props.edit(props.item)}>
            View{" "}
          </button>
        </div>
      );
    };
    return (
      <div className="content-expanded ">
        <div>
          <h2>
            {" "}
            <center> Family MatterZ </center>{" "}
          </h2>
        </div>
        <div className="control-buttons">
          <button className="button-control-new" onClick={this.zoomIn}>
            {" "}
            <BsArrowsCollapse className="layoutIcons" />{" "}
          </button>
          <button className="button-control-new" onClick={this.zoomOut}>
            {" "}
            <BsArrowsExpand className="layoutIcons" />{" "}
          </button>
          <button className="button-control-new" onClick={this._openModal}>
            {" "}
            <BsPlusSquare className="layoutIcons" />{" "}
          </button>
          <button
            className="button-control-new"
            onClick={this.changeView.bind(null, 7)}
          >
            {" "}
            {moment.duration(7, "Days").humanize()}{" "}
          </button>
          <button
            className="button-control-new"
            onClick={this.changeView.bind(null, 5)}
          >
            {" "}
            {moment.duration(5, "Days").humanize()}{" "}
          </button>
          {/* <button
            className="button-control-new"
            onClick={this.changeView.bind(null, 3)}
          >
            {" "}
            {moment.duration(3, "days").humanize()}{" "}
          </button> */}
          <button
            className="button-control-new"
            onClick={this.changeView.bind(null, 1)}
          >
            {" "}
            {moment.duration(1, "Day").humanize()}{" "}
          </button>
        </div>

        <ReactAgenda
          minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
          maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
          startDate={this.state.startDate}
          startAtTime={8}
          endAtTime={23}
          cellHeight={this.state.cellHeight}
          locale="en"
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          headFormat={"ddd DD MMM"}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          helper={true}
          itemComponent={AgendaItem} // <- Important AJ
          view="calendar"
          autoScale={false}
          fixedHeader={true}
          onRangeSelection={this.handleRangeSelection.bind(this)}
          onChangeEvent={this.handleItemChange.bind(this)}
          onChangeDuration={this.handleItemSize.bind(this)}
          onItemEdit={this.handleItemEdit.bind(this)}
          onCellSelect={this.handleCellSelection.bind(this)}
          onItemRemove={this.removeEvent.bind(this)}
          onDateRangeChange={this.handleDateRangeChange.bind(this)}
        />
        {this.state.showModal ? (
          <Modal clickOutside={this._closeModal}>
            <div className="modal-content">
              <ReactAgendaCtrl
                items={this.state.items}
                itemColors={colors}
                selectedCells={this.state.selected}
                Addnew={this.addNewEvent}
                edit={this.editEvent}
              />
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}
