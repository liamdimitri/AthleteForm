const mongoose = require('mongoose');

const AthleteProfile = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  sport:{
    type: String,
    required: true
  },
  gender:{
    type: String,
    required: true
  },
  dob:{
    type: String,
    required: false
  },
  description:{
    type: String,
    required: true
  },
  interests:{
    type: String,
  },
  location:{
    type: String,
    required: true
  },
  team:{ 
    type: String,
    required: true
  }, 
  date:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Profile', AthleteProfile)