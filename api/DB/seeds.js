const mongoose = require("mongoose");
const Task = require("./DB/models/Task"),
  Grocery = require("./DB/models/Grocery"),
  Family = require("./DB/models/Family"),
  Calender = require("./DB/models/Calender");

module.exports = seedDB = () => {
  const FamilySeeds = new Family({
    familyName: "LightHousers",
    familyMembers: [
      { firstname: "Quin", lastname: "Aiton", avatar: "" },
      { firstname: "Aaron", lastname: "Janes", avatar: "" },
      { firstname: "Rob", lastname: "Morris", avatar: "" },
    ],
  });
  Family.create(FamilySeeds);
};
