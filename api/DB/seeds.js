const mongoose = require('mongoose');
const Task = require('./DB/models/Task'),
  Grocery = require('./DB/models/Grocery'),
  Family = require('./DB/models/Family'),
  Calander = require('./DB/models/Calander');

module.exports = seedDB = () => {
  const FamilySeeds = new Family({
    familyName: 'Lighthousers',
    familyMembers: [
      { firstname: 'Quin', lastname: 'Aiton', avatar: '' },
      { firstname: 'Aaron', lastname: 'Janes', avatar: '' },
      { firstname: 'Rob', lastname: 'Morris', avatar: '' },
    ],
  });
  Family.create(FamilySeeds);
};
